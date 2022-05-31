import React from 'react';
import './Menu.css';

const Menu = ({ onSectionChange = () => undefined }) => (
  <ul className="Menu">
    <li key="link-home">
      <button className="Menu__link" onClick={onSectionChange('current')}>
        Current Job
      </button>
    </li>
    <li key="link-xp">
      <button className="Menu__link" onClick={onSectionChange('xp')}>
        Expertise
      </button>
    </li>
    <li key="link-jobs">
      <button className="Menu__link" onClick={onSectionChange('jobs')}>
        Career
      </button>
    </li>
  </ul>
);

export default Menu;
