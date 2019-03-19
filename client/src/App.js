import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './components/Home';
import ComicsList from './components/ComicsList';
import Footer from './components/Footer';
import NavHeader from './components/NavHeader';
import ComicsContainer from './components/Comics/ComicsContainer';
import CharactersContainer from './components/Characters/CharactersContainer';
import ComicDetails from './components/Comics/ComicDetails';

import './styles/layout.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="main">
            <BrowserRouter>
              <div>
                <NavHeader />
                <Route exact path="/" component={Home} />
              </div>
            </BrowserRouter>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
