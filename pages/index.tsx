import Head from "next/head";
import React from "react";

import { YearCover} from "@components/home";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='Covers wrapper' style={{  marginTop: '80px', display: 'flex',  flexDirection: 'row', alignItems: 'center',  justifyContent: 'space-around'}}>
        { YearCover(2023) }
        { YearCover(2022) }
        { YearCover(2021) }
      </div>
    </>
  );
};

export default Home;
