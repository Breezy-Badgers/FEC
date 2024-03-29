import Redux from "redux";

const getReviewsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_REVIEWS":
      return state.concat(action.reviews);
    case "FILTER_STARS":
      return action.reviews;
    case "CLEAR_FILTER":
      return action.reviews;
    case "SORT":
      return action.reviews;
    case "ADD_REVIEW":
      let newState = [action.review, ...state];
      return newState;
    default:
      return state;
  }
};

export default getReviewsReducer;
