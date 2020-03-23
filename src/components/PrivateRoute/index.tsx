import React, { memo } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from 'reducers';

interface StateProps {
  isLogged: boolean
}

const PrivateRoute = ({ ...props }) => {
  const { isLogged } = useSelector<AppState, StateProps>(state => state.auth);
  return isLogged ? <Route {...props} /> : <Redirect to="auth" />;
};

export default memo<RouteComponentProps>(PrivateRoute);