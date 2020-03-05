import React, { Component, useState } from 'react';
import Typist from 'react-typist';
import '../App.css';
import Configs from '../configurations.json';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   Redirect
// } from 'react-router-dom';
import ProjectEntry from './ProjectEntry.jsx';
import Projects from '../projects.json';

const ProjectList = props => {
  const { projects } = props;
  const [modalVisible, toggleModal] = useState(false);
  const [project, setActiveProject] = useState('');

  return (
    <div>
      {Projects.projectList.map(project => {
        // console.log(props)
        <ProjectEntry path={project.url} title={project.image} />;
      })}
    </div>
  );
};

export default ProjectList;
