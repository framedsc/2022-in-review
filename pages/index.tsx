import Head from "next/head";
import React, { useState, useEffect } from "react";
import CSS from 'csstype';
import { basePath } from '../next.config';

import { YearCover} from "@components/home";

const coverFrameStyle: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-around',
  //transform: 'translate(0%, -50%%)',
  //top: '50%',
  marginBottom: "3vh",
}


const Home = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    checkOrientation(); // Set initial orientation on mount
    window.addEventListener("resize", checkOrientation);

    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  const leftIntroStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    //position: 'relative',
    paddingLeft: '20px',
    //left: '50%',
    width: '80vh',
    //transform: 'translate(-50%, 0%)',
    //overflow: 'auto',
    alignItems: 'center',
    margin: isPortrait ? '0vh 0 4vh' : '10vh 0 4vh',
    paddingRight: isPortrait ? '20px' : '60px'
  }

  const recapLogoStyle: CSS.Properties = {
    display: 'flex',
    //position: 'relative',
    margin: isPortrait ? '0vh 0 3vh' : '6vh 0 6vh',
    //padding: isWindowARVertical() ? '0px 100px' : '0px 20px',
    //left: '50%',
    //transform: 'translate(-50%, 0%)',
    //overflow: 'auto',
    alignItems: 'center',
  }

  const introTextStyle: CSS.Properties = {
    //left: '50%',
    paddingBottom: isPortrait ? '0px' : '125px',
    textAlign: 'justify',
  }

  const firstCoverFrameStyle: CSS.Properties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    //transform: 'translate(0%, -50%%)',
    //top: '50%',
    paddingTop: "10vh",
  }

  return (
    <>
      <Head>
        <title>A year of FRAMED</title>
      </Head>

      <div className='Intro Section wrapper' style={ firstCoverFrameStyle }>
        <div className='test' style={ leftIntroStyle }>
          <img src={`${basePath}/recap-wsub-logo.svg`} style={ recapLogoStyle }/>
          <div className="h-auto flex flex-col justify-end" style={ introTextStyle }>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet imperdiet tellus quis lobortis.
              Praesent vel pulvinar sem. Vestibulum non aliquet sem. Nulla non dui at felis vestibulum dictum ut nec magna.
              Praesent ullamcorper gravida pretium. Suspendisse felis arcu, egestas non metus at, rhoncus sollicitudin orci.
              Proin id consectetur quam, sed dictum eros. Integer ipsum enim, dictum ut arcu eu, laoreet dapibus nunc.
              Quisque auctor ipsum orci, a malesuada nisl maximus in. Etiam arcu nisl, interdum nec justo sit amet, elementum feugiat urna.
              Fusce neque nulla, molestie at dui ut, ornare laoreet ante. Ut vitae justo sit amet velit ultricies elementum.
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc congue lectus maximus dictum pellentesque.
              Fusce at sapien auctor, molestie erat non, pulvinar mauris.
            </p>
          </div>
        </div>
        { YearCover(2024, true) }
      </div>
      <div className='Covers wrapper' style={ coverFrameStyle }>
        { YearCover(2023) }
        { YearCover(2022) }
        { YearCover(2021) }
      </div>
    </>
  );
};

export default Home;
