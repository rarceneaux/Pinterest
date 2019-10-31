import $ from 'jquery';
import firebase from 'firebase';
import 'firebase/auth';
import './home.scss';

const authDiv = $('#auth');
const logoutBtn = $('#logout');
const title = $('#title');

const logoutEvent = () => {
  logoutBtn.click((e) => {
    e.preventDefault();
    firebase.auth().signOut()
      .then(() => {
        logoutBtn.addClass('hide');
        authDiv.removeClass('hide');
        title.removeClass('hide');
      }).catch((err) => console.error('you still logged in', err));
  });
};
export default { logoutEvent };
