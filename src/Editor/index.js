import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "./index.css";

import { Controlled as ControlledEditor } from "react-codemirror2";
import { useRef } from "react";
import { useState } from "react";

export const Editor = ({ value, onBeforeChange, className, mode, name }) => {
  const options = {
    mode,
    theme: "material",
    lineNumbers: true,
  };

  const editorRef = useRef();
  const [resizeButtonText, setResizeButtonText] = useState("collapse");

  const onResize = (event) => {
    editorRef.current.classList.toggle("collapse");
    const buttonText =
      event.target.innerHTML === "collapse" ? "expand" : "collapse";
    setResizeButtonText(buttonText);
  };

  const header = (
    <div className="header">
      <span>{name}</span>
      <button onClick={onResize}>{resizeButtonText}</button>
    </div>
  );

  return (
    <div ref={editorRef} className="editor">
      {header}
      <ControlledEditor
        value={value}
        options={options}
        className={className}
        onBeforeChange={onBeforeChange}
      />
    </div>
  );
};
