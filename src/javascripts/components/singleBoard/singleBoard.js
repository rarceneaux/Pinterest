import $ from 'jquery';
import firebase from 'firebase';
import 'firebase/auth';
import pinsData from '../../helpers/data/pinsData';
import boardsData from '../../helpers/data/boardsData';
import utils from '../../helpers/utils';
import './singleBoard.scss';

const addNewPin = (e) => {
  e.stopImmediatePropagation();
  const { uid } = firebase.auth().currentUser;
  const newPin = {
    name: $('#pin-name').val(),
    boardId: $('.board-title')[0].id,
    url: $('#url').val(),
    imgUrl: $('#pin-image-url').val(),
    uid,
  };
  pinsData.addNewPin(newPin)
    .then(() => {
      $('#exampleModal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      selectedBoard('boardId');
    })
    .catch((error) => console.error(error));
};

const deletePins = (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  const pinId = $(e.target).attr('id');
  pinsData.deleteAPin(pinId)
    .then(() => {
      e.preventDefault();
      e.stopImmediatePropagation();
      const selectedBoardId = $(e.target).attr('boardInfo');
      // eslint-disable-next-line no-use-before-define
      selectedBoard(selectedBoardId);
    })
    .catch((error) => console.error(error));
};

const selectedBoard = (boardId) => {
  boardsData.getBoardByBoardId(boardId)
    .then((board) => {
      pinsData.getPinsByBoardId(boardId)
        .then((pins) => {
          console.log('pins', pins);
          let domString = '<div id="singles" class="d-flex flex-wrap justify-content-between container">';
          domString += `<p id="${boardId}" class="board-title">${board.name}</p>`;
          pins.forEach((pin) => {
            domString += `<div class="singles-div">
            <div class="card-body text-center">
              <h5 class="card-title">${pin.name}</h5>
              <img src="${pin.imgUrl}" class="card-img-top" alt="...">
              <button type="button" class="btn btn-danger delete" boardInfo="${pin.boardId}" id=${pin.id}>Delete Me</button>
              <p class="card-text"></p>
            </div>
          </div>`;
          });
          utils.printToDom('boards', '');
          utils.printToDom('single', domString);
        });
    });
  let domString = '<button type="button"  class="btn btn-success retBtn">Return Boards</button>';
  domString += '<button type="button"  class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add Pin</button>';
  utils.printToDom('boards2', domString);
  $('body').on('click', '.delete', (e) => deletePins(e));
  $('#add-new-pin').click(addNewPin);
};

export default { selectedBoard };
