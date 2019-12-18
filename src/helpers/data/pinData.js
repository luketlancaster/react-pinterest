import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then(({ data }) => {
      const pins = [];

      if (data != null) {
        Object.keys(data).forEach((pinId) => {
          const newPin = data[pinId];
          newPin.id = pinId;
          pins.push(newPin);
        });
      }

      resolve(pins);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSinglePin = (pinId) => axios.get(`${baseUrl}/pins/${pinId}.json`);

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

export default { getPinsByBoardId, getSinglePin, deletePin };
