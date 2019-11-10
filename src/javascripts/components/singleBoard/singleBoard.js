// import $ from "jquery";
import pinsData from '../../helpers/data/pinsData';
import boardsData from '../../helpers/data/boardsData';
import utils from '../../helpers/utils';
import './singleBoard.scss';


const selectedBoard = (boardId) => {
  boardsData.getBoardByBoardId(boardId)
    .then((board) => {
      pinsData.getPinsByBoardId(boardId)
        .then((pins) => {
          console.log('pins', pins);
          let domString = '<div id="singles">';
          domString += `<p>${board.name}</p>`;
          pins.forEach((pin) => {
            domString += `<div class="singles-div">
            <div class="card-body text-center">
            <i class="fas fa-times-circle fa-3x return"></i>
              <h5 class="card-title">${pin.name}</h5>
              <img src="${pin.imgUrl}" class="card-img-top" alt="...">
              <p class="card-text"></p>
            </div>
          </div>`;
          });
          utils.printToDom('boards', '');
          utils.printToDom('single', domString);
          // $('#single').on('click','.return', buildboards);
        });
    });
};

export default { selectedBoard };
