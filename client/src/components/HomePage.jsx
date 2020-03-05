import React, { Component, useState, useEffect } from 'react';
import Typist from 'react-typist';
import '../App.css';
import Configs from '../configurations.json';
import ProjectList from './ProjectList.jsx';

const HomePage = () => {
  const darkBackgroundModes = [
    'day',
    'terminal',
    'torquoise',
    'alizarin',
    'amythyst',
    'carrot',
    'peterriver'
  ];

  const lightBackgroundModes = [
    'night',
    'lightred',
    'lightpurple',
    'lightgreen',
    'lightblue',
    'lightyellow'
  ];

  const [darkBackground, setDarkBackground] = useState(darkBackgroundModes);
  const [lightBackground, setLightBackground] = useState(lightBackgroundModes);
  const [backgroundType, setBackgroundType] = useState(Configs.backgroundType);
  const [appClass, setAppClass] = useState(Configs.plainBackgroundMode);
  const [devIntro, setDevIntro] = useState(Configs.devIntro);
  const [devDesc, setDevDesc] = useState(Configs.devDesc);
  const [backgroundMode, setBackgroundMode] = useState('default');
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [bgStyle, setBgStyle] = useState({});
  const [icons, setIcons] = useState(Configs.icons);

  const checkIfNightModeEnabled = () => {
    return backgroundType === 'plain' && appClass === 'nightlight';
  };

  const checkIfDayModeEnabled = () => {
    return backgroundType === 'plain' && appClass === 'daylight';
  };

  const checkIfGradientTypeEnabled = () => {
    if (backgroundType === 'gradient') {
      return true;
    } else {
      return false;
    }
    // return backgroundType === 'gradient';
  };

  const checkIfPlainTypeEnabled = () => {
    if (backgroundType === 'plain') {
      return true;
    } else {
      return false;
    }
    // return backgroundType === 'plain';
  };

  const checkIfImageTypeEnabled = () => {
    if (backgroundType === 'image') {
      return true;
    } else {
      return false;
    }
    // return backgroundType === 'image';
  };

  const prepareGradientStyleSheets = () => {
    if (Configs.gradientColors) {
      return {
        background: 'linear-gradient(-45deg, ' + Configs.gradientColors + ')',
        backgroundSize: '400% 400%'
      };
    } else {
      return {
        background:
          'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)',
        backgroundSize: '400% 400%'
      };
    }
  };

  const prepareBackgroundImageStyle = () => {
    if (Configs.backgroundImageUrl) {
      return {
        background:
          'url("' +
          Configs.backgroundImageUrl +
          '") no-repeat center center fixed',
        backgroundSize: 'cover'
      };
    } else {
      return {
        background:
          'url("/images/sample-background.jpg") no-repeat center center fixed',
        backgroundSize: 'cover'
      };
    }
  };

  const getDefaultModeBasedOnBackgroundType = () => {
    if (checkIfNightModeEnabled()) {
      return lightBackgroundModes[0];
    } else if (checkIfDayModeEnabled()) {
      return darkBackgroundModes[0];
    }
  };

  const changeThemeMode = () => {
    if (checkIfNightModeEnabled()) {
      setAppClass('daylight'),
        setBackgroundIndex(0),
        setBackgroundMode(darkBackgroundModes[0]);
    } else if (checkIfDayModeEnabled()) {
      setAppClass('nightlight'),
        setBackgroundIndex(0),
        setBackgroundMode(lightBackgroundModes[0]);
    }
  };

  const changeBackgroundBasedonMode = () => {
    if (
      checkIfNightModeEnabled() &&
      backgroundIndex < lightBackgroundModes.length - 1
    ) {
      setBackgroundIndex(backgroundIndex + 1);
      setBackgroundMode(lightBackgroundModes[backgroundIndex + 1]);
    } else if (
      checkIfDayModeEnabled() &&
      backgroundIndex < darkBackgroundModes.length - 1
    ) {
      setBackgroundIndex(backgroundIndex + 1),
        setBackgroundMode(darkBackgroundModes[backgroundIndex + 1]);
    } else {
      setBackgroundIndex(0),
        setBackgroundMode(getDefaultModeBasedOnBackgroundType());
    }
  };

  useEffect(() => {
    if (checkIfPlainTypeEnabled()) {
      return;
    } else if (checkIfGradientTypeEnabled()) {
      setAppClass('gradient'), setBgStyle(prepareGradientStyleSheets());
    } else if (checkIfImageTypeEnabled()) {
      setAppClass('full-bg-image'), setBgStyle(prepareBackgroundImageStyle());
    }
  });

  return (
    <div className={appClass} style={bgStyle}>
      {/* // <div className="daylight" style={bgStyle}> */}
      <div className="change-mode" onClick={changeThemeMode} />
      <div className={backgroundMode} onClick={changeBackgroundBasedonMode}>
        <main className="App-main">
          <h1 className="intro">{devIntro}</h1>
          <div className="tagline">
            <Typist>{devDesc}</Typist>
          </div>
          <div className="icons-social">
            {icons.map((icon, index) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`${icon.url}`}
                key={index}
              >
                <i className={`fab ${icon.image}`} />
              </a>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
