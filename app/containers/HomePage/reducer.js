import produce from 'immer';
import { SET_MAP_CENTER } from './constants';

// The initial state of the App
export const initialState = {
  center: {
    lat: 37.477117,
    lng: 126.9612293,
  },
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_MAP_CENTER:
        draft.center.lat = action.center.lat;
        draft.center.lng = action.center.lng;
        break;
    }
  });

export default homeReducer;
