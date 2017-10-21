import React from 'react';
import './Menu.css';

const Menu = ({ onSectionChange }) => (
  <ul className="Menu">
    <li key="link-home"><button className="Menu__link" onClick={onSectionChange("current")}>Poste Actuel</button></li>
    <li key="link-xp"><button className="Menu__link" onClick={onSectionChange("xp")}>Expertise</button></li>
    <li key="link-jobs"><button className="Menu__link" onClick={onSectionChange("jobs")}>Carri&egrave;re</button></li>
  </ul>
);

export default Menu;
