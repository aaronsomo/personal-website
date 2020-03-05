import React, { Component } from 'react';
import Typist from 'react-typist';
import '../App.css';
import Configs from '../configurations.json';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

const ProjectEntry = props => {
  return <div>{props.title}</div>;
};

export default ProjectEntry;
