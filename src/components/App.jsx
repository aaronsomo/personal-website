import React, { Component } from 'react';
import Typist from 'react-typist';
// import '../App.css';
import Configs from '../configurations.json';
import HomePage from './HomePage.jsx';
import '../sass/main.scss';

const App = props => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
