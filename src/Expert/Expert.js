import React from 'react';
import './Expert.css';
import ExportBlock from './ExpertBlock/ExpertBlock';

const Expert = () => (
  <div className="Expert">
    <div className="Expert__intro">
      <span className="Expert__title">Du d&eacute;veloppement web &agrave; l&apos;expertise...</span>
      <span className="Expert__desc">
        Fort d&apos;une dizaine ann&eacute;es d&apos;exp&eacute;rience
        de d&eacute;veloppement/&eacute;tude/suivi de projet au sein de diff&eacute;rentes grandes entreprises
        de t&eacute;l&eacute;coms et de m&eacute;dias j&apos;ai acquis des comp&eacute;tences &agrave;
        la fois techniques et fonctionnelles sur les m&eacute;tiers du web et des supports natifs (iOs/Android).
      </span>
    </div>
    <div className="Expert__separator">
      <img className="Expert__img" src="/pic01.jpg" alt="separator" />
    </div>
    <div className="Expert__features">
      <ExportBlock
        title="D&eacute;veloppement Multi-Support"
        desc="Aguerri au d&eacute;veloppement d'applications web complexes PHP,
          Nodejs ou AngularJs et HTML5/JS/CSS multi-navigateurs
          et multi-devices en Responsive ou Adaptive Design."
      />
      <ExportBlock
        title="Expertise Technique"
        desc="Expert r&eacute;f&eacute;rent et reconnu dans mes diff&eacute;rentes
          exp&eacute;riences, je m'efforce de transmettre, de conseiller et de mettre
          en pratique. J'effectue &eacute;galement de la veille technologique
          afin de rester &agrave; la page."
      />
      <ExportBlock
        title="Comp&eacute;tences Serveur"
        desc="Installation et param&eacute;trage des diff&eacute;rentes briques
         logiciels (apache, nginx, php, nodejs, mongo, ...)
         sous Unix, Windows, OsX. Utilisatation des interfaces AWS,
         de scripts Puppet et de jobs Jenkins."
      />
      <ExportBlock
        title="SCRUM &amp; Encadrement d&apos;&eacute;quipe"
        desc="A l'aise avec les languages informatiques mais aussi dans l'encadrement de petites &eacute;quipes
          de d&eacute;veloppement (1 &agrave; 5 personnes), les phases d'&eacute;tudes et mises
          en production ou en tant que Lead Tech d'une équipe SCRUM"
      />
    </div>
  </div>
);

export default Expert;
