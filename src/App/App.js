import React from 'react';
import firebase from 'firebase/app';
// import 'firebase/auth';

import firebaseConnection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';

import 'bootstrap/dist/css/bootstrap.min.css';
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
        <h1>App</h1>
        {
          (this.state.authed)
            ? (<div>Already Authed</div>)
            : (<Auth />)
        }
      </div >
    );
  }
}

export default App;
