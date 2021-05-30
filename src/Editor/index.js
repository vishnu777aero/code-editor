import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "./index.css";

import { Controlled as ControlledEditor } from "react-codemirror2";
import { useRef } from "react";
import { useState } from "react";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Editor = ({ value, onBeforeChange, className, mode, name }) => {
  const options = {
    mode,
    theme: "material",
    lineNumbers: true,
  };

  const editorRef = useRef();
  const [resizeState, setResizeState] = useState("collapse");

  const onResize = (event) => {
    editorRef.current.classList.toggle("collapse");
    setResizeState((prevState) =>
      prevState === "collapse" ? "expand" : "collapse"
    );
  };

  const resizeButtonIcon =
    resizeState === "collapse" ? (
      <FontAwesomeIcon icon={faCompressAlt} />
    ) : (
      <FontAwesomeIcon icon={faExpandAlt} />
    );

  const header = (
    <div className="header">
      <span>{name}</span>
      <div className="resize-button" onClick={onResize}>
        {resizeButtonIcon}
      </div>
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
