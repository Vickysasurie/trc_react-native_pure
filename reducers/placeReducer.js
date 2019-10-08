// placeReducer.js

import { ADD_PLACE } from '../actions/types';

const initialState = {
  //placeName: '',
  gallery: false
};

const placeReducer = (state = initialState, action) => {
    console.log("state @ reducer",action.payload)
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        gallery:action.payload
        // places: state.places.concat({
        //   key: Math.random(),
        //   value: action.payload
        //})
      };
    default:
      return state;
  }
}

export default placeReducer;