// const firebase = require('firebase')

// var firebaseConfig = {
//     apiKey: "AIzaSyD3PJ20hz-uJA2bdEQcnH1Q4sY9OQc0ISY",
//     authDomain: "dnd5e-characterdb.firebaseapp.com",
//     projectId: "dnd5e-characterdb",
//     storageBucket: "dnd5e-characterdb.appspot.com",
//     messagingSenderId: "85627458493",
//     appId: "1:85627458493:web:9b8a1c9bb93beadc2178d4",
//     measurementId: "G-75MZDWV6YJ"
//   };
import { v4 as uuidv4 } from 'uuid'

const admin = require('firebase-admin')
const serviceAccount = require('../../secrets/dnd5e-characterdb-firebase-adminsdk-f32d5-24df8294bd.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://databaseName.firebaseio.com',
})

const db = admin.firestore()
// const auth = firebase.default.auth()

// auth.useEmulator('http://localhost:9099')
// db.useEmulator('localhost', 8080)

test('hello', async () => {
  const id = uuidv4()
  const ref = await db.collection('users').doc(id).set({
    first: 'xxx',
    last: 'Lovelace',
    born: 1815,
    hoge: 'fuga',
  })
})
