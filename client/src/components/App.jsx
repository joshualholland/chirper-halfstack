import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Jumbotron from './Jumbotron';
import Navbar from './Navbar';
import Form from './Form';
import SingleChirp from './SingleChirp';
import ChirpTimeline from './ChirpsTimeline';
import EditChirp from './EditChip'



class App extends Component {
  render() {
    return (
        <Router>
          <>
            <Navbar />
            <Jumbotron />
            <Switch>
              <Route exact path='/' component={ChirpTimeline}/>
              <Route exact path='/form' component={Form} />
              <Route exact path='/chirp/:id' component={SingleChirp} />
              <Route exact path='/edit/:id' component={EditChirp} />
            </Switch>
          </>
          
        </Router>
    )
  }

}


export default App;
