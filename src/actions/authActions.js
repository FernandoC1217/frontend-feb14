// import axios from "axios";
import api from "../API/index";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import cogoToast from "cogo-toast"

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  api
    .postRegister(userData)
    .then(res => {
      history.push("/dashboard");
      cogoToast.success("Gracias por registrarse");
    })
    .catch(err =>
      {dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }) 
      cogoToast.error('Error al registrase. Verifica los campos ');
    }
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  api
    .postLogin(userData)
    .then(res => {
      // Save to localStorage

      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      cogoToast.success("Inicio de sesión exitoso");
    })
    .catch(err =>
      {dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
      cogoToast.error('Error al iniciar sesión. Verifica los campos ');
    }
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
