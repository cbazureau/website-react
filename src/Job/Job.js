import React from 'react';
import './Job.css';

const Job = ({logo, company, description, url, children, dates}) => (
  <div className="Job">
    <div className="Job__main">
      <div className="Job__logo">
        <img src={logo} alt={company} className="Job__logoImg" />
      </div>
      <div className="Job__description">
        <span className="Job__company">{company}</span>
        <span className="Job__dates">{dates}</span>
        <span className="Job__desc">{description}</span>
      </div>
    </div>
    {children &&
      (<div className="Job__details">
        <span className="Job__detailsTitle">Environnements techniques</span>
        <span className="Job__detailsDesc">{children}</span>
        <span className="Job__detailsMore">En savoir plus sur <a href={url}>{company}</a></span>
      </div>)
    }
  </div>
);

export default Job;
