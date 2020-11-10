  import { useReducer, useEffect } from 'react';

const useLocalStorageReducer = (key, reducer) => {
  const [state, dispatch] = useReducer(reducer, [], () => {
    const value = JSON.parse(window.localStorage.getItem(key)) || [];
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

export default useLocalStorageReducer;