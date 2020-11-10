import { ADD_TODO, EDIT_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

// I usually create a separate folder named 'reducers' and put named files there, FE: todoesReducer.js.
// But here is just one file, so I've decided to put it on root folder

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: new Date().valueOf(), task: action.task, completed: false }];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.task } : todo
      );
    default:
      return state;
  }
};

export default reducer;
