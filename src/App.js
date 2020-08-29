import React, { Component } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import "./App.css";
import employees from "./employees.json";

// i want a list of employees with first name, last name, email, phone number, image, date of birth
// i want it listed in a table that I can sort
// i want a search bar so i can search and sort by name
// i need bootstrap
// i need a json file as my list

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
