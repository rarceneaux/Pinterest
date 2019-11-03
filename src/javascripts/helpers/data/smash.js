import boardsData from './boardsData';
import pinsData from './pinsData';


const getCompleteBoards = () => new Promise((resolve, reject) => {
  boardsData.getBoardsByUid()
    .then((singleBoard) => boardsData.getBoardsByUid(singleBoard.id))

})