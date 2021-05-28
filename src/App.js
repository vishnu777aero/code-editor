import "./App.css";
import { Editor } from "./Editor";

function App() {
  return (
    <>
      <div className="pane top-pane">
        <Editor />
        <Editor />
        <Editor />
      </div>
      <div className="bottom-pane">
        <iframe srcDoc="www.google.com" title="code-output"></iframe>
      </div>
    </>
  );
}

export default App;
