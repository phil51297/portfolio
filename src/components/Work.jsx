import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: 2021,
    title: 'Halys Digital',
    duration: '1 an',
    details: (
      <p>
        - Développement d'applications informatiques <br></br> - Analyse des
        besoins des clients <br></br> - Planification de projets (méthodologie
        Scrum) <br></br>- Analyse des interfaces et propositions d'amélioration
        <br></br> Technologies utilisées: Html, Css, Javascript, Python, SQL,
        React
      </p>
    ),
  },
  {
    year: 2020,
    title: 'Sport PROTECT',
    duration: '4 semaines',
    details: (
      <p>
        - Amélioration visuelle de champs dans la base de données <br></br>-
        Ajout de fonctions <br></br>- Amélioration du back office <br></br>-
        Gestion des sauvegardes <br></br>- Administration base de données
        <br></br>
        Technologies utilisées: Html, Css, Javascript, Php, SQL
      </p>
    ),
  },
  {
    year: 2020,
    title: 'Opinaka',
    duration: '6 semaines',
    details: (
      <p>
        - Intégration et configuration des modèles de visualisation <br></br>-
        Conception de module d’extension Excel <br></br>Technologies utilisées:
        Html, Css, Javascript, Script Lab
      </p>
    ),
  },
];
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Expériences professionnelles
      </h1>
      <div className='flex flex-col md:flex-row justify-center my-10'>
        <div className='w-full md:w-7/12'>
          {data.map((item, idx) => (
            <WorkItem
              key={idx}
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
