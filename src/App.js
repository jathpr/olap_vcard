import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './Components/Home';
import Bio from './Components/Bio';
import News from './Components/News';
import Music from './Components/Music';
import Contacts from './Components/Contacts';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/biography' component={Bio} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/contacts' component={Contacts} />
            <Redirect to='/home' />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
