import Head from "next/head";
import React from "react";
import CSS from 'csstype';

import { YearCover} from "@components/home";

const coverFrameStyle: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginBottom: "30px",
}

const recapLogoStyle: CSS.Properties = {
  position: 'relative',
  marginTop: '100px',
  marginBottom: '40px',
  padding: '0px 20px',
  left: '50%',
  width: '500px',
  transform: 'translate(-50%, 0%)',
}

const Home = () => {
  return (
    <>
      <Head>
        <title>A year of FRAMED</title>
      </Head>

      <img src="recap-wsub-logo.svg" style={ recapLogoStyle }/>

      <div className='Covers wrapper' style={ coverFrameStyle }>
        { YearCover(2023) }
        { YearCover(2022) }
        { YearCover(2021) }
      </div>
    </>
  );
};

export default Home;
