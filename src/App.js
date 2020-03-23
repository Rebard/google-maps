import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import Main from 'routes/Main';
import Auth from 'routes/Auth'; 

const App = () => {
  const { isLogged } = useSelector(state => state.auth);

  return (
    <Switch>
      <PrivateRoute exact path="/main" component={Main} />
      {!isLogged && <Route exact path="/auth" component={Auth} />}
      <Redirect to={isLogged ? '/main' : '/auth'}/>
    </Switch>
  );
};

export default memo(App);
