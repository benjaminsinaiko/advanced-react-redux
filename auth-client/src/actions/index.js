import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps);

    const userToken = response.data.token;
    dispatch({ type: AUTH_USER, payload: userToken });
    localStorage.setItem('token', userToken);
    callback();
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};
