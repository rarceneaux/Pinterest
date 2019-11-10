import firebase from 'firebase';

import auth from './components/Auth/auth';
import home from './components/home/home';
import apiKeys from './helpers/apiKeys.json';
import pinsData from './helpers/data/pinsData';
import boardsData from './helpers/data/boardsData';
import authData from './helpers/data/authData';
import '../styles/main.scss';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.loginBtn();
  home.logoutEvent();
  authData.checkUserLoginStatus();
  pinsData.getPinsByBoardId('board3');
  boardsData.getBoardByBoardId('board4').then();
};
init();
