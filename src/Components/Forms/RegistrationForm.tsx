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

export default function RegistrationForm() {
  const performSignup = (e: FormEvent<HTMLFormElement>) => {
    /*
    Prevent from reloading the whole webpage
    * */
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        // eslint-disable-next-line
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        firstName: firstName,
        lastName: lastName,
      }),
    };
    fetch('/signup', options)
      .then(response => {
        console.log(response.status);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const classes = useStyles();
  function updateFormData(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    switch (e.target.id) {
      case 'firstNameField':
        setFirstName(e.target.value);
        break;
      case 'lastNameField':
        setLastName(e.target.value);
        break;
      case 'emailField':
        setEmail(e.target.value);
        break;
      case 'passwordField':
        setPassword(e.target.value);
        break;
      case 'confirmPasswordField':
        setConfirmPassword(e.target.value);
        break;
    }
  }
  return (
    <Container>
      <form
        className={classes.root}
        noValidate={true}
        autoComplete={'off'}
        onSubmit={performSignup}
      >
        <div>
          <TextField
            id={'firstNameField'}
            value={firstName}
            variant={'outlined'}
            required
            label={'First name'}
            onChange={updateFormData}
          />
        </div>
        <div>
          <TextField
            id={'lastNameField'}
            value={lastName}
            variant={'outlined'}
            required
            label={'Last name'}
            onChange={updateFormData}
          />
        </div>
        <div>
          <TextField
            id={'emailField'}
            value={email}
            variant={'outlined'}
            required
            type={'email'}
            label={'Email'}
            onChange={updateFormData}
          />
        </div>
        <div>
          <TextField
            id={'passwordField'}
            value={password}
            variant={'outlined'}
            required
            type={'password'}
            label={'Password'}
            onChange={updateFormData}
          />
        </div>
        <div>
          <TextField
            id={'confirmPasswordField'}
            value={confirmPassword}
            variant={'outlined'}
            required
            type={'password'}
            label={'Confirm password'}
            onChange={updateFormData}
          />
        </div>
        <Button type={'submit'} color={'secondary'}>
          Register
        </Button>
      </form>
    </Container>
  );
}
