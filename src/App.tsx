import React from 'react';
import * as firebase from 'firebase/app';
import '@firebase/firestore';
import { firebaseConfig } from './config/firebaseConfig';
import { Home } from './view/Home';

export function App() {
  try {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase connect ...OK');
  } catch (err) {
    if(!/already exists/.test(err.message)) {
      console.log('Firebase connection ...NO');
    }
  } 
  return (
    <Home />
  )
}