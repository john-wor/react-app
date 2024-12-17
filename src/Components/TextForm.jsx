import React, { useState } from "react";

function TextForm(props) {
  const handleUpclick = () => {
    savePreviousText(); // Save current text before making changes
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("convert to uppercase","sucess")
  };

  const handleLoclick = () => {
    savePreviousText(); // Save current text before making changes
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("convert to lowercase","sucess")
  };

  const clearText = () => {
    savePreviousText(); // Save current text before clearing
    setText("");
    props.showalert("clear the data","sucess")
  };

  const previousText = () => {
    if (history.length > 0) {
      setFuture([text, ...future]); // Save the current state to future
      setText(history[history.length - 1]); // Set the last state in history as the current text
      setHistory(history.slice(0, -1)); // Remove the last state from history
      props.showalert("previous the data","sucess")
    } else {
      console.log("No previous state available");
      props.showalert("No previous the data","sucess")
    }
  };

  const reviousText = () => {
    if (future.length > 0) {
      setHistory([...history, text]); // Save the current state to history
      setText(future[0]); // Set the first state in future as the current text
      setFuture(future.slice(1)); // Remove the first state from future
    } else {
      console.log("No future state available");
    }
  };

  const savePreviousText = () => {
    setHistory([...history, text]); // Save current text to history stack
    setFuture([]); // Clear future stack whenever a new change is made
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  const [history, setHistory] = useState([]); // Stack to store previous states
  const [future, setFuture] = useState([]); // Stack to store future states

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
          className={`form-control bg-transparent text-${props.mode ==='dark'?'light':'dark'}`}
          value={text}
          id="mybox"
          onChange={handleOnChange}
          rows="8"
        ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={previousText}>
          Previous Text
        </button>
        <button className="btn btn-primary mx-1" onClick={reviousText}>
          Restore Text
        </button>
      </div>
      <div className={`container my-3 text-${props.mode ==='dark'?'light':'dark'}`}>
        <h1 className={`text-${props.mode ==='dark'?'light':'dark'}`}>Your text summary</h1>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and{" "}
          {text.length} characters
        </p>
        <p>
          <b>
            {0.008 *
              text
                .trim()
                .split(/\s+/)
                .filter((word) => word !== "").length}{" "}
            Minutes read
          </b>
        </p>
        <h2>Preview</h2>
        <p>
          <b>{text.length > 0 ? text : "Nothing to preview!"}</b>
        </p>
      </div>
    </>
  );
}

export default TextForm;
