import React from 'react';
import ProjectItem from './ProjectItem';
import websiteImg from '../assets/website.png';
import gameImg from '../assets/game.jpg';
import nutriscoreImg from '../assets/nutriscore.png';
import eventImg from '../assets/event.png';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projets</h1>
      <p className='text-center py-8'></p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem
          img={websiteImg}
          title='Site Web'
          textarea='Html, Css, Javascript, Php, Sql'
        />
        <ProjectItem img={gameImg} title='Jeu Snake' textarea='C/C#' />
        <ProjectItem
          img={nutriscoreImg}
          title='Application Nutriscore'
          textarea='React, Javascript, Python, Sql'
        />
        <ProjectItem img={eventImg} title='Application Event' textarea='Java' />
      </div>
    </div>
  );
};

export default Projects;
