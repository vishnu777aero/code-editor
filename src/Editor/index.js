import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import { Controlled as ControlledEditor } from "react-codemirror2";

export const Editor = () => {
  return (
    <ControlledEditor
      value="<h1>I ♥ react-codemirror2</h1>"
      options={{
        mode: "xml",
        theme: "material",
        lineNumbers: true,
      }}
      onBeforeChange={(editor, data, value) => {
        console.log(editor, data, value);
      }}
      className="editor"
    />
  );
};
