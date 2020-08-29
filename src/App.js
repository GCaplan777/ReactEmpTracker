import React, { Component } from "react";
import Header from "./components/Header";
// import InputForm from "./components/InputForm";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import "./App.css";
import employees from "./employees.json";
// import { findRenderedComponentWithType } from "react-dom/test-utils";

// i want a list of employees with first name, last name, email, phone number, image, date of birth
// i want it listed in a table that I can sort
// i want a search bar so i can search and sort by name
// i need bootstrap
// i need a json file as my list
// Sort the table by at least one category

// Filter the users by at least one property.

class App extends Component {
  state = { employees };

  // receive data from search to setState each letter
  // render each letter

  handleInputChange = (event) => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <Header />
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              // id="formGroupExampleInput2"
              placeholder="Search"
              onChange={this.handleInputChange}
            />
          </div>
        </form>
        <table className="table table-hover">
          <TableHead />
          {this.state.employees.map((employee) => (
            <TableBody
              image={employee.image}
              name={employee.name}
              email={employee.email}
              role={employee.role}
              phone={employee.phone}
            />
          ))}
        </table>
      </div>
    );
  }
}

export default App;
