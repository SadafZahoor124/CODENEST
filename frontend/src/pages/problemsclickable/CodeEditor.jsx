import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import "./Editor.css";

function CodeEditor() {
  const { title } = useParams();

  const [code, setCode] = useState(`function solution() {}`);

  const handleSubmit = () => {
    console.log("Submitted Code:", code);
    alert("Code Submitted Successfully");
  };

  return (
    <div className="editor-container">
      <div className="problem-section">
        <h2>{title}</h2>
        <p>
          Solve the given problem using your logic.
        </p>

        <h4>Example:</h4>
        <p>Input: [2,7,11,15]</p>
        <p>Output: [0,1]</p>
        <h4>Constranits:</h4>
        <ul>
          <li>Array lenght greater than 1 </li>
          <li>Use efficient logic</li>
        </ul>
      </div>
      <div className="editor-section">
        <Editor 
          // height="80hv"
          defaultLanguage="javascript"
          defaultValue={code}
          theme="vs-dark"
          onChange={(value) => setCode(value)}
        />

        <button onClick={handleSubmit}>
          Submit Code
        </button>
      </div>

    </div>
  );
}

export default CodeEditor;