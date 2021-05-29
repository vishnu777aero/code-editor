import "./App.css";
import { Editor } from "./Editor";

function App() {
  return (
    <>
      <div className="pane top-pane">
        <Editor mode="html" name="HTML" />
        <Editor mode="javascript" name="JS" />
        <Editor mode="css" name="CSS" />
      </div>
      <div className="bottom-pane">
        <iframe srcDoc="www.google.com" title="code-output"></iframe>
      </div>
    </>
  );
}

export default App;
