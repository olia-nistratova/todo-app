import React, { createContext } from 'react';

import useLocalStorage from './hooks/useLocalStorage';
import todosReducer from './reducer';

export const TodosContext = createContext();

// I usually create a separate folder named 'contexts' and put named files there, FE: todoes.context.js.
// But here is just one file, so I've decided to put it on root folder
export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorage(
    'todos',
    todosReducer
  );

  return (
    <TodosContext.Provider value={{todos, dispatch}}>
      {props.children}
    </TodosContext.Provider>
  );
}
