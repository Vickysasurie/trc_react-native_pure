// place.js

import { ADD_PLACE } from './types';

export const addPlace = name => {
  return {
    type: ADD_PLACE,
    payload: name
  }
}

// export const getPlace = name => {
//   return {
//     type: GET_PLACE,
//     payload
//   }
// }