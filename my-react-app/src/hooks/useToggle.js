import { useState } from 'react';

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((v) => !v);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const set = (newValue) => setValue(newValue);

  return [value, { toggle, setTrue, setFalse, set }];
}

export default useToggle;