import { IShot } from "@types";
import React, { useRef, useEffect, useState, RefObject } from "react";
import Head from "next/head";
import { CalendarTooltipProps } from "@nivo/calendar";
import { calendarDataFormat, gameDistPie } from "@util";
import { Calendar, Pie } from "@components/charts";
import { Container, LoadWrapper, Modal } from "@components/global";
import {
  ErrorNoData,
  ErrorSection,
  LoadingSection,
} from "@components/experience-fragments";
import CSS from 'csstype';
import { basePath } from '../next.config';

import { getHofAuthors, getHofImages, getSysImages } from './api/request';
import { addProperties, normalizeData } from '../util/utils';

interface CalendarPieTooltip extends CalendarTooltipProps {
  data: {
    shots: IShot[];
  };
}

const CustomTooltip = (data: CalendarTooltipProps) => {
  return (
    <div className="bg-framed-black text-framed-white py-1 px-3 rounded-md shadow-md">
      {new Date(data.day).toLocaleDateString("en-US", {
        timeZone: "UTC",
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}
      : <strong>{data.value}</strong>
    </div>
  );
};

const ModalContent = ({ data }: { data: CalendarTooltipProps }) => {
  if (!('data' in data)){
    return null;
  }

  return (
    <div className="bg-framed-black text-framed-white py-1 px-3 rounded-md h-96 aspect-video">
      {new Date(data.day).toLocaleDateString("en-US", {
        timeZone: "UTC",
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}
      : <strong>{data.value}</strong>
      <Pie
        data={gameDistPie((data as CalendarPieTooltip).data.shots, 11)}
        tooltip={(d) => (
          <div className="bg-framed-black text-framed-white py-1 px-3 rounded-md shadow-md">
            {d.datum.label}: <strong>{d.datum.value}</strong> shots
          </div>
        )}
      />
    </div>
  );
};

const insertFlavourText = (text: any[]) => {
  const paragraphs = text.map((paragraph, index) => <> {index !== text.length -1 ? <br /> : null } <p> {paragraph} </p> </>);
  return (
    <>
      {paragraphs}
    </>
  );
};

export default function WrapYear(year: number, flavourText: { intro: any; top10sys: any; top10hof: any; busysys: any; busyhof: any; }) {
  const getHOFUrl = (item: {gameName: any; epochTime: any; }) => {
    return `https://framedsc.com/HallOfFramed/?title=${item.gameName}&after=${year}-01-01&before=${year+1}-01-01&imageId=${item.epochTime}`
  }

  const [visible, setVisible] = useState(false);
  const [calendarDatum, setCalendarDatum] = useState<CalendarTooltipProps>();
  const [data, setData] = useState({sys: new Array<IShot>(), hof: new Array<IShot>(), authors: new Array<object>()});
  const [initialized, setInitialized] = useState(false);

  const getData = async () => {
    const imagesResponse = await getHofImages();
    const authorsResponse = await getHofAuthors();
    const sysResponse = await getSysImages(year);
    const normalizedSysImages = normalizeData(sysResponse.data);
    const systImagesList = Object.values(normalizedSysImages[0]) as IShot[];
    // drop the _default entry
    systImagesList.pop();
    const normalizedImages = normalizeData(imagesResponse.data._default);
    const normalizedAuthors = normalizeData(authorsResponse.data._default);
    const formattedImages = addProperties(normalizedImages, normalizedAuthors);

    const startofyear: number = new Date(year, 0, 1).getTime() / 1000;
    const endofyear: number = new Date(year + 1, 0, 1).getTime() / 1000;

    const yearImages = formattedImages.filter((item: { epochTime: number; }) => item.epochTime > startofyear && item.epochTime < endofyear);

    setData({ sys: systImagesList, hof: yearImages, authors: normalizedAuthors});
  };

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      // you can't have an async useEffect, so usually people create an async function and call it right after
      const getDataAsync = async () => {
        // awaiting for getData to finish
        await getData();
      }
      getDataAsync();
    }
  },)

  const dataAvailable = data.hof.length > 0 && data.authors.length > 0;

  const segments: {
    [key: string]: RefObject<HTMLDivElement>;
  } = {
    "Top 10 Games in Share Your Shot": useRef<HTMLDivElement>(null),
    "Top 10 Games in the Hall of Framed": useRef<HTMLDivElement>(null),
    "Most Active Day in Share Your Shot": useRef<HTMLDivElement>(null),
    "Most Active Day in the Hall of Framed": useRef<HTMLDivElement>(null),
    "Daily Hall of Framed": useRef<HTMLDivElement>(null),
    "Daily Share Your Shot": useRef<HTMLDivElement>(null),
  };

  data.hof.forEach(item => item as IShot);
  data.sys.forEach(item => item as IShot);

  //console.log("hof entries", data.hof.length);
  //console.log("hof game entries", new Set(data.hof.map(entry => entry.gameName)).size);

  if (!dataAvailable) {
    return <LoadingSection />;
  }

  /*
  if (error) {
    return <ErrorSection message={error.message} />;
  }
  */

  if (!data) {
    return <ErrorNoData />;
  }

  const grid: IShot[] = Array.from(Array(9).keys()).map(() => {
    const randIdx = Math.floor(Math.random() * data.hof.length - 1);
    return data.hof[randIdx];
  });

  const categoriesImages: IShot[] = Array.from(Array(3).keys()).map(() => {
    const randIdx = Math.floor(Math.random() * data.hof.length - 1);
    return data.hof[randIdx];
  });

  const top10sys = gameDistPie(data.sys, 11)
    .map((item) => {
      // get shots from this game
      const shotsFromGame = data.hof.filter(
        (shot) => shot.gameName === item.label,
      );
      const randIdx = Math.floor(Math.random() * shotsFromGame.length - 1);
      // pick random shot for game
      return { ...shotsFromGame[randIdx], ...item };
    })
    .filter((item) => !!item.thumbnailUrl);

  const mostActiveSys = gameDistPie(
    calendarDataFormat(data.sys).sort((a, b) => b.value - a.value)[0].shots,
    11,
  ).map((item) => {
    const gameList = data.hof.filter(
      (shot) => shot.gameName === item.label && !!shot.thumbnailUrl,
    );
    const randIdx = Math.floor(Math.random() * gameList.length - 1);
    if (!gameList[randIdx]) {
      return { ...gameList[0], ...item };
    }
    return { ...gameList[randIdx], ...item };
  })
  .filter((item) => !!item.thumbnailUrl);

  const mostActiveHof = gameDistPie(
    calendarDataFormat(data.hof).sort((a, b) => b.value - a.value)[0].shots,
    11,
  ).map((item) => {
    const gameList = data.hof.filter(
      (shot) => shot.gameName === item.label && !!shot.thumbnailUrl,
    );
    const randIdx = Math.floor(Math.random() * gameList.length - 1);
    if (!gameList[randIdx]) {
      return { ...gameList[0], ...item };
    }
    return { ...gameList[randIdx], ...item };
  });

  const top10hof = gameDistPie(data.hof, 11)
    .map((item) => {
      const gameList = data.hof.filter(
        (shot) => shot.gameName === item.label && !!shot.thumbnailUrl,
      );
      const randIdx = Math.floor(Math.random() * gameList.length - 1);
      return { ...gameList[randIdx], ...item };
    })
    .filter((item) => !!item.thumbnailUrl);

  const recapLogoStyle: CSS.Properties = {
    position: 'relative',
    marginTop: '10px',
    marginBottom: '20px',
    padding: '0px 20px',
    left: '50%',
    width: '500px',
    transform: 'translate(-50%, 0%)',
  }

  const imageShadowStyle = {filter: "drop-shadow(0px 5px 5px #00000077)"}

  return (
    <>
      <Head>
        <title>A Year of FRAMED: {year}</title>
      </Head>
      <LoadWrapper>
        <main className="relative">
          <div className="relative z-10 bg-framed-black/60">
            <Container className="pt-20 md:pt-0">
              <div className="min-h-screen md:flex md:items-center load transition-all -translate-y-10 opacity-0 duration-500 mb-8">
                <div className="md:grid md:grid-cols-2 md:gap-x-16">
                  <div className="flex flex-col justify-center">
                    <img src={`${basePath}/recap-wsub-logo.svg`} style={ recapLogoStyle }/>
                    <br />
                    <p>
                      Welcome to Framed&apos;s {year} in Review!
                    </p>
                    <br />
                    { insertFlavourText(flavourText.intro) }
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="grid grid-cols-3 gap-4 aspect-square mt-8 md:mt-32" style = { imageShadowStyle }>
                      {grid.map((item, index) => {
                        return (
                          <a
                            key={`${item.author}-${index}`}
                            className="relative aspect-square overflow-hidden"
                            href= { getHOFUrl(item) }
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="absolute w-full h-full transition-all duration-500 opacity-0 translate-y-5 hover:opacity-100 hover:translate-y-0">
                              <p
                                className={`
                            absolute bottom-0 left-0 right-0 text-white text-sm p-3
                            bg-gradient-to-t from-black/75
                          `}
                              >
                                {item.gameName}
                                <br />
                                <span className="text-white/75 text-xs">
                                  {item.author}
                                </span>
                              </p>
                            </div>
                            <picture>
                              <img
                                loading="lazy"
                                className="load transition-all -translate-y-10 opacity-0 duration-500 rounded-md object-cover w-full h-full aspect-square"
                                alt={item.gameName}
                                src={item.thumbnailUrl}
                                //src={ index === 0 ? item.shotUrl : item.thumbnailUrl}
                              />
                            </picture>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-h-screen flex flex-col justify-center load transition-all -translate-y-10 opacity-0 duration-500 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
                  <div className="hidden md:grid grid-cols-3" style = { imageShadowStyle }>
                    {categoriesImages.map((item, index) => {
                      return (
                        <a
                          key={`${item.author}-${index}`}
                          className="relative overflow-hidden aspect-auto"
                          href= { getHOFUrl(item) }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="absolute w-full h-full transition-all duration-500 opacity-0 translate-y-5 hover:opacity-100 hover:translate-y-0">
                            <p
                              className={`
                            absolute bottom-0 left-0 right-0 p-4
                            bg-gradient-to-t from-black/75
                          `}
                            >
                              {item.gameName}
                              <br />
                              <span className="text-white/75 text-xs text-right">
                                {item.author}
                              </span>
                            </p>
                          </div>
                          <picture>
                            <img
                              loading="lazy"
                              className={`
                            load transition-all -translate-y-10 opacity-0 duration-500 object-cover h-full
                            ${
                              index === 0
                                ? "rounded-tl-md rounded-bl-md"
                                : index === 2
                                ? "rounded-tr-md rounded-br-md"
                                : ""
                            }
                            `}
                              alt={item.gameName}
                              src={`${item.thumbnailUrl?.replace(
                                "https://cdn.discordapp.com",
                                "https://media.discordapp.net",
                              )}?width=600&height=600`}
                            />
                          </picture>
                        </a>
                      );
                    })}
                  </div>
                  <div>
                    <h2 className="text-6xl font-semibold mb-8">Categories</h2>
                    {Object.keys(segments).map((key) => {
                      return (
                        <div key={key} className="mb-8" ref={segments[key]}>
                          <div className="flex flex-col justify-center">
                            <button
                              className="text-left"
                              onClick={() => {
                                if (segments[key].current) {
                                  segments[key].current?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                  });
                                }
                              }}
                            >
                              <h3 className="text-3xl font-semibold">{key}</h3>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div
                className="min-h-screen flex items-center load transition-all -translate-y-10 opacity-0 duration-500 mb-8"
                ref={segments["Top 10 Games in Share Your Shot"]}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
                  <div className="md:grid md:grid-rows-2 md:gap-y-8 mb-16 md:mb-0">
                    <div className="h-full flex flex-col justify-end">
                      <h2 className="md:text-6xl text-3xl font-semibold mb-8">
                        Top 10 Games in Share Your Shot
                      </h2>
                      { insertFlavourText(flavourText.top10sys) }
                    </div>
                    <div className="aspect-video hidden md:block">
                      <Pie
                        data={gameDistPie(
                          (data.sys as IShot[]).filter(
                            (shot) =>
                              new Date(shot.date).getTime() >=
                                new Date(`${ year }-01-01`).getTime() &&
                              new Date(shot.date).getTime() <=
                                new Date(`${ year }-12-31`).getTime(),
                          ),
                          11,
                        )}
                        tooltip={(d) => (
                          <div className="bg-framed-black text-framed-white py-1 px-3 rounded-md shadow-md">
                            {d.datum.label}: <strong>{d.datum.value}</strong>{" "}
                            shots
                          </div>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="grid grid-cols-3 grid-rows-3 gap-4" style = { imageShadowStyle }>
                      {top10sys.map((item, index) => {
                        // dont render images if it cant complete the row.
                        //if (top10sys.length%3 !== 0 && index >= top10sys.length - top10sys.length%3 - 1){
                        //  return null;
                        //}
                        return (
                          <a
                            key={`${item.author}-${index}`}
                            className={`
                            relative load transition-all -translate-y-10 opacity-0 duration-500
                            ${index === 0 ? "col-span-1 row-span-2" : ""}
                          `}
                            href= { getHOFUrl(item) }
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="absolute w-full h-full transition-all duration-500 opacity-100 aspect-square">
                              <div
                                className={`
                            absolute bottom-0 left-0 right-0  p-4
                            bg-gradient-to-t from-black/75
                          `}
                              >
                                <p className="text-framed-white font-semibold text-xs md:text-base">
                                  {item.gameName}
                                  <br />
                                </p>
                                <p className="text-white/50 font-medium text-sm">
                                  {item.value} shots
                                    <br />
                                </p>
                                <p className="text-white/75 text-xs text-right">
                                  {item.author}
                                </p>
                              </div>
                            </div>
                            <picture>
                              <img
                                loading="lazy"
                                className="rounded-md object-cover w-full h-full aspect-square"
                                alt={item.gameName}
                                src={item.thumbnailUrl}
                                //src={ index === 0 ? item.shotUrl : item.thumbnailUrl}
                              />
                            </picture>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="min-h-screen flex items-center load transition-all -translate-y-10 opacity-0 duration-500 mb-8"
                ref={segments["Top 10 Games in the Hall of Framed"]}
              >
                <div className="grid md:grid-rows-none md:grid-cols-2 gap-x-16 gap-y-16">
                  <div className="md:flex md:flex-col md:justify-center">
                    <div className="grid grid-cols-3 grid-rows-3 gap-4" style = { imageShadowStyle } >
                      {top10hof.map((item, index) => {
                        return (
                          <a
                            key={`${item.author}-${index}`}
                            className={`
                            relative load transition-all -translate-y-10 opacity-0 duration-500
                            ${index === 0 ? "col-span-1 row-span-2" : ""}
                          `}
                            href= { getHOFUrl(item) }
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="absolute w-full h-full transition-all duration-500 opacity-100 aspect-square">
                              <div
                                className={`
                            absolute bottom-0 left-0 right-0 p-4
                            bg-gradient-to-t from-black/75
                          `}
                              >
                                <p className="text-framed-white font-semibold text-xs md:text-base">
                                  {item.gameName}
                                  <br />
                                </p>
                                <p className="text-white/50 font-medium text-sm">
                                  {item.value} shots
                                    <br />
                                </p>
                                <p className="text-white/75 text-xs text-right">
                                  {item.author}
                                </p>
                              </div>
                            </div>
                            <picture>
                              <img
                                loading="lazy"
                                className="rounded-md object-cover w-full h-full aspect-square"
                                alt={item.gameName}
                                src={item.thumbnailUrl}
                                //src={ index === 0 ? item.shotUrl : item.thumbnailUrl}
                              />
                            </picture>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  <div className="order-first md:order-none md:grid md:grid-rows-2 md:gap-y-8">
                    <div className="md:h-full md:flex md:flex-col md:justify-end">
                      <h2 className="text-3xl md:text-6xl font-semibold mb-8">
                        Top 10 Games in the Hall of Framed
                      </h2>
                      { insertFlavourText(flavourText.top10hof) }
                    </div>
                    <div className="aspect-video hidden md:block">
                      <Pie
                        data={gameDistPie(
                          (data.hof as IShot[]).filter(
                            (shot) =>
                              new Date(shot.date).getTime() >=
                                new Date(`${ year }-01-01`).getTime() &&
                              new Date(shot.date).getTime() <=
                                new Date(`${ year }-12-31`).getTime(),
                          ),
                          11,
                        )}
                        tooltip={(d) => (
                          <div className="bg-framed-black text-framed-white py-1 px-3 rounded-md shadow-md">
                            {d.datum.label}: <strong>{d.datum.value}</strong>{" "}
                            shots
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="min-h-screen flex items-center load transition-all -translate-y-10 opacity-0 duration-500 mb-16"
                ref={segments["Most Active Day in Share Your Shot"]}
              >
                <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-x-16 gap-y-16">
                  <div className="grid md:grid-rows-2 gap-y-8">
                    <div className="h-full flex flex-col justify-end">
                      <h2 className="text-3xl md:text-6xl font-semibold mb-8">
                        Most Active Day in Share Your Shot
                      </h2>
                      <h3 className="text-2xl md:text-4xl font-semibold mb-8">
                        {new Date(
                          calendarDataFormat(data.sys).sort(
                            (a, b) => b.value - a.value,
                          )[0].day,
                        ).toLocaleDateString("en-US", {
                          timeZone: "UTC",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </h3>
                      { insertFlavourText(flavourText.busysys) }
                    </div>
                    <div className="aspect-video hidden md:block">
                      <Pie
                        data={gameDistPie(
                          calendarDataFormat(data.sys).sort(
                            (a, b) => b.value - a.value,
                          )[0].shots,
                          11,
                        )}
                        tooltip={(d) => (
                          <div className="bg-framed-black text-framed-white py-1 px-3 rounded-md shadow-md">
                            {d.datum.label}: <strong>{d.datum.value}</strong>{" "}
                            shots
                          </div>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="grid grid-cols-3 grid-rows-3 gap-4" style = { imageShadowStyle }>
                      {mostActiveSys.slice(0, 10).map((item, index) => {
                        return (
                          <a
                            key={`${item.author}-${index}`}
                            className={`
                            relative load transition-all -translate-y-10 opacity-0 duration-500
                            ${index === 0 ? "col-span-1 row-span-2" : ""}
                          `}
                            href= { getHOFUrl(item) }
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="absolute w-full h-full transition-all duration-500 opacity-100 aspect-square">
                              <div
                                className={`
                            absolute bottom-0 left-0 right-0  p-4
                            bg-gradient-to-t from-black/75
                          `}
                              >
                                <p className="text-framed-white font-semibold text-xs md:text-base">
                                  {item.gameName}
                                  <br />
                                </p>
                                <p className="text-white/50 font-medium text-sm">
                                  {item.value} shots
                                    <br />
                                </p>
                                <p className="text-white/75 text-xs text-right">
                                  {item.author}
                                </p>
                              </div>
                            </div>
                            <picture>
                              <img
                                loading="lazy"
                                className="rounded-md object-cover w-full h-full aspect-square"
                                alt={item.gameName}
                                src={item.thumbnailUrl}
                                //src={ index === 0 ? item.shotUrl : item.thumbnailUrl}
                              />
                            </picture>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="min-h-screen flex items-center load transition-all -translate-y-10 opacity-0 duration-500 mb-16"
                ref={segments["Most Active Day in the Hall of Framed"]}
              >
                <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-x-16 gap-y-16">
                  <div className="md:flex flex-col justify-center">
                    <div className="grid grid-cols-3 grid-rows-3 gap-4" style = { imageShadowStyle }>
                      {mostActiveHof.slice(0, 10).map((item, index) => {
                        return (
                          <a
                            key={`${item.author}-${index}`}
                            className={`
                            relative load transition-all -translate-y-10 opacity-0 duration-500
                            ${index === 0 ? "col-span-1 row-span-2" : ""}
                          `}
                            href= { getHOFUrl(item) }
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="absolute w-full h-full transition-all duration-500 opacity-100 aspect-square">
                              <div
                                className={`
                            absolute bottom-0 left-0 right-0 p-4
                            bg-gradient-to-t from-black/75
                          `}
                              >
                                <p className="text-framed-white font-semibold text-xs md:text-base">
                                  {item.gameName}
                                  <br />
                                </p>
                                <p className="text-white/50 font-medium text-sm">
                                  {item.value} shots
                                    <br />
                                </p>
                                <p className="text-white/75 text-xs text-right">
                                  {item.author}
                                </p>
                              </div>
                            </div>
                            <picture>
                              <img
                                loading="lazy"
                                className="rounded-md object-cover w-full h-full aspect-square"
                                alt={item.gameName}
                                src={item.thumbnailUrl}
                                //src={ index === 0 ? item.shotUrl : item.thumbnailUrl}
                              />
                            </picture>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  <div className="md:grid md:grid-rows-2 md:gap-y-8 order-first md:order-none">
                    <div className="h-full flex flex-col justify-end">
                      <h2 className="text-3xl md:text-6xl font-semibold mb-8">
                        The Most Active Day in the Hall of Framed
                      </h2>
                      <h3 className="text-2xl font-semibold mb-4">
                        {new Date(
                          calendarDataFormat(data.hof).sort(
                            (a, b) => b.value - a.value,
                          )[0].day,
                        ).toLocaleDateString("en-US", {
                          timeZone: "UTC",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </h3>
                      { insertFlavourText(flavourText.busyhof) }
                    </div>
                    <div className="aspect-video hidden md:block">
                      <Pie
                        data={gameDistPie(
                          calendarDataFormat(data.hof).sort(
                            (a, b) => b.value - a.value,
                          )[0].shots,
                          11,
                        )}
                        tooltip={(d) => (
                          <div className="bg-framed-black text-framed-white py-1 px-3 rounded-md shadow-md">
                            {d.datum.label}: <strong>{d.datum.value}</strong>{" "}
                            shots
                          </div>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="calendar h-screen grid grid-rows-2 gap-x-8 md:overflow-hidden">
                <div
                  className="flex flex-col items-center w-h-screen md:w-full"
                  ref={segments["Daily Share Your Shot"]}
                >
                  <h3 className="font-semibold text-3xl pl-20">
                    Share Your Shot Calendar in {year}
                  </h3>
                  <Calendar
                    data={calendarDataFormat(data.sys)}
                    onClick={(d) => {
                      setCalendarDatum(d as any as CalendarTooltipProps);
                      setVisible(true);
                    }}
                    from={new Date(`${ year }-01-02`)}
                    to={new Date(`${ year }-12-31`)}
                    tooltip={CustomTooltip}
                  />
                </div>
                <div
                  className="flex flex-col items-center w-h-screen md:w-full"
                  ref={segments["Daily Hall of Framed"]}
                >
                  <h3 className="font-semibold text-3xl pl-20">
                    Hall of Framed Calendar in {year}
                  </h3>
                  <Calendar
                    data={calendarDataFormat(data.hof)}
                    onClick={(d) => {
                      setCalendarDatum(d as any as CalendarTooltipProps);
                      setVisible(true);
                    }}
                    from={new Date(`${ year }-01-02`)}
                    to={new Date(`${ year }-12-31`)}
                    tooltip={CustomTooltip}
                  />
                </div>
              </div>
            </Container>
          </div>
          <picture>
            <img
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="wrapped-images/Topography.svg"
              alt=""
            />
          </picture>
        </main>
      </LoadWrapper>
      {calendarDatum && Number(calendarDatum.value) > 0 ?
        <Modal
          open={visible}
          onClose={() => {
            setVisible(false);
            setCalendarDatum(undefined);
          }}
        >
          {calendarDatum && <ModalContent data={calendarDatum} />}
        </Modal>
        : null
      }
    </>
  );
}
