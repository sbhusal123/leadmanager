import axios from 'axios';
import { returnErrors } from './messages'

import {USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS} from './types'

// CHECK TOKEN AND LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({type: USER_LOADING});

    // Get token from state
    const token = getState().auth.token;

    // Headers 
    const config = {
        headres: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to headres config
    if(token){
        config.headres['Authorization'] = `Token ${token}`;
    }

    axios.get('/api/auth/user', config)
    .then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    }).catch(err => {
        console.log(err);
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
    });
}

// LOGIN USER
export const login = (username, password) => (dispatch) => {

    // Headers 
    const config = {
        headres: {
            'Content-Type': 'application/json'
        }
    }

    // Request Body
    const body = JSON.stringify();
    console.log(body);

    axios.post('/api/auth/login', {"username":username, "password":password}, config)
    .then((res) => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    }).catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: LOGIN_FAIL
        });
    });
};