import React, { useContext } from 'react';
import { List, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { TodosContext } from '../../context';
import TodoItem from '../TodoItem';

// I've decided not to create separate file for just 2 styles
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '500px',
    width: '100%',
    paddingTop: theme.spacing(4),
  },
  emptyTodos: {
    padding: theme.spacing(4),
  },
}));

const TodoList = () => {
  const classes = useStyles();
  const { todos } = useContext(TodosContext);

  if (!todos.length) {
    return (
      <Typography variant='h6' align='center' className={classes.emptyTodos}>
        Seems like you don't have any todos! Try to add one, or just relax...)
      </Typography>
    );
  }

  return (
    <List className={classes.root}>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  );
}

export default TodoList;
