import {FETCHING, SUCCESS, ERROR} from '../actions/index';

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCHING:
        return {
          ...state,
          fetching: true,
          characters: [],
          error: null
        }
      case SUCCESS:
      
        return {
          ...state,
          fetching: false,
          characters: action.payload,
          error: null
        }
      case ERROR:
        return {
          ...state,
          fetching: false,
          characters: [],
          error: action.payload
        }
      
    
    default:
      return state;
  }
};
