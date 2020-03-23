import { ICoordinates } from 'interfaces';

const CREDENTIALS = [
  { login: 'test', password: 'test' },
];

export const isValidCredentials = (login: string, password: string): boolean => {
  const isLogged = CREDENTIALS.some(creds => creds.login === login && creds.password === password);
  return isLogged;
};

export const isValidCoords = ({ lat, lng }: ICoordinates): boolean => {
  const isValidLat = typeof lat === 'number' && lat > -90 && lat < 90;
  const isValidLng = typeof lng === 'number' && lng > -180 && lng < 180;
  return isValidLat && isValidLng;
};