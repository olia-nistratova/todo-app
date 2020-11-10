import React, { useContext, memo } from 'react';
import { ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/DeleteSweep';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineIcon from '@material-ui/icons/CheckBoxOutlineBlank';

import { DispatchContext } from '../../context';
import { REMOVE_TODO, TOGGLE_TODO, EDIT_TODO } from '../../actions';
import useToggle from '../../hooks/useToggle';
import TodoForm from '../TodoForm';

import styles from './styles';
const useStyles = makeStyles(theme => (styles));

const TodoItem = ({ id, task, completed }) => {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggle(false);

  const onCompleteTodo = () => {
    dispatch({ type: TOGGLE_TODO, id });
  };
  const onDeleteTodo = () => {
    dispatch({ type: REMOVE_TODO, id });
  };
  const onEditForm = (task) => {
    dispatch({ type: EDIT_TODO, id, task });
    toggleIsEditing();
  };

  if (isEditing) {
    return (
      <ListItem className={classes.root}>
        <TodoForm
          task={task}
          onSubmit={onEditForm}
        />
      </ListItem>
    );
  }

  return (
    <ListItem className={classes.root} onClick={onCompleteTodo}>
      <Typography className={completed ? classes.completedTask : ''}>
        {task}
      </Typography>
      <div>
        {completed 
          ? <CheckBoxIcon className={classes.iconCheckbox}/>
          : <CheckBoxOutlineIcon className={classes.iconCheckbox}/>
        }
        <CreateIcon
          className={classes.iconEdit}
          onClick={toggleIsEditing}
        />
        <DeleteIcon
          className={classes.iconDelete}
          onClick={onDeleteTodo}
        />
      </div>
    </ListItem>
  );
}

export default memo(TodoItem);
