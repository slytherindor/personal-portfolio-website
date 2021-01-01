import {Button, Container, createStyles, TextField} from '@material-ui/core';
import {makeStyles, Theme} from '@material-ui/core/styles';
import * as React from 'react';
import {ChangeEvent, FormEvent} from 'react';

const useStyles = makeStyles((theme: Theme) =>
  /*
  root: {
      '& > *': {.. }
      }
  Will compile to:
  root:* {
  }
  This is LESS.
  * */
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  })
);

export default function LoginForm() {
  const performLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      body: new URLSearchParams({email: email, password: password}),
    };
    fetch('/login', options)
      .then(response => {
        console.log(response.status);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const classes = useStyles();
  function updateEmailValue(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmail(e.target.value);
  }
  function updatePasswordValue(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setPassword(e.target.value);
  }
  return (
    <Container>
      <form
        className={classes.root}
        noValidate={true}
        autoComplete={'off'}
        onSubmit={performLogin}
      >
        <div>
          <TextField
            value={email}
            variant={'outlined'}
            required
            type={'email'}
            label={'Email'}
            onChange={updateEmailValue}
          />
        </div>
        <div>
          <TextField
            value={password}
            variant={'outlined'}
            required
            type={'password'}
            label={'Password'}
            onChange={updatePasswordValue}
          />
        </div>
        <Button type={'submit'} color={'secondary'}>
          Login
        </Button>
      </form>
    </Container>
  );
}
