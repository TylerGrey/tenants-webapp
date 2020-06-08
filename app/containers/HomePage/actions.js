import { SET_MAP_CENTER } from './constants';

/**
 * 홈 지도 센터 변경
 *
 * @param  {string} center 위도, 경도 구성의 JSON
 *
 * @return {object} An action object with a type of SET_MAP_CENTER
 */
export function setMapCenter(center) {
  return {
    type: SET_MAP_CENTER,
    center,
  };
}
