import React, { useContext } from 'react';

import { DispatchContext } from '../../context';
import { ADD_TODO } from '../../actions';
import TodoForm from '../TodoForm';

const CreateTodoForm = () => {
  const dispatch = useContext(DispatchContext);
  
  const onSubmitForm = (task) => {
    dispatch({ type: ADD_TODO, task });
  }

  return (
    <TodoForm onSubmit={onSubmitForm} />
  );
}

export default CreateTodoForm;
