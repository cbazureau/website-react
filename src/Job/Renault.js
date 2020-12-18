import React, { useState } from 'react';
import Image from '../Image/Image';
import sites from '../renault.json';
import './Renault.css';

const Renault = () => {
  const [isOpen, setOpen] = useState(false);
  const displayedSites = isOpen ? [...sites] : sites.slice(0, 7);
  return (
    <React.Fragment>
      <div className="Renault__title">
        {sites.length} sites actuellement en prod sur cette stack technique
      </div>
      <div className="Renault__sites">
        {displayedSites.map(({ url, domain, product }) => (
          <a href={url} key={domain} className="Renault__site">
            <Image
              className="Renault__background"
              src={`/static/img/renault-${domain}.jpg`}
              alt={`image ${domain}`}
              isLazyLoaded={true}
            />
            <span className="Renault__domain">{domain}</span>
          </a>
        ))}
        {!isOpen && (
          <button className="Renault__site Renault__siteMore" onClick={() => setOpen(true)}>
            <span>+</span>
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Renault;
