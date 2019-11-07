import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import './boards.scss';
import utils from '../../helpers/utils';
import boardsData from '../../helpers/data/boardsData';

const authDiv = $('#auth');
const boardsDiv = $('#boards');
const logoutBtn = $('#logout');
const titleDiv = $('#title');

const buildBoards = (uid) => {
  boardsData.getBoardsByUid(uid)
    .then((boards) => {
      let domString = '<h2 class="heading">Boards</h2>';
      domString += '<div id="board-section" class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += `<div class="card${board.id}-boards">
        <div class="card-body text-center">
          <h5 class="card-title">${board.name}</h5>
          <img src="..." class="card-img-top" alt="...">
          <p class="card-text${board.uid}"></p>
        </div>
      </div>`;
      });
      utils.printToDom('boards', domString);
    })
    .catch((error) => console.error(error));
};

const checkUserLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      authDiv.addClass('hide');
      boardsDiv.removeClass('hide');
      logoutBtn.removeClass('hide');
      titleDiv.addClass('hide');
      // boardsData.getBoardsByUid(user.uid);
      buildBoards(user.uid);
    } else {
      authDiv.removeClass('hide');
      titleDiv.removeClass('hide');
      logoutBtn.addClass('hide');
      boardsDiv.addClass('hide');
    }
  });
};


export default { checkUserLoginStatus };
