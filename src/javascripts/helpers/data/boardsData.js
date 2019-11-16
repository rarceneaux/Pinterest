import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoardsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      console.log(response);
      const daBoards = response.data;
      const boards = [];
      Object.keys(daBoards).forEach((fbId) => {
        // console.log(daBoards);
        daBoards[fbId].id = fbId;
        boards.push(daBoards[fbId]);
      });
      resolve(boards);
    })
    .catch((error) => reject(error));
});

const getBoardByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards/${boardId}.json`)
    .then((response) => {
      resolve((response.data));
    })
    .catch((error) => reject(error));
});

const deleteBoard = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);

const addNewBoard = (newBoard) => axios.post(`${baseUrl}/boards.json`, newBoard);

export default {
  getBoardsByUid,
  getBoardByBoardId,
  deleteBoard,
  addNewBoard,
};
