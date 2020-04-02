import React, { Component } from 'react';

import Footer from './components/Footer';
import ClanList from './components/ClanList';
import UserImage from './components/UserImage';
import SearchBar from './components/SearchBar';
import Scroll from './components/Scroll.js';

import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faPlus);

class App extends Component {
  constructor() {
    super();
    this.state = {
      clans: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({ clans: users })});
  }

  render() {
    // console.log(this.state.clans);
    const clans = this.state;
    const filteredClans = clans.filter(clan => {
      return clan.name;
    })

    return (
      <div className="App">
        <div className="row">
          <div className="col-3 center">
            <UserImage />
          </div>
          <div className="col-9 center">
            <SearchBar />
          </div>
        </div>
        <Scroll>
          <ClanList clans={filteredClans} />
        </Scroll>
        <Footer />
      </div>
    );
  }
}

export default App;
