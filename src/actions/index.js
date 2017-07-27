import axios from "axios";

export const FETCH_TALKS = "fetch_talks";
export const FETCH_TALK = "fetch_talk";
export const CREATE_TALK = "create_talk";
export const DELETE_TALK = "delete_talk";

const ROOT_URL = "http://localhost:3000";
// to delete
//const API_KEY = "?key=string";

export function fetchTalks() {
  const request = axios.get(`${ROOT_URL}/talks`);

  return {
    type: FETCH_TALKS,
    payload: request
  };
}

export function createTalk(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/talks`, values)
    .then(() => callback());

  return {
    type: CREATE_TALK,
    payload: request
  };
}

export function fetchTalk(id) {
  const request = axios.get(`${ROOT_URL}/talks/${id}`);

  return {
    type: FETCH_TALK,
    payload: request
  };
}

export function deleteTalk(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/talks/${id}`)
    .then(() => callback());

  return {
    type: DELETE_TALK,
    payload: id
  };
}
