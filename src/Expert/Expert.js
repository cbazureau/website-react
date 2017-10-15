import React from 'react';
import './Expert.css';

const Expert = () => (
  <div className="Expert">
    <div className="Expert__intro">
      <span className="Expert__introTitle">Du d&eacute;veloppement web &agrave; l&apos;expertise multi-support...</span>
      <span className="Expert__introDesc">
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
      <section class="box special features">
        <div class="features-row">
          <section>
            <span class="icon major fa-bolt accent2"></span>
            <h3>D&eacute;veloppement Multi-Support</h3>
            <p>Aguerri au d&eacute;veloppement d'applications web complexes PHP, Nodejs ou AngularJs et HTML5/JS/CSS multi-navigateurs et multi-devices en Responsive ou Adaptive Design.</p>
          </section>
          <section>
            <span class="icon major fa-area-chart accent3"></span>
            <h3>Expertise Technique</h3>
                          <p>Expert r&eacute;f&eacute;rent et reconnu dans mes diff&eacute;rentes exp&eacute;riences, je m'efforce de transmettre, de conseiller et de mettre en pratique. J'effectue &eacute;galement de la veille technologique afin de rester &agrave; la page.</p>
          </section>
        </div>
        <div class="features-row">
          <section>
            <span class="icon major fa-cloud accent4"></span>
            <h3>Comp&eacute;tences "Serveur"</h3>
            <p>Installation et param&eacute;trage des diff&eacute;rentes briques logiciels (apache, nginx, php, nodejs, mongo, ...) sous Unix, Windows, OsX. Utilisatation des interfaces AWS, de scripts Puppet et de jobs Jenkins.</p>
          </section>
          <section>
            <span class="icon major fa-lock accent5"></span>
            <h3>SCRUM &amp; Encadrement d&apos;&eacute;quipe</h3>
                          <p>A l'aise avec les languages informatiques mais aussi dans l'encadrement de petites &eacute;quipes de d&eacute;veloppement (1 &agrave; 5 personnes), les phases d'&eacute;tudes et mises en production ou en tant que Lead Tech d'une équipe SCRUM</p>
          </section>
        </div>
      </section>
    </div>
  </div>
);

export default Expert;
