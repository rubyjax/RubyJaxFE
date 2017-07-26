import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import TalksReducer from "./reducer_talks";

const rootReducer = combineReducers({
  talks: TalksReducer,
  form: formReducer
});

export default rootReducer;
