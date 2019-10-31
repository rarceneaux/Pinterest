import firebase from 'firebase';

import auth from './components/Auth/auth';
import home from './components/home/home';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.loginBtn();
  home.logoutEvent();
};
init();
