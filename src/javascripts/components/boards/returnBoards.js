import $ from 'jquery';
import boards from './boards';

const returnToBoards = () => {
  $('body').on('click', '.retBtn', () => {
    $('#single').html = '';
    $('#board2').html = '';
    boards.buildBoards();
  });
};

export default { returnToBoards };
