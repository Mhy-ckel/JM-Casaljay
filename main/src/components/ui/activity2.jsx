import { useState } from "react";
import "./activity2.css";

const Activity2 = () => {
  const [input, setInput] = useState("");
  const [lineIndex, setLineIndex] = useState(-1);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [finished, setFinished] = useState(false);

  const lines = [
    "PAGSUBOK",
    "PAGBANGON",
    "PAG-IBIG",
    "PAG-ASA"
  ];

  const handleEnter = () => {
    if (finished) return;


    // match input
    if (input.trim().toLowerCase() !== "habang may buhay may") {
      setError("ERROR");
      setText("");
      setLineIndex(-1);
      return;
    }



    setError("");


    
    const nextIndex = lineIndex + 1;


    // show inside text word
    if (nextIndex < lines.length) {
      setLineIndex(nextIndex);
      setText(lines[nextIndex]);

    } else {
      setText("Amen");
    }
  };


  // reset
  const handleReset = () => {
    setInput("");
    setLineIndex(-1);
    setText("");
    setError("");
    setFinished(false);
  };



  return (
    <div className="asa">
      <h1 className="asa1">PAG-ASA</h1>

      <input
        className="asa2"
        type="text" placeholder="Enter: habang may buhay may"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}


      // allow to enter button
        onKeyDown={(e) => {
          if (e.key === "Enter") handleEnter();
        }}
      />


      {/* enter button */}
      <button onClick={handleEnter} className="asa3">
        Enter
      </button>

      {/* reset button */} 
      <button onClick={handleReset} className="asa3">
        Reset
      </button>


       {/* show text */} 
      <p className="asa4">
        {text && `${text}`}
      </p>


      {/* show error */} 
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Activity2;