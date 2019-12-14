import React from 'react';
import firebase from 'firebase/app';

import firebaseConnection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import BoardsContainer from '../components/BoardsContainer/BoardsContainer';
import MyNavbar from '../components/MyNavbar/MyNavbar';

import './App.scss';

firebaseConnection.firebaseApp();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      < div className = "App" >
        <MyNavbar authed={this.state.authed}/>
        <h1>App</h1>
        {
          (this.state.authed)
            ? (<BoardsContainer />)
            : (<Auth />)
        }
      </div >
    );
  }
}

export default App;
