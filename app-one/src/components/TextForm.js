import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleOnChange = (e) => {
    // console.log("On Change");
    setText(e.target.value);
  };

  const handleUpper = (e) => {
    // console.log("Upper Case button clicked")
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLower = (e) => {
    // console.log("Lower Case but`ton clicked")
    const newText = text.toLowerCase();
    setText(newText);
  };

  return (
    <>
      <div>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpper}>
          {" "}
          Convert to UpperCase{" "}
        </button>
        <button className="btn btn-primary mx-5" onClick={handleLower}>
          {" "}
          Convert to LowerCase{" "}
        </button>
      </div>
      <div className="container my-4">
        <h2>Your Text Summary: </h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}
