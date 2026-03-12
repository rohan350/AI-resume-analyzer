import React, { useState } from "react";
import axios from "axios";

function UploadResume() {

  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const analyzeResume = async () => {

    const response = await axios.post(
      "http://localhost:5000/api/resume/upload",
      { text }
    );

    setResult(response.data);
  };

  return (
    <div>

      <h2>Upload Resume Text</h2>

      <textarea
        rows="10"
        cols="60"
        onChange={(e) => setText(e.target.value)}
      />

      <br />

      <button onClick={analyzeResume}>Analyze</button>

      {result && (
        <div>

          <h3>Skills Found</h3>
          <ul>
            {result.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <p>{result.suggestion}</p>

        </div>
      )}

    </div>
  );
}

export default UploadResume;