import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      console.log(response);
      const daPins = response.data;
      const pins = [];
      Object.keys(daPins).forEach((fbId) => {
        daPins[fbId].id = fbId;
        pins.push(daPins[fbId]);
      });
      resolve(pins);
    })
    .catch((error) => reject(error));
});

const addNewPin = (newPin) => axios.post(`${baseUrl}/pins.json`, newPin);

const deleteAPin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

const bothPinAndBoard = (boardId) => {
  getPinsByBoardId(boardId)
    .then((pins) => {
      pins.forEach((pin) => {
        deleteAPin(pin.id);
      });
    });
};

export default {
  getPinsByBoardId,
  deleteAPin,
  bothPinAndBoard,
  addNewPin,
};
