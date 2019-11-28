import React, { useState, useLayoutEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Job from './Job/Job';
import Renault from './Job/Renault';
import Expert from './Expert/Expert';
import Title from './Title/Title';
import Contact from './Contact/Contact';
import './App.css';

/**
 * Main component
 */
const App = () => {
  const [currentSection, setCurrentSection] = useState(null);

  useLayoutEffect(() => {
    if (currentSection) {
      const node = document.querySelector(`div[data-section=${currentSection}]`);
      const headerHeight = document.querySelector(`.Header`).getBoundingClientRect().height;
      if (!node) return;
      window.scrollTo(0, headerHeight + node.offsetTop - 100);
    }
  }, [currentSection]);

  const handleSectionChange = section => () => setCurrentSection(section);

  return (
    <div className="App">
      <Header onSectionChange={handleSectionChange} />
      <div className="Page">
        <div className="Page__inner">
          <div className="Page__section" data-section="current">
            <Title title="Poste actuel" />
            <Job
              current
              logo="/static/img/pic06.jpg"
              company="Groupe Renault"
              dates="depuis mai 2017"
              url="https://group.renault.com/en/"
              description="Lead Tech des équipes (4 équipes, + de 15 developpeurs)
                  dans le cadre de la refonte des sites du groupe Renault (Renault, Dacia, Alpine)
                  qui seront déployés dans plus de 50 pays."
            >
              <ul>
                <li>
                  Stack ReactJs
                  <ul>
                    <li>
                      <strong>Server Side Rendering (SSR)</strong> with Server Push and dns-prefetch
                    </li>
                    <li>
                      <strong>Responsive</strong> websites and Jpg/Webp pictures
                    </li>
                    <li>
                      IntersectionObserver <strong>Lazyloading</strong> for pictures and videos
                    </li>
                    <li>
                      JS and CSS <strong>Component-Based Chunking</strong>
                    </li>
                    <li>
                      Wysiwyg CMS with a JSON API provided by{' '}
                      <strong>Adobe Experience Manager (AEM)</strong>
                    </li>
                    <li>
                      <strong>React</strong> (with hooks), Redux, Webpack, Babel, Thunk, Axios,
                      Lodash, ...
                    </li>
                    <li>Jest, Enzyme, ...</li>
                    <li>Eslint, Stylelint, Flow, Prettier...</li>
                  </ul>
                </li>
                <li>
                  <strong>Gitlab, Gitlab-Ci</strong>, <strong>Docker</strong> de build et de run
                </li>
                <li>Nginx, AEM, Controlleur en Java, Aggregateur en NodeJs</li>
                <li>
                  Hébergement <strong>AWS</strong> : Cloudfront, Docker/ECS / Lambda
                </li>
                <li>Monitoring : Lighthouse, Broken Links, Grafana, Kibana, Datadog</li>
              </ul>
              <Renault />
            </Job>
          </div>

          <div className="Page__section" data-section="xp">
            <Title title="Expertise" />
            <Expert />
          </div>

          <div className="Page__section" data-section="jobs">
            <Title title="Postes précédents" />

            <Job
              logo="/static/img/pic02.jpg"
              company="Canal+"
              dates="jan 2015 - avr 2017"
              url="http://www.canalplus.fr/"
              description="Chef de projet d&eacute;veloppement, d&eacute;veloppeur dans le cadre de la
                  refonte du SI Canal+ puis Lead Tech Full Stack
                  sur la feature VENTE."
            >
              <ul>
                <li>
                  Equipe Scrum (8 pers) : Interface Tablette Vendeur, Refonte des sites clients
                </li>
                <li>AngularJs, Node JS, Gulp, AWS, MongoDb, Jenkins, Puppet, Gitlab-CI</li>
                <li>
                  Rôles :
                  <ul>
                    <li>
                      Leader Technique de la feature VENTE (5 développeurs en mode full-stack)
                    </li>
                    <li>
                      Mise en place et dev d'une application (FACE Tablet) pour les vendeurs en
                      popup store en AngularJs 1.5.8
                    </li>
                    <li>
                      Mise en place et dev de la refonte de espaceclient et parcours de vente web en
                      AngularJs 1.6.0
                    </li>
                  </ul>
                </li>
              </ul>
            </Job>

            <Job
              logo="/static/img/pic03.jpg"
              company="Bouygues Telecom"
              dates="aou 2009 - nov 2014"
              url="http://www.bouyguestelecom.fr/"
              description="Chef de projet d&eacute;veloppement et d&eacute;veloppeur sur
                  les sites Grand Public de Bouygues T&eacute;l&eacute;com.
                "
            >
              <ul>
                <li>
                  Projets (6 à 15 pers) : Espace Client FAI, EC Unifié, Module Centralisé,
                  Assistance Unifiée
                </li>
                <li>PHP5, SOAP, NodeJS, MYSQL5, NGINX, RethinkDb, Responsive, Adaptive, Jquery</li>
                <li>
                  Rôles :
                  <ul>
                    <li>
                      Développeur au sein des ex-équipes Club Internet, puis Référent technique et
                      CP Dev.
                    </li>
                    <li>
                      Projets web principalement sur le modèle "NGINX/PHP-FPM/WS SOAP Java/Bdd
                      Oracle".
                    </li>
                    <li>
                      Intégration au Club des experts de Bouygues Telecom (Rédaction d'articles
                      internes)
                    </li>
                    <li>
                      Diffusion de la philosophie de développement Fixe sur la partie Mobile de
                      Bouygues Telecom.
                    </li>
                    <li>
                      Outils de stats et d'analyse des sites BigData/Live (RabbitMQ, ElasticSearch,
                      ...).
                    </li>
                    <li>Api REST en NodeJs qui permet d'intéragir avec une base RethinkDb.</li>
                    <li>
                      Header/footer responsive centralisé sur l'ensemble des sites Bouygues Telecom
                    </li>
                    <li>Assistance unifiée (GP, PRO, Desktop, Mobile) et Refontes des EC</li>
                    <li>
                      Finaliste du « Digital Hackaton » avec un sujet d'analyse prédictive de la
                      navigation cliente
                    </li>
                  </ul>
                </li>
              </ul>
            </Job>

            <Job
              logo="/static/img/pic04.jpg"
              company="Sopra Group"
              dates="déc 2004 - jui 2009"
              url="http://www.sopra.com/"
              description="Les 5 ann&eacute;es chez Sopra Group m'ont permis d'acqu&eacute;rir
                  des bases solides dans le web et de pratiquer le suivi de projet chez de grands comptes.
                "
            >
              <ul>
                <li>
                  Projet (5 pers) : Portail du département Hébergeur et Portail du département
                  Production
                </li>
                <li>
                  PHP5, MYSQL5, Apache, XHTML, CSS, Ajax, JSON, IIS, SQL SERVER, J2EE, Oracle,
                  XHTML, Ajax, JSON, CSS, Unix, Korn Shell, Prototype, Tomcat
                </li>
                <li>
                  Rôles :
                  <ul>
                    <li>
                      Management et développement d'une application Web des indicateurs de QOS.
                    </li>
                    <li>
                      Développeur puis Responsable de l'équipe en charge de la TMA du portail de
                      l'hébergeur
                    </li>
                    <li>
                      Réalisation d'outils web pour faciliter le suivi projet des équipes de Sopra
                      Group
                    </li>
                  </ul>
                </li>
              </ul>
            </Job>
          </div>

          <div className="Page__section">
            <Title title="Ecole" />
            <Job
              logo="/static/img/pic05.jpg"
              company="Telecom Bretagne"
              dates="2004"
              url="http://www.telecom-bretagne.eu/"
              description="Diplom&eacute; en 2004 de Telecom Bretagne, &eacute;cole
                d'ing&eacute;nieur faisant partie du concours des Mines et situ&eacute;
                &agrave; Plouzan&eacute; pr&egrave;s de Brest.
                "
            />
          </div>

          <div className="Page__section Page__section--last">
            <Title title="Contact" />
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
