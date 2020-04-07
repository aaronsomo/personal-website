import React, { Component } from 'react';
import Typist from 'react-typist';
// import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Configs from '../configurations.json';
import HomePage from './HomePage.jsx';
import '../sass/main.scss';

const App = (props) => {
  AOS.init({
    delay: 200,
  });

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
