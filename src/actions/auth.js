import { SET_IS_LOGGED } from 'constants/actionTypes';
import { isValidCredentials } from 'utils/validation';

export const signIn = (login, password) => {
  const isLogged = isValidCredentials(login, password);
  if (isLogged) {
    localStorage.setItem('creds', JSON.stringify({ login, password }));
  }
  return {
    type: SET_IS_LOGGED,
    payload: isLogged,
  };
};