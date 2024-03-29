import firebase from 'firebase';
import 'bootstrap';
import auth from './components/Auth/auth';
import home from './components/home/home';
import apiKeys from './helpers/apiKeys.json';
import pinsData from './helpers/data/pinsData';
import boardsData from './helpers/data/boardsData';
import authData from './helpers/data/authData';
import returnToBoards from './components/boards/returnBoards';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.loginBtn();
  home.logoutEvent();
  authData.checkUserLoginStatus();
  pinsData.getPinsByBoardId('boardId');
  boardsData.getBoardByBoardId('boardId').then();
  returnToBoards.returnToBoards();
};
init();
