import { useState, useEffect } from "react";
import "./activity_2.css";

const Activity_2 = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");


  const [nameMsg, setNameMsg] = useState("");
  const [ageMsg, setAgeMsg] = useState("");
  const [msgStatus, setMsgStatus] = useState("");

  const [submittedData, setSubmittedData] = useState(null);


  useEffect(() => {
    if (name === "") {
      setNameMsg("Please enter your name");
    }
  }, [name]);


  useEffect(() => {
    if (age === "") {
      setAgeMsg("Please enter your age");
    }
  }, [age]);


  useEffect(() => {
    if (message === "") {
      setMsgStatus("Enter message");
    }
  }, [message]);


const handleSubmit = (e) => {
  e.preventDefault();

  if (name === "") {
    alert("Please fill up!");
  } else if (age === "") {
    alert("Please enter your age!");
  } else if (message === "") {
    alert("Please enter your message!");
  } else {
    setSubmittedData({
      name,
      age,
      message,
      nameMsg,
      ageMsg,
      msgStatus,
    });

    setName("");
    setAge("");
    setMessage("");
  }
};

  return (
    <div className="con">
      <h1 className="text1">Information</h1>

      <form onSubmit={handleSubmit}>

        <div className="text2">
          <h3 className="3">Name</h3>
          <input className="text3"
            type="text" placeholder='e.g. John Doe'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="text2">
          <h3 className="3">Age</h3>
          <input className="text3"
            type="number" placeholder='e.g. 99'
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>

        <div className="text2">
          <h3 className="hh3">Message</h3>
          <textarea className="text3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter message"
            rows="4"
            cols="30"
          />
        </div>

        <button className="mit" type="submit" >Submit</button>
      </form>

      {submittedData && (
        <div className="result">
          <h2>Data</h2>
          <p className="msg">{submittedData.name}</p>
          <p className="msg">{submittedData.age}</p>
          <p className="msg">{submittedData.message}</p>
        </div>
      )}
    </div>
  );
};

export default Activity_2; 