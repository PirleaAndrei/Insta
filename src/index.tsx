import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {fieldValue, firebaseInit ,} from './lib/firebase'
import {firebaseContext,firestoreContext} from './context/firebase';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
    <firebaseContext.Provider value={firebaseInit}>
      <firestoreContext.Provider value ={fieldValue}>
     <App />
     </firestoreContext.Provider>
    </firebaseContext.Provider>

);

