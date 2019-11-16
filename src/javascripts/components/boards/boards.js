import $ from 'jquery';
import firebase from 'firebase';
import 'firebase/auth';
import './boards.scss';
import boardsData from '../../helpers/data/boardsData';
import selectedBoard from '../singleBoard/singleBoard';
import utils from '../../helpers/utils';
import pinsData from '../../helpers/data/pinsData';

const displayPins = (e) => {
  const boardId = e.target.id;
  selectedBoard.selectedBoard(boardId);
};

const deleteABoard = (e) => {
  e.preventDefault();
  const { uid } = firebase.auth().currentUser;
  boardsData.deleteBoard(e.target.id)
    .then(() => {
      pinsData.bothPinAndBoard(e.target.id);
      // eslint-disable-next-line no-use-before-define
      buildBoards(uid);
    })
    .catch((error) => console.error(error));
};

const addNewBoard = (e) => {
  e.stopImmediatePropagation();
  const { uid } = firebase.auth().currentUser;
  const newBoard = {
    name: $('#board-name').val(),
    img: $('#board-img').val(),
    id: $('#board-id').val(),
    uid,
  };
  boardsData.addNewBoard(newBoard)
    .then(() => {
      $('#exampleModal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildBoards(uid);
    })
    .catch((error) => console.error(error));
};

const buildBoards = () => {
  const { uid } = firebase.auth().currentUser;
  boardsData.getBoardsByUid(uid)
    .then((boards) => {
      let domString = '<h2 class="heading">Boards</h2>';
      domString += '<button type="button"  class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">Add Board</button>';
      domString += '<div id="board-section" class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += `<div id="${board.id}" class="card-boards">
        <div class="card-body text-center">
          <h5 class="card-title">${board.name}</h5>
          <img src="${board.img}" class="card-img-top" alt="...">
          <p class="card-text"${board.uid}></p>
          <button type="button" id="${board.id}" class="btn btn-danger  delete-board"> Delete Board</button>
          <button type="button" id="${board.id}" class="btn btn-primary show-pins"> View Pins</button>
        </div>
      </div>`;
      });
      utils.printToDom('boards', domString);
      $('#boards').on('click', '.show-pins', displayPins);
      $('#boards').on('click', '.delete-board', deleteABoard);
      $('#boards').on('click', '.add-board', addNewBoard);
      $('#add-new-board').click(addNewBoard);
    })
    .catch((error) => console.error(error));
};

export default { buildBoards };
