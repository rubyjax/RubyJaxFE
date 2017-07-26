import axios from "axios";

export const FETCH_TALKS = "fetch_talks";
export const FETCH_TALK = "fetch_talk";
export const CREATE_TALK = "create_talk";
export const DELETE_TALK = "delete_talk";

const ROOT_URL = "<ROOT_URL>";
// to delete
const API_KEY = "?key=string";

export function fetchTalks() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_TALKS,
    payload: request
  };
}

export function createTalk(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_TALK,
    payload: request
  };
}

export function fetchTalk(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_TALK,
    payload: request
  };
}

export function deleteTalk(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_TALK,
    payload: id
  };
}
