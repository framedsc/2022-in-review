import Head from "next/head";
import React from "react";
import CSS from 'csstype';

import { YearCover} from "@components/home";

const coverFrameStyle: CSS.Properties = {
  marginTop: '80px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-around'
}

const Home = () => {
  return (
    <>
      <Head>
        <title>A year of FRAMED</title>
      </Head>
      <div className='Covers wrapper' style={ coverFrameStyle }>
        { YearCover(2023) }
        { YearCover(2022) }
        { YearCover(2021) }
      </div>
    </>
  );
};

export default Home;
