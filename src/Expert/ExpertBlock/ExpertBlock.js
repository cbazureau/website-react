import React from 'react';
import './ExpertBlock.css';

const ExpertBlock = ({ title, desc, svg, link }) => (
  <div className="ExpertBlock">
    <span className="ExpertBlock__icon">{svg}</span>
    <h3 className="ExpertBlock__title">{title}</h3>
    <p className="ExpertBlock__desc">{desc}</p>
    {link && <a className="ExpertBlock__link" href={link}>{link}</a> }
  </div>
);

export default ExpertBlock;
