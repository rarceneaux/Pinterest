import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoardsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      // console.log(response.data);
      const daBoards = response.data;
      const boards = [];
      Object.keys(daBoards).forEach((fbId) => {
        // console.log(daBoards);
        daBoards[fbId].id = fbId;
        boards.push(daBoards[fbId]);
      });
      console.log(boards);
      resolve(boards);
    })
    .catch((error) => reject(error));
});

// const getSingleBoard = (uid) => boards.filter((board) => board.uid === uid);

export default { getBoardsByUid };
