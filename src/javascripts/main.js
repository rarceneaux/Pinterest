import firebase from 'firebase';

import auth from './components/Auth/auth';
import home from './components/home/home';
import boards from './components/boards/boards';
import apiKeys from './helpers/apiKeys.json';
import pinsData from './helpers/data/pinsData';
import '../styles/main.scss';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.loginBtn();
  home.logoutEvent();
  boards.checkUserLoginStatus();
  pinsData.getPinsByBoardId();
};
init();
