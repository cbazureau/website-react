import React from 'react';
import Menu from './Menu/Menu';
import './Header.css';

const Header = ({ onSectionChange }) => (
<header className="Header">
  <Menu onSectionChange={onSectionChange} />
  <div className="Header__banner">
    <h1 className="Header__name">C&eacute;dric Bazureau</h1>
    <h2 className="Header__job">Lead Tech ReactJs à Renault</h2>
  </div>
</header>
);

export default Header;
