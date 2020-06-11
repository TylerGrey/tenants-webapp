/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectCenter = () =>
  createSelector(
    selectHome,
    homeState => homeState.center,
  );

const makeSelectSelectedBldg = () =>
  createSelector(
    selectHome,
    homeState => homeState.selectedBldg,
  );

export { selectHome, makeSelectCenter, makeSelectSelectedBldg };
