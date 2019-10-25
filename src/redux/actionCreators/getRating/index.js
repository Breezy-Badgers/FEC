const redux = require("redux");
const axios = require("axios");
const ratings = require("../../actions/RatingActions/getProductMeta.js");
const getReviews = id => {
  return dispatch => {
    return axios
      .get(`http://18.223.1.30/reviews/${id}/meta`)
      .then(({ data }) => {
        dispatch(ratings(data.results));
      })
      .catch(error => console.error(error));
  };
};

module.exports = getReviews;
