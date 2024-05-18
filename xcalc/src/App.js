import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputs, setinputs] = useState("");
  const [result, setResult] = useState("");

  const Handleclick = (e) => {
    setinputs((prev) => prev + e);
  };

  const Handleclear = () => {
    setinputs("");
    setResult("");
  };

  const HandleEvaluate = () => {
    if (inputs.length == 0) {
      setResult("Error");
    } else {
      const answer = eval(inputs);
      setResult(answer);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="inner">
          <div style={{ margin: "30px" }}>
            <h1> calculator </h1>
            <input value={inputs} type="text" />
            <div className="answer"> {result}</div>
          </div>

          <div className="buttons">
            <button onClick={() => Handleclick("7")}>7</button>
            <button onClick={() => Handleclick("8")}>8</button>
            <button onClick={() => Handleclick("9")}>9</button>
            <button onClick={() => Handleclick("+")}>+</button>
            <button onClick={() => Handleclick("4")}>4</button>
            <button onClick={() => Handleclick("5")}>5</button>
            <button onClick={() => Handleclick("6")}>6</button>
            <button onClick={() => Handleclick("-")}>-</button>
            <button onClick={() => Handleclick("1")}>1</button>
            <button onClick={() => Handleclick("2")}>2</button>
            <button onClick={() => Handleclick("3")}>3</button>
            <button onClick={() => Handleclick("*")}>*</button>
            <button onClick={Handleclear}>c</button>
            <button onClick={() => Handleclick("0")}>0</button>
            <button onClick={HandleEvaluate}>=</button>
            <button onClick={() => Handleclick("/")}>/</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
