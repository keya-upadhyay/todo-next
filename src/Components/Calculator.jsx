import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const [input2, setInput2] = useState("");

  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");

  function handleClick(value) {
    setInput(value);
  }

  function handleClick2(value) {
    setInput2(value);
  }

  function handleClear() {
    setInput("");
  }

  function handleOperator(value) {
    setOperator(value);
  }

  function handleCalc() {
    let a = input;
    let b = input2;

    if (operator === "+") {
      setResult(a + b);
    } else if (operator === "-") {
      setResult(a - b);
    } else if (operator === "*") {
      setResult(a * b);
    } else if (operator === "/") {
      setResult(a / b);
    } else {
      setResult("Error");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-72 p-4 rounded-lg shadow-lg">
        <input
          type="text"
          className="w-full h-12 text-right text-2xl bg-gray-800 text-white border border-gray-700 rounded mb-4 p-2 mr-4"
          placeholder="0"
          id="display"
          value={input}
        />

        <input
          type="text"
          className="w-full h-12 text-right text-2xl bg-gray-800 text-white border border-gray-700 rounded mb-4 p-2"
          placeholder="0"
          id="display2"
          value={input2}
        />

        <div className="grid grid-cols-1 gap-2">
          <button
            className="bg-zinc-800 text-white p-4 rounded"
            onClick={() => handleClick("7")}
          >
            7
          </button>

          <button
            className="bg-zinc-800 text-white p-4 rounded"
            onClick={() => handleClick2("8")}
          >
            8
          </button>

          <button
            className="bg-zinc-800 text-white p-4 rounded"
            onClick={() => handleClick("9")}
          >
            9
          </button>

          <button
            className="bg-zinc-600 text-white p-4 rounded"
            onClick={() => handleOperator("/")}
          >
            /
          </button>

          <button
            className="bg-zinc-800 text-white p-4 rounded"
            onClick={() => handleClick("4")}
          >
            4
          </button>

          <button
            className="bg-zinc-800 text-white p-4 rounded"
            onClick={() => handleClick("5")}
          >
            5
          </button>

          <button
            className="bg-zinc-800 text-white p-4 rounded"
            onClick={() => handleClick("6")}
          >
            6
          </button>

          <button
            className="bg-zinc-600 text-white p-4 rounded"
            onClick={() => handleOperator("*")}
          >
            *
          </button>

          <button
            className="bg-zinc-800 text-white p-4 rounded"
            onClick={() => handleClick("1")}
          >
            1
          </button>

          <button
            className="bg-zinc-800 text-white p-4 rounded"
            onClick={() => handleClick("2")}
          >
            2
          </button>

          <button
            className="bg-zinc-800 text-white p-4 rounded"
            onClick={() => handleClick("3")}
          >
            3
          </button>

          <button
            className="bg-zinc-600 text-white p-4 rounded"
            onClick={() => handleOperator("-")}
          >
            -
          </button>

          <button
            className="bg-zinc-800 text-white p-4 rounded"
            onClick={() => handleClick("0")}
          >
            0
          </button>

          <button
            className="bg-zinc-800 text-white p-4 rounded"
            onClick={() => handleClear()}
          >
            C
          </button>

          <button
            className="bg-zinc-800 text-white p-4 rounded"
            onClick={() => handleCalc("=")}
          >
            =
          </button>

          <button
            className="bg-zinc-600 text-white p-4 rounded"
            onClick={() => handleOperator("+")}
          >
            +
          </button>
        </div>

        <div className="mt-4 text-2xl text-white">
          {input} {operator} {input2} {result}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
