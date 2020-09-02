import {combineReducers} from 'redux';
import leads from './leads';
import errors from './errors';
import messages from './messages'
import auth from './auth'

// these are passed to the component as the same props
export default combineReducers({
    leads,
    errors,
    messages,
    auth
})