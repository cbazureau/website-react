import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Job from './Job/Job';
import Title from './Title/Title';
import './App.css';

class App extends Component {

  handleSectionChange = (section) => () => {
    console.log(section)
  }

  render() {
    return (
      <div className="App">
        <Header onSectionChange={this.handleSectionChange} />
        <div className="Page">
          <div className="Page__inner">
            <Title title="Poste actuel" />
            <Job
              logo="/pic06.jpg"
              company="Groupe Renault"
              dates="depuis mai 2017"
              url="https://group.renault.com/en/"
              description="Lead Tech des équipes (4 équipes, + de 15 developpeurs)
                dans le cadre de la refonte des sites du groupe Renault (Renault, Nissan, Alpine)
                qui seront déployés dans plus de 50 pays." >
              - Stack ReactJs :
              - SSR, chunking
              - redux, webpack, babel, thunk, axios
              - jest, enzyme, cucumber, browserstack
              - styleguidist, eslint, flow

              - Nginx, AEM, Controller en Java
              - Hébergement AWS : Cloudfront, Docker/ECS
            </Job>

            <Title title="Expertise" />

            <section class="box special">
              <header class="major">
                <h2>Du d&eacute;veloppement web &agrave; l&apos;expertise multi-support..." </h2>
                <p>Fort d&apos;une dizaine ann&eacute;es d&apos;exp&eacute;rience de d&eacute;veloppement/&eacute;tude/suivi de projet au sein de diff&eacute;rentes grandes entreprises de t&eacute;l&eacute;coms et de m&eacute;dias j&apos;ai acquis des comp&eacute;tences &agrave; la fois techniques et fonctionnelles sur les m&eacute;tiers du web et des supports natifs (iOs/Android).</p>
              </header>
              <span class="image featured"><img src="dist/img/pic01.jpg" alt="" /></span>
            </section>

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
              <a name="jobs"></a>
            </section>

            <Title title="Postes précédents" />

            <Job
              logo="/pic02.jpg"
              company="Canal+"
              dates="jan 2015 - avr 2017"
              url="http://www.canalplus.fr/"
              description="Chef de projet d&eacute;veloppement, d&eacute;veloppeur,
                devOps dans le cadre de la refonte du SI Canal+.
                J'interviens maintenant en tant que Lead Tech Full Stack
                sur la feature VENTE" >
              AngularJs, NodeJs/PM2, Apache/Nginx, MongoDb, Gulp, HTML5, CSS3, Javascript
            </Job>

            <Job
              logo="/pic03.jpg"
              company="Bouygues Telecom"
              dates="aou 2009 - nov 2014"
              url="http://www.bouyguestelecom.fr/"
              description="Chef de projet d&eacute;veloppement et d&eacute;veloppeur sur
                les sites Bouygues T&eacute;l&eacute;com ainsi que les applications
                smartphones (iOs et Android)
              " >
              PHP, NodeJs, Nginx, Objective C, Java Android, Oracle, RethinkDb, HTML5, CSS3, Javascript
            </Job>

            <Job
              logo="/pic04.jpg"
              company="Sopra Group"
              dates="déc 2004 - jui 2009"
              url="http://www.sopra.com/"
              description="Les 5 ann&eacute;es chez Sopra Group m'ont permis d'acqu&eacute;rir
                des bases solides dans le web et de pratiquer le suivi de projet chez de grands comptes.
              " >
              PHP, MySQL, Java, .dotNet, HTML, CSS, Javascript
            </Job>

            <Title title="Ecole" />

            <section class="box special">
              <span class="image featured"><img src="dist/img/pic05.jpg" alt="" /></span>
              <h3>Telecom Bretagne (2004)</h3>
              <p>Diplom&eacute; en 2004 de Telecom Bretagne, &eacute;cole d&apos;ing&eacute;nieur faisant partie du concours des Mines et situ&eacute; &agrave; Plouzan&eacute; pr&egrave;s de Brest.</p>
                            <p>Bagages techniques (PHP, Java, Unix, ...)</p>
              <ul class="actions">
                <li><a href="http://www.telecom-bretagne.eu/" class="button alt">En savoir plus sur Telecom Bretagne</a></li>
              </ul>
            </section>

            <Title title="Contact" />

            <section id="cta">
              <h2>Une question, une proposition d'emploi ..." </h2>
              <div><a href="/contact" id="contact" class="button alt fit">Contactez-moi !</a></div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
