import counter from "./example.js";
// import multiply from "./example2.js";
import { combineReducers } from "redux";
import questions from "./QAReducers/qReducer";
import reviews from "../reducers/ReviewReducers/getReviews.js";
import answers from "../reducers/QAReducers/aReducer";
import styles from "../reducers/overview-reducers/stylesReducer.js";
import list from "../reducers/overview-reducers/listReducer.js";
import info from "../reducers/overview-reducers/infoReducer.js";
import cart from "../reducers/overview-reducers/setCartReducers.js";
import metaData from "../reducers/RatingsReducers/index.js";
import getTwoMoreQs from "../reducers/QAReducers/getTwoMoreQsReducer.js";

export default combineReducers({
  counter,
  questions,
  reviews,
  answers,
  styles,
  list,
  info,
  metaData,
  cart,
  getTwoMoreQs
});
