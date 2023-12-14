import Head from "next/head";
import React, { useRef, useEffect, useState, RefObject } from "react";
import { IShot } from "@types";
import { getDateLastYear } from "@util";
import { Container, LoadWrapper } from "@components/global";
import useSWR from "swr";
import {
  ErrorNoData,
  ErrorSection,
  LoadingSection,
} from "@components/experience-fragments";
import Link from "next/link";

import { getHofAuthors, getHofImages, getSysImages } from './api/request';
import { addProperties, normalizeData } from './utils/utils';

const Home = () => {
  const [data, setData] = useState({sys: new Array<IShot>(), hof: new Array<IShot>(), authors: new Array<object>()});
  const [initialized, setInitialized] = useState(false);
  const imgSrc = useRef<string>("");

  const getData = async () => {
    const imagesResponse = await getHofImages();
    const authorsResponse = await getHofAuthors();
    const sysResponse = await getSysImages();
    const normalizedSysImages = normalizeData(sysResponse.data);
    const systImagesList = Object.values(normalizedSysImages[0]) as IShot[];
    // drop the _default entry
    systImagesList.pop();
    const normalizedImages = normalizeData(imagesResponse.data._default);
    const normalizedAuthors = normalizeData(authorsResponse.data._default);
    const formattedImages = addProperties(normalizedImages, normalizedAuthors);

    //startofyear 2022 = 1640995200
    //startofyear 2023 = 1672534800
    //endofyear 2023 = 1704070800
    const yearImages = formattedImages.filter((item: { epochTime: number; }) => item.epochTime > 1640995200 && item.epochTime < 1672534800);

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

  if (!imgSrc.current && dataAvailable) {
    imgSrc.current = data.hof[Math.floor(Math.random() * data.hof.length - 1)].shotUrl ?? "";
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <LoadWrapper>
        <main>
          <div className="absolute z-20 w-full">
            <Container className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-0 min-h-screen md:h-auto">
              <div className="h-full md:h-screen flex flex-col justify-center pr-4 md:pr-10 md:text-right">
                <h1 className="font-bold text-6xl md:text-8x1 lg:text-8xl load transition-all -translate-y-10 opacity-0 duration-500">
                  FRAMED
                </h1>
                <h2 className="text-2xl font-bold load transition-all -translate-y-10 opacity-0 duration-500">
                  Year in Review 2022
                </h2>
                <Link
                  className="rounded-md bg-gray-100 text-gray-900 border hover:bg-framed-black hover:text-gray-100 w-fit md:ml-auto px-4 py-2 mt-4 font-bold load transition-all -translate-y-10 opacity-0 duration-500"
                  href="/data"
                >
                  View
                </Link>
              </div>
            </Container>
          </div>
          <div className="grid z-10 md:grid-rows-none md:grid-cols-2 gap-0 h-screen md:h-auto">
            <div className="h-full z-10 md:h-screen flex flex-col justify-center bg-black/30 backdrop-blur-3xl border-r border-r-white/10 shadow-2xl"></div>
          </div>
          <picture>
            <img
              loading="lazy"
              className="load top-0 absolute transition-all -translate-y-10 opacity-0 duration-500 h-full md:h-screen object-cover w-full"
              src={`${imgSrc.current?.replace(
                "https://cdn.discordapp.com",
                "https://media.discordapp.net",
              )}?width=2560&height=1440`}
              alt="Landscape picture"
            />
          </picture>
        </main>
      </LoadWrapper>
    </>
  );
};

export default Home;
