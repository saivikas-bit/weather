import './App.css';
import Layout from './components/layout/Layout';
import firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { Component } from 'react';
firebase.initializeApp({
  apiKey: "AIzaSyCpIPMpNKyy8n8xMRZv2yGX7xPXfxWhZP0",
  authDomain: "agile-splicer-301212.firebaseapp.com"
})
class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
  render(){
  return (
    <>
    {this.state.isSignedIn?(<Layout></Layout>): (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
    </>
  )}
}

export default App;
