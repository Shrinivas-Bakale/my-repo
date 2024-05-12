import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

export default function TextUtils(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const upperCase = (event) => {
    event.preventDefault();
    setText(text.toUpperCase());
  };

  const lowerCase = (event) => {
    event.preventDefault();
    setText(text.toLowerCase());
  };

  const handleCopy = () => {
    // console.log('Copyy')
    let text = document.getElementById("tarea");
    text.select();
    text.setSelectionRange(0, 9999); 
    navigator.clipboard.writeText(text.value);
  };

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  console.log(props.mode);

  // const camelCase = (word) => {
  //   const lower = word.toLowerCase();
  //   return lower.charAt(0).toUpperCase() + lower.slice(1);
  //  }

  return (
    <>
      
        <div>
          
          <div
            id="alert-1"
            className="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div className="ms-3 text-sm font-medium">{props.alert}</div>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
              data-dismiss-target="#alert-1"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>

          <div
            className={`flex flex-col items-start m-4 text-${
              props.mode === "gray-900" ? "white" : "black"
            }`}
          >
            <h1 className="font-bold text-2xl">Enter text to analyze below</h1>
            <p>Ill add anything here</p>
            <textarea
              name=""
              id="tarea"
              cols="80"
              rows="10"
              className={`border-2 border-gray-400 my-4 bg-${props.mode} text-${
                props.mode === "gray-900" ? "white" : "black"
              } `}
              value={text}
              onChange={handleChange}
            ></textarea>

            <div className="buttons flex gap-5">
              <button
                className="bg-blue-600 py-1 px-3 text-white rounded-md"
                onClick={upperCase}
              >
                Convert to Uppercase
              </button>
              <button
                className="bg-blue-600 py-1 px-3 text-white rounded-md"
                onClick={lowerCase}
              >
                Convert to Lowercase
              </button>
              <button
                className="bg-blue-600 py-1 px-3 text-white rounded-md"
                onClick={() => {
                  setText("");
                }}
              >
                Clear Text
              </button>
              <button
                className="bg-blue-600 py-1 px-3 text-white rounded-md"
                onClick={handleCopy}
              >
                Copy Text
              </button>
              <button
                className="bg-blue-600 py-1 px-3 text-white rounded-md"
                onClick={handleSpaces}
              >
                Remove Extra Spaces
              </button>
            </div>

            <div className="flex flex-col gap-2 my-4">
              <h2 className="font-semibold text-xl">Your Text Summary</h2>
              <p>
                {" "}
                {text.split(" ").filter((element)=>{return element.length!=0}).length} Words and {text.length} Characters
              </p>
            </div>

            <div className="flex flex-col items-start ">
              <h2 className="font-semibold text-2xl">Preview</h2>
              <div className="border-2 border-gray-400 px-5 py-2 my-4">
                <p>{text.length > 0 ? text : "Enter Something to preview"}</p>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
