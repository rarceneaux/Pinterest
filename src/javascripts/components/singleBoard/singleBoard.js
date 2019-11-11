import $ from 'jquery';
import pinsData from '../../helpers/data/pinsData';
import boardsData from '../../helpers/data/boardsData';
import utils from '../../helpers/utils';
import './singleBoard.scss';

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
          domString += `<p class="board-title">${board.name}</p>`;
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
  const domString = '<button type="button"  class="btn btn-success retBtn">Return Boards</button>';
  utils.printToDom('boards2', domString);
  $('body').on('click', '.delete', (e) => deletePins(e));
};


export default { selectedBoard };
