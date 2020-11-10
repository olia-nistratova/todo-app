import { useState } from 'react';

const useInput = (initialValue = '') => {
  const [inputValue, setInputValue] = useState(initialValue);
  
  const onChangeInput = ({ target: { value }}) => setInputValue(value);
  const onClearInput = () => setInputValue('');

  return [inputValue, onChangeInput, onClearInput];
};

export default useInput;
