import React, { useRef, useEffect, useState, RefObject } from "react";
import CSS from 'csstype';
import { IShot } from "@types";
import { covers2021, covers2022, covers2023 } from "./covers-lists";

const getCovers = (year: number) => {
  switch(year) { 
    case 2021: { 
      return covers2021;
   } 
    case 2022: { 
       return covers2022;
    } 
    case 2023: { 
      return covers2023;
   } 
    default: { 
      return [];
    } 
 } 
}

const coverContainerStyle: CSS.Properties = {
  position: 'relative',
  //width: '100%',
  //max-width: '600px', /* Set your desired max-width */
  margin: '15px',
  width: '480px',//'600px',
  height: '640px',//'800px',
  overflow: 'hidden',
  textAlign: 'center',
  //transform: 'translate(-50%, -50%)',
  //left: '50%',
  filter: 'drop-shadow(0 5px 0.75rem rgba(0, 0, 0, 0.5))',
};

const coverImageStyle: CSS.Properties = {
  minHeight: '100%',
  display: 'block',
  objectFit: 'cover',
}

const coverFrameStyle: CSS.Properties = {
  position: 'absolute',
  top: '20px', /* Adjust top position */
  left: '20px', /* Adjust left position */
  right: '20px', /* Adjust right position */
  bottom: '20px', /* Adjust bottom position */
  backdropFilter: 'blur(20px) brightness(115%) saturate(120%)',
  maskComposite: 'exclude',
  WebkitMaskComposite: 'exclude',
  mask:
    'linear-gradient(transparent 0%, white 0%, white calc(0% + 15px), transparent calc(0% + 15px), transparent calc(100% - 15px), white calc(100% - 15px), white 100%, transparent 100%), linear-gradient(0.25turn, transparent 0%, white 0%, white calc(0% + 15px), transparent calc(0% + 15px), transparent calc(100% - 15px), white calc(100% - 15px), white 100%, transparent 100%)',
  WebkitMask:
    'linear-gradient(transparent 0%, white 0%, white calc(0% + 15px), transparent calc(0% + 15px), transparent calc(100% - 15px), white calc(100% - 15px), white 100%, transparent 100%), linear-gradient(0.25turn, transparent 0%, white 0%, white calc(0% + 15px), transparent calc(0% + 15px), transparent calc(100% - 15px), white calc(100% - 15px), white 100%, transparent 100%)',
}

const framedTextStyle: CSS.Properties = {
  position: 'absolute',
  top: '11%',
  left: '50%',
  fontWeight: 'bold',
  fontSize: `19.5cqw`,
  textAlign: 'center',
  transform: 'translate(-50%, -50%)',
  opacity: '90%',
  //mix-blend-mode: 'screen',
  //color: '#dbdfd8',
  fontFamily: "Galano Grotesque Alt",
  letterSpacing: "-0.05em",
  filter: "drop-shadow(0px 5px 5px #00000035)",
}

const yearTextStyle: CSS.Properties = {
  position: 'absolute',
  top: '85%',
  left:' 50%',
  fontWeight: 'lighter',
  fontSize: '14cqw',
  textAlign: 'center',
  transform: 'translate(-50%, -50%)',
  opacity: '80%',
  mixBlendMode: 'screen',
  fontFamily: "'Galano Grotesque Alt (Numbers)', 'AtkinsonHyperlegible', 'HelveticaNeue', 'Helvetica', 'Arial', 'sans-serif'",
  //color: '#dbdfd8',
}

const creditsTextStyle: CSS.Properties = {
  position: 'absolute',
  bottom: '0.5%',
  left: '50%',
  //fontWeight: 'bold',
  fontStyle: 'italic',
  fontSize: '10px',
  textAlign: 'center',
  transform: 'translate(-50%, 0%)',
  opacity: '25%',
  //mix-blend-mode: 'screen',
  //color: '#dbdfd8',
}



export const YearCover = (year: number) => {
  const covers = getCovers(year);
  const [selectedCover, setSelectedCover] = useState<any>(false);

  useEffect(() => {
    setSelectedCover(covers[Math.floor(Math.random() * Math.floor(covers.length))]); 
  }, [selectedCover]);

  //var selectedCover = covers[];
  //var selectedCover = {shotUrl: "https://cdn.framedsc.com/images/1650423560_eldenring_2022-03-17_13-54-54.png", author: "test" };
  //var selectedCover = {shotUrl: "https://cdn.framedsc.com/images/1659302449_Stray-Win64-Shipping.exe_2022-07-24_13-42-01_86x.png", author: "test" };

  return (
    <a className="year-cover-container" href={year.toString()} style={coverContainerStyle}>
      <div className="year-cover-frame" style={coverFrameStyle}></div>
        <img src={ selectedCover.shotUrl } style={coverImageStyle}/>
      <div className="cover-framed-text" style={framedTextStyle}>
        FRAMED
      </div>
      <div className="cover-year-text" style={yearTextStyle}>
        { year }
      </div>
      <div className="cover-credits-text" style={creditsTextStyle}>
      </div>
    </a>
  );
};

/*
//const [image1, setImage1] = useRef({ shotUrl: "", author: 0});
//const [image2, setImage2] = useState< any | null>(null);
var image1 = { shotUrl: "", author: ""};
var image2 = { shotUrl: "", author: ""};
var imageToDisplay = 1;
//const renderInitialized = useRef(false)

export const YearCover = (year: number) => {
  //const [switchShotInterval, setSwitchShotInterval] = useState(null);

  function switchImage(year: number) {
    const covers = getCovers(year);

    if(imageToDisplay === 1){
      imageToDisplay = 2
      image1 = (covers[Math.floor(Math.random() * Math.floor(covers.length))]);
    }
    else if (imageToDisplay === 2){
      imageToDisplay = 1
      image2 = (covers[Math.floor(Math.random() * Math.floor(covers.length))]);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      switchImage(year);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function imageElement(imageURL: string, shouldDisplay: boolean){
    return(
    <div className="shot-wrapper" style={{opacity: shouldDisplay ? 1 : 0, transition: 'opacity 0.5s'}}>
      <img src={ imageURL } style={coverImageStyle}/>
    </div>
    )
  }
  
  const returnObject = {
    html: <div className="year-cover-container" style={coverContainerStyle}>
    <div className="year-cover-frame" style={coverFrameStyle}></div>
    { imageElement(image1.shotUrl, imageToDisplay === 1) }
    { imageElement(image2.shotUrl, imageToDisplay === 2) }
    <div className="cover-framed-text" style={framedTextStyle}>
      FRAMED
    </div>
    <div className="cover-year-text" style={yearTextStyle}>
      { year }
    </div>
  </div>
  }

  return returnObject;
};
*/
