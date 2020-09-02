import { GET_MESSAGES, CREATE_MESSAGE } from '../actions/types';

const initialStte = {}

export default function(state=initialStte, action){
    switch(action.type){
        case GET_MESSAGES:
            return action.payload
        case CREATE_MESSAGE:
                return (state = action.payload)
        default:
            return state;
    }
}