import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Job from './Job/Job';
import Expert from './Expert/Expert';
import Title from './Title/Title';
import Contact from './Contact/Contact';
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
            <div className="Page__section">
              <Title title="Poste actuel" />
              <Job
                logo="/pic06.jpg"
                company="Groupe Renault"
                dates="depuis mai 2017"
                url="https://group.renault.com/en/"
                description="Lead Tech des équipes (4 équipes, + de 15 developpeurs)
                  dans le cadre de la refonte des sites du groupe Renault (Renault, Nissan, Alpine)
                  qui seront déployés dans plus de 50 pays." >
                  <ul>
                    <li>Stack ReactJs :
                      <ul>
                        <li>SSR, Chunking, ...</li>
                        <li>Redux, Webpack, Babel, Thunk, Axios, ...</li>
                        <li>Jest, Enzyme, Cucumber, BrowserStack, ...</li>
                        <li>Styleguidist, Eslint, Flow, ...</li>
                      </ul>
                    </li>
                    <li>Gitlab, Gitlab-Ci</li>
                    <li>Nginx, AEM, Controller en Java</li>
                    <li>Hébergement AWS : Cloudfront, Docker/ECS</li>
                  </ul>
              </Job>
            </div>

            <div className="Page__section">
              <Title title="Expertise" />
              <Expert />
            </div>

            <div className="Page__section">
              <Title title="Postes précédents" />

              <Job
                logo="/pic02.jpg"
                company="Canal+"
                dates="jan 2015 - avr 2017"
                url="http://www.canalplus.fr/"
                description="Chef de projet d&eacute;veloppement, d&eacute;veloppeur,
                  devOps dans le cadre de la refonte du SI Canal+ puis Lead Tech Full Stack
                  sur la feature VENTE." >
                AngularJs, NodeJs/PM2, Apache/Nginx, MongoDb, Gulp, HTML5, CSS3, Javascript
              </Job>

              <Job
                logo="/pic03.jpg"
                company="Bouygues Telecom"
                dates="aou 2009 - nov 2014"
                url="http://www.bouyguestelecom.fr/"
                description="Chef de projet d&eacute;veloppement et d&eacute;veloppeur sur
                  les sites Grand Public de Bouygues T&eacute;l&eacute;com.
                " >
                PHP, NodeJs, Nginx, MySQL, Oracle, RethinkDb, HTML5, CSS3, Javascript
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
            </div>

            <div className="Page__section">
              <Title title="Ecole" />
              <Job
                logo="/pic05.jpg"
                company="Telecom Bretagne"
                dates="2004"
                url="http://www.telecom-bretagne.eu/"
                description="Diplom&eacute; en 2004 de Telecom Bretagne, &eacute;cole
                d&apos;ing&eacute;nieur faisant partie du concours des Mines et situ&eacute;
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
  }
}

export default App;
