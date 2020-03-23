import React, { FunctionComponent, memo, useCallback } from 'react';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { signIn } from 'actions/auth';
import FormAuth from './formAuth';

const Auth: FunctionComponent<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback((login, password) => {
    dispatch(signIn(login, password));
    history.push('/main')
  }, [dispatch, history]);

  return (
    <Container component="main" maxWidth="xs">
      <FormAuth handleSubmit={handleSubmit} />
    </Container>
  );
};

export default memo(Auth);