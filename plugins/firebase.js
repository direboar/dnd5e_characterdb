import firebase from 'firebase'

export default ({ app }, inject) => {
  const config = {
    apiKey: 'AIzaSyD3PJ20hz-uJA2bdEQcnH1Q4sY9OQc0ISY',
    authDomain: 'dnd5e-characterdb.firebaseapp.com',
    databaseURL: 'https://friendry-chat.firebaseio.com',
    projectId: 'dnd5e-characterdb',
    messagingSenderId: '85627458493',
  }
  firebase.initializeApp(config)
  inject('firebase', firebase)
}
