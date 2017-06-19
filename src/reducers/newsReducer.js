import {} from '../constants/actionTypes';
//import objectAssign from 'object-assign';
import initialState from './initialState';
export default function newsReducer(state = initialState.news, action) {
  switch (action.type) {
    // case SAVE_FUEL_SAVINGS:
    //   return objectAssign({}, state, {dateModified: action.dateModified});

    default:
      return state;
  }
}
