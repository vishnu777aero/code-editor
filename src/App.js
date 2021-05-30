import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { Editor } from "./Editor";
import { useLocalStorage } from "./_hooks/useLocalStorage";

function App() {
  const [htmlValue, setHtmlValue] = useLocalStorage("html", "");
  const [jsValue, setJsValue] = useLocalStorage("js", "");
  const [cssValue, setCssValue] = useLocalStorage("css", "");

  const [srcDoc, setSrcDoc] = useState("<html></html");

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setSrcDoc(
        `<html>
          <head>
          <style>${cssValue}</style>
          </head>
          <body>
            ${htmlValue}
            <script>${jsValue}</script>
          </body>
        </html>`
      );
    }, 500);

    return () => clearTimeout(delayTimer);
  }, [htmlValue, jsValue, cssValue]);

  const onChangeEditor = (editor, data, value) => {
    const { mode } = editor.options;

    if (mode === "xml") {
      setHtmlValue(value);
    } else if (mode === "javascript") {
      setJsValue(value);
    } else {
      setCssValue(value);
    }
  };

  const onRefresh = () => {
    setHtmlValue("");
    setJsValue("");
    setCssValue("");
  };

  const heading = (
    <div className="heading">
      <h1>Code Editor</h1>
      <button onClick={onRefresh}>Refresh</button>
    </div>
  );

  return (
    <>
      {heading}
      <div className="top-pane">
        <Editor
          mode="xml"
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
        <iframe srcDoc={srcDoc} title="code-output"></iframe>
      </div>
    </>
  );
}

export default App;
