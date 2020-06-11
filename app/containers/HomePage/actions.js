import { SET_MAP_CENTER, SET_SELECTED_BLDG } from './constants';

/**
 * 홈 지도 센터 변경
 *
 * @param  {object} searchItem 위도, 경도 구성의 JSON
 *
 * @return {object} An action object with a type of SET_MAP_CENTER
 */
export function setMapCenter(searchItem) {
  return {
    type: SET_MAP_CENTER,
    searchItem,
  };
}

/**
 * 빌딩 선택
 *
 * @param  {object} bldg 위도, 경도 구성의 JSON
 *
 * @return {object} An action object with a type of SET_SELECTED_BLDG
 */
export function setSelectedBldg(selectedBldg) {
  return {
    type: SET_SELECTED_BLDG,
    selectedBldg,
  };
}
