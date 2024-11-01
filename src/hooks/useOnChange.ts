import { useState } from "react";

type OnChangeTypes = {
  value: string;
  onChange: (e: any) => void;
};

const useOnChange = (): OnChangeTypes => {
  const [value, setValue] = useState('Yerevan');

  const onChange = (e: any) => setValue(e.target.value)

  return {
    value,
    onChange,
  };
};

export default useOnChange;
