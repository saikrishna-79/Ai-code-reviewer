import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import Editor from "react-simple-code-editor";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; 
import "./App.css";

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  const [review, setReview] = useState("");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

async function ReviewCode() {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/ai/get-review`, // make sure backend route matches
      { code }
    );
    console.log("API Base URL:", import.meta.env.VITE_API_URL);
    setReview(response.data.review);
  } catch (error) {
    console.error("Error fetching review:", error);
  }
}



  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={(code) =>
                Prism.highlight(code, Prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira Code", "Fira Mono", monospace',
                fontSize: 15,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div onClick={ReviewCode} className="review">Review</div>
        </div>
        <div className="right">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </ReactMarkdown>
        </div>
      </main>
    </>
  );
}

export default App;
