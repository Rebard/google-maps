import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import main, { MainState } from './main';
import auth, { AuthState } from './auth';

import history from 'utils/history';

export type AppState = {
  main: MainState;
  auth: AuthState;
};

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    router: connectRouter(history),
    main,
    auth,
    ...injectedReducers,
  });
};