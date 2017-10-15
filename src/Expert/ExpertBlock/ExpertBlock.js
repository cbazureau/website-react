import React from 'react';
import './ExpertBlock.css';

const ExpertBlock = ({ title, desc }) => (
  <div className="ExpertBlock">
    <span className="ExpertBlock__icon" />
    <h3 className="ExpertBlock__title">{title}</h3>
    <p className="ExpertBlock__desc">{desc}</p>
  </div>
);

export default ExpertBlock;
