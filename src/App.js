import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { Editor } from "./Editor";
import { useLocalStorage } from "./_hooks/useLocalStorage";
import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faTrash } from "@fortawesome/free-solid-svg-icons";

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
      <span className="title">
        <h1>Code Editor</h1>
        <FontAwesomeIcon icon={faCode} />
      </span>
      <FontAwesomeIcon
        className="trash-icon"
        icon={faTrash}
        onClick={onRefresh}
      />
    </div>
  );

  return (
    <>
      {heading}
      <div className="top-pane">
        <Editor
          mode="xml"
          name="HTML"
          icon={faHtml5}
          onBeforeChange={onChangeEditor}
          value={htmlValue}
        />
        <Editor
          mode="css"
          name="CSS"
          icon={faCss3Alt}
          onBeforeChange={onChangeEditor}
          value={cssValue}
        />
        <Editor
          mode="javascript"
          name="JS"
          icon={faJs}
          onBeforeChange={onChangeEditor}
          value={jsValue}
        />
      </div>
      <div className="bottom-pane">
        <iframe srcDoc={srcDoc} title="code-output"></iframe>
      </div>
    </>
  );
}

export default App;
