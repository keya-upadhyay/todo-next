"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");

  function handleClick(value) {
    setInput(input + value);
  }

  function handleClick2(value) {
    setInput2(input2 + value);
  }

  function handleClear() {
    setInput("");
    setInput2("");
    setResult(0);
  }
  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleChange2(e) {
    setInput2(e.target.value);
  }

  function handleOperator(value) {
    if (input) setOperator(value);
  }

  function handleCalc() {
    let a = Number(input);
    let b = Number(input2);

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
      <div className=" p-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-2">
          <div>
            <input
              type="text"
              className="w-full h-12 text-right text-2xl bg-gray-800 text-white border border-gray-700 rounded mb-4 p-2 mr-4"
              id="display"
              onChange={handleChange}
              value={input}
            />

            <input
              type="text"
              className="w-full h-12 text-right text-2xl bg-gray-800 text-white border border-gray-700 rounded mb-4 p-2"
              id="display2"
              onChange={handleChange2}
              value={input2}
            />
          </div>

          <button className="p-3">Clear</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            className="bg-zinc-800 text-white p-4 rounded"
            onClick={() => handleClear()}
          >
            C
          </button>
          <button
            className={`bg-zinc-600 text-white p-4 rounded ${
              input && input2
                ? "cursor-pointer "
                : "cursor-not-allowed bg-zinc-800"
            }`}
            onClick={() => handleCalc("=")}
          >
            =
          </button>

          <button
            className={`bg-zinc-600 text-white p-4 rounded ${
              input ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            onClick={() => handleOperator("+")}
          >
            +
          </button>
          <button
            className={`bg-zinc-600 text-white p-4 rounded ${
              input ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            onClick={() => handleOperator("-")}
          >
            -
          </button>
          <button
            className={`bg-zinc-600 text-white p-4 rounded ${
              input ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            onClick={() => handleOperator("/")}
          >
            /
          </button>
          <button
            className={`bg-zinc-600 text-white p-4 rounded ${
              input ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            onClick={() => handleOperator("*")}
          >
            *
          </button>
        </div>

        <div className="mt-4 text-2xl text-white">
          {input} {operator} {input2} = {result}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
