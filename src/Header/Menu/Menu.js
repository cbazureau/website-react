import React from 'react';
import './Menu.css';

const Menu = ({ onSectionChange }) => (
  <ul className="Menu">
    <li key="link-home"><button className="Menu__link" onClick={onSectionChange("home")}>Accueil</button></li>
    <li key="link-xp"><button className="Menu__link" onClick={onSectionChange("xp")}>Expertise</button></li>
    <li key="link-jobs"><button className="Menu__link" onClick={onSectionChange("jobs")}>Carri&egrave;re</button></li>
    <li key="link-cv"><a className="Menu__link Menu__link--cv" href="/cv">Curriculum vitae</a></li>
  </ul>
);

export default Menu;
