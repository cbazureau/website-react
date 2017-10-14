import React from 'react';
import './FooterLink.css';

const FooterLink = ({ onSectionChange, href, title, className, svg }) => {
  const classNames = className ? `FooterLink__link FooterLink__link--${className}` : 'FooterLink__link';
  return (
    <li className="FooterLink">
      <a
        href={href}
        title={title}
        className={classNames}
      >
        {svg}
      </a>
    </li>
  );
};

export default FooterLink;
