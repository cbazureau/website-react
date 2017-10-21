import React from 'react';
import './Expert.css';
import ExportBlock from './ExpertBlock/ExpertBlock';


const renderSVGLeBeauJeu = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    viewBox="0 0 400 400">
  <g>
    <path className="st4" d="M223,258c6.4,2.7,13.3,4,20.5,4c7.5,0,14.3-1.3,20.4-4c6.2-2.7,11.7-6.4,16.3-11c4.6-4.6,8.2-10.1,10.8-16.3
      c2.6-6.3,3.9-13.2,3.9-20.4c0-7.3-1.3-14.3-3.9-20.7c-2.6-6.4-6.2-11.9-10.7-16.5c-4.6-4.6-10.1-8.3-16.3-11c-6.1-2.6-13-4-20.4-4
      c-7.2,0-14.2,1.4-20.5,4c-6.4,2.7-12,6.4-16.6,11c-4.6,4.6-8.3,10.2-11,16.6c-2.1,5-3.4,10.4-3.8,16v9.2c0.4,5.6,1.7,10.9,3.8,15.7
      c2.7,6.3,6.4,11.8,11,16.4C211,251.6,216.6,255.3,223,258z"/>
    <path className="st5" d="M153.2,349.5c3.3-8.2,5-18,5-29.2V4.9C67.5,23.9-0.5,104.3-0.5,200.6c0,84.7,52.7,157.1,127.1,186.3
      C134.4,377.7,150.5,356.2,153.2,349.5z"/>
    <path className="st5" d="M199.5,0.6c-2.7,0-5.5,0.1-8.2,0.2v144.6c2.7-2.4,5.5-4.6,8.5-6.6c6.2-4.1,13.1-7.3,20.6-9.7
      c7.6-2.4,15.7-3.6,24.1-3.6c11.6,0,22.7,2.2,33,6.5c10.2,4.3,19.1,10.3,26.7,17.9c7.5,7.5,13.6,16.6,17.9,26.9
      c4.3,10.3,6.5,21.6,6.5,33.5c0,11.7-2.2,22.8-6.5,33.1c-4.3,10.3-10.3,19.3-17.9,26.9c-7.6,7.5-16.6,13.6-26.9,17.9
      c-10.3,4.3-21.6,6.5-33.5,6.5c-16.5,0-31.4-4.4-44.4-12.9c-2.8-1.9-5.5-3.9-7.9-5.9v43.8c0,16-2.4,30.4-7.2,42.8
      c-3.8,9.8-13.9,24.7-22.1,34.8c12.1,2.3,24.5,3.5,37.2,3.5c110.5,0,200-89.5,200-200S310,0.6,199.5,0.6z"/>
  </g>
  </svg>
);


const renderSVGParams = () => (
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 52 52">
  <path className="st4" d="M50.219,21h-2.797c-0.552-2.375-1.486-4.602-2.739-6.613l1.978-1.978
    c0.695-0.695,0.695-1.823,0-2.518l-4.553-4.553c-0.695-0.695-1.823-0.695-2.518,0l-1.978,1.978C35.602,6.064,33.375,5.13,31,4.578
    V1.781C31,0.797,30.203,0,29.219,0h-6.439C21.797,0,21,0.797,21,1.781v2.797c-2.375,0.552-4.602,1.486-6.613,2.739L12.41,5.339
    c-0.695-0.695-1.823-0.695-2.518,0L5.339,9.892c-0.695,0.695-0.695,1.823,0,2.518l1.978,1.978C6.064,16.398,5.13,18.625,4.578,21
    H1.781C0.797,21,0,21.797,0,22.781v6.439C0,30.203,0.797,31,1.781,31h2.797c0.552,2.375,1.486,4.602,2.739,6.613L5.339,39.59
    c-0.695,0.696-0.695,1.823,0,2.518l4.553,4.553c0.695,0.695,1.823,0.695,2.518,0l1.978-1.978c2.011,1.252,4.238,2.187,6.613,2.739
    v2.797C21,51.203,21.797,52,22.781,52h6.439C30.203,52,31,51.203,31,50.219v-2.797c2.375-0.552,4.602-1.486,6.613-2.739l1.978,1.978
    c0.695,0.695,1.823,0.695,2.518,0l4.553-4.553c0.695-0.695,0.695-1.823,0-2.518l-1.978-1.978c1.252-2.01,2.186-4.238,2.739-6.613
    h2.797C51.203,31,52,30.203,52,29.219v-6.439C52,21.797,51.203,21,50.219,21z M26,35c-4.971,0-9-4.03-9-9c0-4.971,4.029-9,9-9
    s9,4.029,9,9C35,30.97,30.971,35,26,35z"/>
  <path className="st5" d="M26,13c-7.18,0-13,5.82-13,13s5.82,13,13,13s13-5.82,13-13S33.18,13,26,13z M26,35
    c-4.971,0-9-4.03-9-9c0-4.971,4.029-9,9-9s9,4.029,9,9C35,30.97,30.971,35,26,35z"/>
</svg>
);


const renderSVGTeam = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 58 58">
     <path className="st4" d="M53.566,45.283l-9.552-4.776C42.78,39.89,42,38.628,42,37.248V33.5
     c0.268-0.305,0.576-0.698,0.904-1.162c1.302-1.838,2.286-3.861,2.969-5.984C47.098,25.977,48,24.845,48,23.5v-4
     c0-0.88-0.391-1.667-1-2.217V11.5c0,0,1.187-9-11-9c-12.188,0-11,9-11,9v5.783c-0.609,0.55-1,1.337-1,2.217v4
     c0,1.054,0.554,1.981,1.383,2.517C26.382,30.369,29,33.5,29,33.5v3.655c0,1.333-0.728,2.56-1.899,3.198L18.18,45.22
     C15.603,46.625,14,49.326,14,52.261V55.5h44v-3.043C58,49.419,56.283,46.642,53.566,45.283z"/>
   <path className="st5" d="M18.18,45.22l5.946-3.243c-0.034-0.033-0.005-0.043,0.065-0.036l2.91-1.587
     C28.272,39.715,29,38.489,29,37.155V33.5c0,0-1.062-1.275-2.092-3.323h0c0-0.001-0.001-0.002-0.001-0.003
     c-0.135-0.268-0.268-0.551-0.399-0.844c-0.018-0.041-0.036-0.08-0.054-0.121c-0.133-0.303-0.263-0.616-0.386-0.944
     c-0.008-0.021-0.015-0.044-0.023-0.065c-0.108-0.29-0.209-0.589-0.306-0.896c-0.026-0.084-0.052-0.167-0.077-0.251
     c-0.101-0.338-0.196-0.682-0.278-1.038C24.554,25.481,24,24.554,24,23.5v-4c0-0.88,0.391-1.667,1-2.217v-5.648
     C23.587,10.539,21.397,9.5,18,9.5c-9.563,0-10,8-10,8v4.995c-0.526,0.475-1,1.154-1,1.914v3.455c0,0.911,0.479,1.711,1.194,2.174
     c0.863,3.758,3.76,6.463,3.76,6.463v3.157c0,1.151-0.629,2.211-1.64,2.762L3.61,46.622C1.385,47.836,0,50.168,0,52.703V55.5h14
     v-3.239C14,49.326,15.603,46.625,18.18,45.22z"/>
  </svg>
);


const renderSVGMobile = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 58 58">
     <path className="st5" d="M52.66,29.716c0-0.88-0.343-1.707-0.965-2.329l-0.557-0.557c0.949-0.84,1.521-2.055,1.521-3.362c0-2.481-2.019-4.5-4.5-4.5   c-0.182,0-0.362,0.018-0.54,0.04c0.022-0.179,0.04-0.357,0.04-0.54c0-2.481-2.019-4.5-4.5-4.5c-0.182,0-0.362,0.018-0.54,0.04   c0.022-0.179,0.04-0.357,0.04-0.54c0-2.481-2.019-4.5-4.5-4.5c-0.182,0-0.362,0.018-0.54,0.04c0.022-0.179,0.04-0.357,0.04-0.54   c0-2.481-2.019-4.5-4.5-4.5c-1.308,0-2.522,0.573-3.362,1.521l-0.123-0.123L12.705,22.338l4.238,4.238   c-1.356,0.776-2.283,2.221-2.283,3.892c0,1.566,0.806,2.944,2.023,3.75c0.062,0.083,0.133,0.164,0.221,0.239L27.66,45.172v1.796h-2   v13h18h8v-13h-2v-3.029c1.913-1.621,3-3.952,3-6.471c0-1.74-0.543-3.43-1.536-4.852l0.571-0.571   C52.317,31.423,52.66,30.596,52.66,29.716z M36.66,32.968c0-2.206,1.794-4,4-4s4,1.794,4,4s-1.794,4-4,4S36.66,35.174,36.66,32.968   z M50.66,23.468c0,0.768-0.354,1.479-0.937,1.947l-3.511-3.511c0.468-0.583,1.18-0.937,1.947-0.937   C49.539,20.968,50.66,22.089,50.66,23.468z M45.66,18.468c0,0.768-0.354,1.479-0.937,1.947l-3.511-3.511   c0.468-0.583,1.18-0.937,1.947-0.937C44.539,15.968,45.66,17.089,45.66,18.468z M40.66,13.468c0,0.768-0.354,1.479-0.937,1.947   l-3.511-3.511c0.468-0.583,1.18-0.937,1.947-0.937C39.539,10.968,40.66,12.089,40.66,13.468z M33.16,5.968   c1.379,0,2.5,1.121,2.5,2.5c0,0.768-0.354,1.479-0.937,1.947l-3.511-3.511C31.681,6.322,32.393,5.968,33.16,5.968z M18.621,28.03   l0.415-0.047c0.041-0.006,0.082-0.015,0.124-0.015h10c1.379,0,2.5,1.121,2.5,2.5s-1.121,2.5-2.5,2.5h-2.996h-2.828H19.16   c-1.379,0-2.5-1.121-2.5-2.5C16.66,29.275,17.501,28.278,18.621,28.03z M36.16,56.968c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5   s3.5,1.57,3.5,3.5S38.09,56.968,36.16,56.968z M49.66,57.968h-6v-3.426c0-2.206-0.954-4.188-2.464-5.574h8.464V57.968z    M49.686,34.056c0.634,1.021,0.975,2.202,0.975,3.412c0,2.055-0.948,3.946-2.602,5.191l-0.398,0.3v4.009H36.086H29.66V44.25   l-0.353-0.299c-0.045-0.039-0.093-0.075-0.18-0.14l-8.877-8.844h5.085l9.389,9.39c0.623,0.622,1.45,0.965,2.33,0.965   c0.879,0,1.706-0.343,2.329-0.965L49.686,34.056z"></path>
     <path className="st5" d="M25.241,0.933c-1.244-1.244-3.414-1.244-4.658,0L8.271,13.245c-1.283,1.285-1.283,3.374,0,4.659l3.02,3.02L28.261,3.953   L25.241,0.933z M19.367,9.675l-2,2c-0.195,0.195-0.451,0.293-0.707,0.293s-0.512-0.098-0.707-0.293   c-0.391-0.391-0.391-1.023,0-1.414l2-2c0.391-0.391,1.023-0.391,1.414,0S19.758,9.285,19.367,9.675z"></path>
  </svg>
);

const Expert = () => (
  <div className="Expert">
    <div className="Expert__intro">
      <span className="Expert__title">Du d&eacute;veloppement web &agrave; l&apos;expertise...</span>
      <span className="Expert__desc">
        Fort d&apos;une quinzaine ann&eacute;es d&apos;exp&eacute;rience
        de d&eacute;veloppement et de lead technique au sein de diff&eacute;rentes grandes entreprises
        de t&eacute;l&eacute;coms, m&eacute;dias et d'industrie j&apos;ai acquis des comp&eacute;tences &agrave;
        la fois techniques et fonctionnelles sur les m&eacute;tiers du web.
      </span>
    </div>
    <div className="Expert__separator">
      <img className="Expert__img" src="/static/img/pic01.jpg" alt="separator" />
    </div>
    <div className="Expert__features">
      <ExportBlock
        svg={renderSVGMobile()}
        title="D&eacute;veloppement Multi-Support"
        desc="Aguerri au d&eacute;veloppement d'applications web complexes React, Angular,
          NodeJs, PHP, HTML5/JS/CSS multi-navigateurs
          et multi-devices en Responsive ou Adaptive Design dans des contextes multi-langues."
      />
      <ExportBlock
        svg={renderSVGTeam()}
        title="Lead et Expertise Technique"
        desc="Expert r&eacute;f&eacute;rent et reconnu dans mes diff&eacute;rentes
          exp&eacute;riences, je m'efforce de transmettre, de conseiller et de mettre
          en pratique. J'effectue &eacute;galement de la veille technologique
          afin de rester &agrave; la page."
      />
      <ExportBlock
        svg={renderSVGParams()}
        title="Comp&eacute;tences Serveur"
        desc="Installation et param&eacute;trage des diff&eacute;rentes briques
         logiciels (apache, nginx, php, nodejs, ...)
         sous Unix, OsX ou Windows. Utilisatation des diff&eacute;rents services AWS,
         de jobs Gitlab-CI ou Jenkins."
      />
      <ExportBlock
        svg={renderSVGLeBeauJeu()}
        title="L'appui de la communauté du beau jeu"
        desc="Communauté que j'ai créée il y a plus d'un an qui rassemble une liste d'experts du web
          que j'ai pu rencontrer au cours de mes différentes expériences."
        link="https://lebeaujeu.com"
      />
    </div>
  </div>
);

export default Expert;
