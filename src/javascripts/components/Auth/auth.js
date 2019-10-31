import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import pic from './google-sign-in.png';

import utils from '../../helpers/utils';

const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginBtn = () => {
  const domString = `<button id="google-auth"> <img id="g-btn "src=${pic} /></button>`;
  utils.printToDom('auth', domString);
  $('#google-auth').click(login);
};

export default { loginBtn };
