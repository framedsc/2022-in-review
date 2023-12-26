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
  width: '480px',
  //height: '640px',
  aspectRatio: 3 / 4,
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
  aspectRatio: 'inherit',
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
    'linear-gradient(transparent 0%, white 0%, white 2.33%, 2.33%, transparent 97.66%, white 97.66%, white 100%, transparent 100%), linear-gradient(0.25turn, transparent 0%, white 0%, white 3.12%, transparent 3.12%, transparent 96.88%, 96.88%, white 100%, transparent 100%)',
  WebkitMask:
    'linear-gradient(transparent 0%, white 0%, white 2.33%, 2.33%, transparent 97.66%, white 97.66%, white 100%, transparent 100%), linear-gradient(0.25turn, transparent 0%, white 0%, white 3.12%, transparent 3.12%, transparent 96.88%, 96.88%, white 100%, transparent 100%)',
}

const framedTextStyle: CSS.Properties = {
  position: 'absolute',
  top: '13%',
  left: '50%',
  fontWeight: 'bold',
  fontSize: `19.5cqi`,
  textAlign: 'center',
  transform: 'translate(-50%, -50%)',
  opacity: '90%',
  //mix-blend-mode: 'screen',
  //color: '#dbdfd8',
  fontFamily: "Galano Grotesque Alt !important",
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
  filter: "drop-shadow(0px 5px 5px #00000035)",
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

export function YearCover(year: number) {
  const covers = getCovers(year);
  const [image1, setImage1] = useState<any | null>(null);
  const [image2, setImage2] = useState<any | null>(null);
  const [switchCoverInterval, setSwitchCoverInterval] = useState<any | null>(null);
  const imageToDisplay = useRef(1);
  const renderInitialized = useRef(false);

  function switchImage(year: number) {
    if (imageToDisplay.current === 1) {
      setImage2(covers.filter(cover => cover !== image1)[Math.floor(Math.random() * Math.floor(covers.length))]);
      imageToDisplay.current = 2;
    } else if (imageToDisplay.current === 2) {
      setImage1(covers.filter(cover => cover !== image2)[Math.floor(Math.random() * Math.floor(covers.length))]);
      imageToDisplay.current = 1;
    }
  }

  useEffect(() => {
    if(!renderInitialized.current){
      setImage1(covers[Math.floor(Math.random() * Math.floor(covers.length))]);
      setImage2(covers.filter(cover => cover !== image1)[Math.floor(Math.random() * Math.floor(covers.length))]);
    }

    const changeCoversEveryMs: number = 5000;
    window.setTimeout(() => { switchImage(year); startSwitchCoverInterval(3 * changeCoversEveryMs); }, (year - 2020) * changeCoversEveryMs);// offset the timer on different covers.

    function startSwitchCoverInterval(timeInterval: number){
      setSwitchCoverInterval(setInterval(() => {
        switchImage(year);
        clearInterval(switchCoverInterval)
      }, timeInterval));
    }

    renderInitialized.current = true;

    return () => clearInterval(switchCoverInterval);
  }, [year]);

  if ((imageToDisplay.current === 1 && image1 === null) || (imageToDisplay.current === 2 && image2 === null)) {
    return null;
  }

  function imageElement(imageURL: string, shouldDisplay: boolean) {
    return (
      <div className="shot-wrapper" style={{ ...coverImageStyle, position: 'absolute', opacity: shouldDisplay ? 1 : 0, transition: 'opacity 0.5s' }}>
        <img src={imageURL} style={coverImageStyle} />
      </div>
    );
  }

  return (
      <a className="year-cover-container" href={year.toString()} style={coverContainerStyle}>
        {imageElement(image1.shotUrl, imageToDisplay.current === 1)}
        {imageElement(image2.shotUrl, imageToDisplay.current === 2)}
        <div className="year-cover-frame" style={coverFrameStyle}></div>
        <h1 className="cover-framed-text" style={framedTextStyle}>
          FRAMED
        </h1>
        <h2 className="cover-year-text" style={yearTextStyle}>
          {year}
        </h2>
      </a>
    );
}
