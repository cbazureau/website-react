import React from 'react';
import Image from '../Image/Image';
import sites from '../renault.json';
import './Renault.css';

const Renault = () => (
  <React.Fragment>
    <div className="Renault__title">Sites actuellement en prod sur cette stack technique</div>
    <div className="Renault__sites">
      {sites.map(d => (
        <div className="Renault__site">
          <Image
            className="Renault__background"
            src={`/static/img/renault-${d.domain}.jpg`}
            alt={`image ${d.domain}`}
            isLazyLoaded={false}
          />
          <div className="Renault__domain">{d.domain}</div>
        </div>
      ))}
    </div>
  </React.Fragment>
);

export default Renault;
