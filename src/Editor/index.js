import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import { Controlled as ControlledEditor } from "react-codemirror2";

export const Editor = ({ value, onBeforeChange, className, mode, name }) => {
  const options = {
    mode,
    theme: "material",
    lineNumbers: true,
  };

  return (
    <div className="editor">
      <div className="header">
        <span>{name}</span>
        <button>EC</button>
      </div>
      <ControlledEditor
        value={value}
        options={options}
        className={className}
        onBeforeChange={onBeforeChange}
      />
    </div>
  );
};
