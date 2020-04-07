import React from 'react';
// import meirl from '../../public/meirl2.jpg';
import technologies from '../utils/technologies.json';

const About = () => (
  <div id="about" className="about-container">
    <div className="bio">
      {/* <div className="picture-container">
        <img className="picture" src={meirl} alt="img"></img>
      </div> */}
      <div className="about-text">
        <div className="header">About Me</div>
        <div className="text">
          Welcome! I'm Aaron and I have a knack for building creative and
          meaningful things, be it a bridge in Chicago or a web application on
          the Internet. As a former Civil Engineer, I’ve worked with different
          teams to utilize my creative nature in designing and managing many
          projects, but they haven’t quite filled that void - that curiosity in
          seeing an idea, solving issues, and having that idea realized.
          <br></br>
          <br></br> I enjoy solving problems that challenge my understanding, as
          well as engaging myself in finding better solutions. With my
          proficiency in front-end technologies using JavaScript, React, and
          React-Native; experience in scaling back-end systems through
          frameworks and libraries like Express and Node.js; as well as my
          comfortability with both SQL and NoSQL databases, I believe I’m
          equipped to be a strong asset in any engineering environment. I’d love
          the opportunity to learn more about your challenges and have a
          discussion about what I can do to help solve them.
        </div>
        <div className="paragraph">Some technologies that I frequent...</div>
        <div className="technologies-container">
          <div className="technologies">
            <div className="technologies-header">Languages</div>
            <div>
              {technologies.languages.map((technology, index) => (
                <div className="text" key={index}>
                  {technology}
                </div>
              ))}
            </div>
          </div>
          <div className="technologies">
            <div className="technologies-header">Frameworks & Libraries</div>
            <div>
              {technologies.frameworksLibraries.map((technology, index) => (
                <div className="text" key={index}>
                  {technology}
                </div>
              ))}
            </div>
          </div>
          <div className="technologies">
            <div className="technologies-header">Databases</div>
            <div>
              {technologies.databases.map((technology, index) => (
                <div className="text" key={index}>
                  {technology}
                </div>
              ))}
            </div>
          </div>
          <div className="technologies">
            <div className="technologies-header">Developer Tools</div>
            <div>
              {technologies.developerTools.map((technology, index) => (
                <div className="text" key={index}>
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
