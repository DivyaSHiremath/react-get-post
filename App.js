import React, { useState } from "react";
import axios from "axios";

const App = () => {
  //get request
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  //post request
  const data = "hello";
  const postDataFromBackend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  //POST request-form
  const [formData, setformData] = useState("");
  const postFormFromBackend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formData,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  return (
    <div className="App">
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>
      <br></br>
      <button onClick={postDataFromBackend}>post Data</button>
      <p id="para"></p>
      <b></b>
      <form onSubmit={postFormFromBackend}>
        <input
          type="text"
          name="formData"
          value={formData}
          onChange={(e) => setformData(e.target.value)}
        ></input>
        <input type="submit" value="testform"></input>
      </form>
    </div>
  );
};
export default App;
