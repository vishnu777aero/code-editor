import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import { Controlled as ControlledEditor } from "react-codemirror2";

export const Editor = ({ value, onBeforeChange, className, mode }) => {
  const options = {
    mode,
    theme: "material",
    lineNumbers: true,
  };

  return (
    <ControlledEditor
      value={value}
      options={options}
      className={className}
      onBeforeChange={onBeforeChange}
    />
  );
};
