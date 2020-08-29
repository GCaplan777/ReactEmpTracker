import React, { Component } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Table from "./components/Table";
import "./App.css";
import employees from "./employees.json";

// i want a list of employees with first name, last name, email, phone number, image, date of birth
// i want it listed in a table that I can sort
// i want a search bar so i can search and sort by name
// i need bootstrap
// i need a json file as my list

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hi, I'm a React App</h1>
        <Header />
        <InputForm />
        <Table />
      </div>
    );
  }
}

export default App;
