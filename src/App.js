import { useState } from "react";
import "./App.css";
import { Editor } from "./Editor";

function App() {
  const [htmlValue, setHtmlValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  const [cssValue, setCssValue] = useState("");

  const onChangeEditor = (editor, data, value) => {
    const { mode } = editor.options;

    if (mode === "html") {
      setHtmlValue(value);
    } else if (mode === "javascript") {
      setJsValue(value);
    } else {
      setCssValue(value);
    }
  };

  return (
    <>
      <div className="pane top-pane">
        <Editor
          mode="html"
          name="HTML"
          onBeforeChange={onChangeEditor}
          value={htmlValue}
        />
        <Editor
          mode="javascript"
          name="JS"
          onBeforeChange={onChangeEditor}
          value={jsValue}
        />
        <Editor
          mode="css"
          name="CSS"
          onBeforeChange={onChangeEditor}
          value={cssValue}
        />
      </div>
      <div className="bottom-pane">
        <iframe srcDoc="www.google.com" title="code-output"></iframe>
      </div>
    </>
  );
}

export default App;
