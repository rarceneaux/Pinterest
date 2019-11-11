import $ from 'jquery';
import boards from './boards';

const returnToBoards = () => {
  $('body').on('click', '.retBtn', () => {
    document.getElementById('single').innerHTML = '';
    document.getElementById('boards2').innerHTML = '';
    boards.buildBoards();
  });
};

export default { returnToBoards };
