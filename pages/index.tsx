import Head from "next/head";
import React from "react";
import CSS from 'csstype';
import { basePath } from '../next.config';

import { YearCover} from "@components/home";

const coverFrameStyle: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-around',
  transform: 'translate(0%, -50%%)',
  top: '50%',
  marginBottom: "3vh",
}

const recapLogoStyle: CSS.Properties = {
  position: 'relative',
  marginTop: '10vh',
  marginBottom: '2vh',
  padding: '0px 20px',
  left: '50%',
  width: '45vh',
  transform: 'translate(-50%, 0%)',
  overflow: 'auto',
}

const Home = () => {
  return (
    <>
      <Head>
        <title>A year of FRAMED</title>
      </Head>

      <img src={`${basePath}/recap-wsub-logo.svg`} style={ recapLogoStyle }/>

      <div className='Covers wrapper' style={ coverFrameStyle }>
        { YearCover(2023) }
        { YearCover(2022) }
        { YearCover(2021) }
      </div>
    </>
  );
};

export default Home;
