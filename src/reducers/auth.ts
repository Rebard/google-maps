import { Reducer } from 'redux';
import { SET_IS_LOGGED } from 'constants/actionTypes';
import { isValidCredentials } from 'utils/validation';

export interface AuthState {
  isLogged: boolean;
};

export interface Creds {
  login: string;
  password: string;
};

const credsJson: string | null = localStorage.getItem('creds');
const creds: Creds | null = credsJson ? JSON.parse(credsJson) : null;

const initialState: AuthState = {
  isLogged: creds ? isValidCredentials(creds.login, creds.password) : false,
};

const auth: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGGED:
      return {
        ...state,
        isLogged: action.payload,
      };
    default: return state;
  }
};

export default auth;