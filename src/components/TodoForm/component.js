import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import useInput from '../../hooks/useInput';

// I've decided not to create separate file for just 2 styles
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '500px',
    width: '100%',
  },
  formInput: {
    width: '100%',
  }
}));

const TodoForm = ({ id, task, onSubmit }) => {
  const classes = useStyles();
  const [value, onChangeInput, onClearInput] = useInput(task);

  const onSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(value);
    onClearInput();
  }

  return (
    <form onSubmit={onSubmitForm} className={classes.root}>
      <TextField
        autoFocus
        value={value}
        onChange={onChangeInput}
        className={classes.formInput}
      />
    </form>
  );
}

export default TodoForm;
