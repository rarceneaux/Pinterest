import $ from 'jquery';
import boards from './boards';

const returnToBoards = () => {
  $('body').on('click', '.retBtn', () => {
    document.getElementById('single').innerHTML = '';
    document.getElementById('boards2').innerHTML = '';
    boards.buildBoards();
  });
};

// const daBoards = (uid) => {
//   boardsData.getBoardsByUid(uid)
//     .then((boards) => {
//       let domString = '<h2 class="heading">Boards</h2>';
//       domString += '<div id="board-section" class="d-flex flex-wrap">';
//       boards.forEach((board) => {
//         domString += `<div id="${board.id}" class="card-boards">
//         <div class="card-body text-center">
//           <h5 class="card-title">${board.name}</h5>
//           <img src="${board.img}" class="card-img-top" alt="...">
//           <p class="card-text"${board.uid}></p>
//           <button type="button" id="${board.id}" class="btn btn-primary show-pins">Pins</button>
//         </div>
//       </div>`;
//       });
//       utils.printToDom('boards', domString);
//     })
//     .catch((error) => console.log(error));
// };

export default { returnToBoards };
