import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import './boards.scss';

const authDiv = $('#auth');
const boardsDiv = $('#loggedin');
const logoutBtn = $('#logout');
const titleDiv = $('#title');


const checkUserLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      boardsDiv.removeClass('hide');
      logoutBtn.removeClass('hide');
      titleDiv.addClass('hide');
    } else {
      authDiv.removeClass('hide');
      titleDiv.removeClass('hide');
      logoutBtn.addClass('hide');
      boardsDiv.addClass('hide');
    }
  });
};

export default { checkUserLoginStatus };
