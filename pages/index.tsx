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

import { YearCover} from "@components/home";

import { getHofAuthors, getHofImages, getSysImages } from './api/request';
import { addProperties, normalizeData } from '../util/utils';

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
    { YearCover(2022) }
    </>
  );
};

export default Home;
