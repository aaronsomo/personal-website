import React, { useState, useEffect } from 'react';
import {
  title,
  portfolioSection,
  projectsWrapper,
  content,
  mobileInfo,
} from '../sass/components/_applications.scss';
import { data } from '../utils/projects.js';
import Project from './Project.jsx';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

const Applications = () => {
  const [projects] = useState(data);
  const [showProjects, setShowProjects] = useState(false);
  const [ref, inView] = useInView({});

  useEffect(() => {
    if (inView) {
      setShowProjects(true);
    }
  }, [inView]);

  return (
    <div
      id="portfolio-section"
      // className={classNames(portfolioSection, {
      //   visible: showProjects,
      // })}
      className="portfolioSection"
    >
      <div className="content">
        <div className="title" data-aos="fade-down">
          <h2>Applications</h2>
        </div>
        <p className="mobileInfo">(tap photo for project details)</p>
        <div ref={ref} className="projectsWrapper">
          <Projects projects={projects} />
        </div>
      </div>
    </div>
  );
};

const Projects = React.memo(({ projects }) => {
  return projects.map((project, idx) => (
    <Project key={idx} project={project} delay={100 * idx + 'ms'} />
  ));
});

export default Applications;

// const Applications = () => (
//   <div className="applications-container">
//     <div className="applications-header" data-aos="fade-right">
//       Applications
//     </div>
//     <div className="projects-container">
//       <div className="card" data-aos="fade-right">
//         Card Should Go Here
//       </div>
//       <div className="card" data-aos="fade-left">
//         Another Card
//       </div>
//       <div className="card" data-aos="fade-right">
//         Third Card
//       </div>
//       <div className="card" data-aos="fade-left">
//         Last Card
//       </div>
//     </div>
//   </div>
// );
