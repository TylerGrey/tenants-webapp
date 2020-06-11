import produce from 'immer';
import { SET_MAP_CENTER, SET_SELECTED_BLDG } from './constants';

// The initial state of the App
export const initialState = {
  center: {
    lat: 37.477117,
    lng: 126.9612293,
  },
  selectedBldg: null,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_MAP_CENTER:
        draft.center.lat = action.searchItem.lat;
        draft.center.lng = action.searchItem.lng;
        draft.selectedBldg = {
          lat: action.searchItem.lat,
          lng: action.searchItem.lng,
          address: action.searchItem.address,
          roadAddress: action.searchItem.roadAddress,
        };
        break;
      case SET_SELECTED_BLDG:
        draft.selectedBldg = action.selectedBldg;
        break;
    }
  });

export default homeReducer;
