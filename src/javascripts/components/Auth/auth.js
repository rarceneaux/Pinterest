import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import pic from './newbtn.png';

import utils from '../../helpers/utils';

const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginBtn = () => {
  const domString = `<button id="google-auth"> <img src=${pic} /></button>`;
  utils.printToDom('auth', domString);
  $('#google-auth').click(login);
};

export default { loginBtn };
