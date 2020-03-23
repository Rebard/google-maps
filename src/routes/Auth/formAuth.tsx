import React, { FunctionComponent, memo, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface IPropsFormAuth {
  handleSubmit?: Function['prototype']
};

const FormAuth: FunctionComponent<IPropsFormAuth> = ({ handleSubmit }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  const handleSubmitForm = (e: React.FormEvent): void => {
    e.preventDefault();
    handleSubmit(login, password);
  }
  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">Sign in</Typography>
      Login/Password: test/test
      <form className={classes.form} noValidate onSubmit={handleSubmitForm}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Login"
          name="login"
          value={login}
          onChange={e => setLogin(e.target.value)}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default memo(FormAuth);