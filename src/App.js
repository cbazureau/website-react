import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
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
          <div className="CurrentJob">
            <div className="CurrentJob__description">
              Lead Tech des équipes (4 équipes, + de 15 developpeurs)
              dans le cadre de la refonte des sites du groupe Renault (Renault, Nissan, Alpine)
              qui seront déployés dans plus de 50 pays.
            </div>
            <div className="CurrentJob__details">
            - Stack ReactJs :
            - SSR, chunking
            - redux, webpack, babel, thunk, axios
            - jest, enzyme, cucumber, browserstack
            - styleguidist, eslint, flow

            - Nginx, AEM, Controller en Java
            - Hébergement AWS : Cloudfront, Docker/ECS
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
