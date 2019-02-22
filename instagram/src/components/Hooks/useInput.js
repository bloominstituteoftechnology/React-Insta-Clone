import { useState } from "react";

export default initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    changeHandler: event => {
      setValue(event.target.value);
    },
    clear: () => {
      setValue("");
    },
  };
};
