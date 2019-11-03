import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoardsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
  .then((response) => {
    const daBoards = response.data;
    const boards = [];
    Object.keys(daBoards).forEach((fbId) => {
      daBoards[fbId].id = fbId;
      boards.push(daBoards[fbId]);
    });
    resolve(boards);
  })
  .catch((error) => reject(error))
});

export default { getBoardsByUid };
