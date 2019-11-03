import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="uid"&equalTo="${boardId}"`)
  .then((response) => {
    const daPins = response.data;
    const pins = [];
    Object.keys(daPins).forEach((fbId) => {
      daPins[fbId].id = fbId;
      pins.push(daPins[fbId]);
    });
    resolve(boards);
  })
  .catch((error) => reject(error))
});

export default { getPinsByBoardId };
