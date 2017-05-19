import * as types from './actionTypes';

export function initialMapZoom(zoom) {
  return { type: types.INITIAL_MAP_ZOOM_LEVEL, zoom};
}
