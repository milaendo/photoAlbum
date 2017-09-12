import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../styles/App.css';
import AlbumsAll from './AlbumsAll'
import Photo from './Photo'
import SingleAlbum from './SingleAlbum'
import store from '../store'
import {Provider} from 'react-redux'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={AlbumsAll}/>
            <Route path='./SingleAlbum/:id' component={SingleAlbum}/>
            <Route path='/Photo/:id' component={Photo}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
