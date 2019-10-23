import postToCartSuccess from '../../actions/overview-actions/productInfo.actions.postToCart.js';
import axios from 'axios';

const apiUrl = 'http://18.223.1.30';

//where should I write this logic for creating a new session?
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const session = getRandomIntInclusive(1, 100000);

const postToCart = (sessionId, productId) => {
  return dispatch => {
    return axios
      .post(`${apiUrl}/cart`, {
        user_session: sessionId,
        product_id: productId
      })
      .then(res => {
        console.log(res);
        dispatch(postToCartSuccess(res.data));
      })
      .catch(err => {
        console.log('error posting to cart', err);
        throw err;
      });
  };
};

export default postToCart;
