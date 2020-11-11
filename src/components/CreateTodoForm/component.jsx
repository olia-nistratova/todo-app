import React, { useContext } from 'react';

import { TodosContext } from '../../context';
import { ADD_TODO } from '../../actions';
import TodoForm from '../TodoForm';

const CreateTodoForm = () => {
  const { dispatch } = useContext(TodosContext);
  
  const onSubmitForm = (task) => {
    dispatch({ type: ADD_TODO, task });
  }

  return (
    <TodoForm onSubmit={onSubmitForm} />
  );
}

export default CreateTodoForm;
