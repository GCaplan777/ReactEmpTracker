import React, { Component } from "react";
import Header from "./components/Header";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import "./App.css";
import employees from "./employees.json";

class App extends Component {
  state = { employees };

  handleInputChange = (event) => {
    console.log(event.target.value);
    console.log(employees);
    const newEmployees = employees.filter((employee) =>
      employee.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase().trim())
    );
    console.log(newEmployees);
    this.setState({ employees: newEmployees });
  };

  sortNameHandler = () => {
    console.log("hello");
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
              placeholder="Search"
              onChange={this.handleInputChange}
            />
          </div>
        </form>
        <table className="table table-hover">
          <TableHead sortNameHandler={this.sortNameHandler} />
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
