import React, { useState } from 'react';
import {
  wrapper,
  siteImage,
  infoWrapper,
  title,
  moveText,
  icon,
  iconsWrapper,
  subTitle,
} from '../sass/components/_project.scss';
import classNames from 'classnames';
import youtubeIcon from '../images/youtube.svg';
import githubIcon from '../images/github.svg';
import VideoPortal from './videoPortal/videoPortal.js';

const Project = ({ project, delay }) => {
  const [showText, setShowText] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className="wrapper"
      //   style={{ transitionDelay: delay }}
      data-aos="fade-up"
      data-aos-delay="200ms"
      onMouseOver={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <img className="siteImage" src={project.img} alt="project-img" />
      <div className="infoWrapper">
        <div className={classNames(title, { [moveText]: showText })}>
          <p>{project.title}</p>
          <p className="subTitle">{project.subTitle}</p>
        </div>
        <div className={classNames(iconsWrapper, { [moveText]: showText })}>
          <img
            className="icon"
            src={youtubeIcon}
            alt="video"
            onClick={() => setShowVideo(true)}
          />
          <a href={project.link} target="_blank">
            <img className="icon" src={githubIcon} alt="github" />
          </a>
        </div>
      </div>
      {showVideo && (
        <VideoPortal video={project.video} setShowVideo={setShowVideo} />
      )}
    </div>
  );
};

export default Project;
