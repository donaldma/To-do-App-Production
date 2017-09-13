import { FETCH_ALL } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_ALL:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}