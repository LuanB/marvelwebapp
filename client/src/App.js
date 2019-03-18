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

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <BrowserRouter>
            <div>
              <NavHeader />
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/searchComics" component={ComicsContainer} /> */}
              <Route path="/comic/:id" component={ComicDetails} />
              {/* <Route
                exact
                path="/searchHeros"
              component={CharactersContainer} */}
              />
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
