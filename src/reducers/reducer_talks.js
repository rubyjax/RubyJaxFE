import _ from "lodash";
import { FETCH_TALKS, FETCH_TALK, DELETE_TALK } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_TALK:
      return _.omit(state, action.payload);
    case FETCH_TALK:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_TALKS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
