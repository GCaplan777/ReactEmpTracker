import React from "react";

function InputForm(props) {
  return (
    <form>
      <div className="form-group">
        <label for="formGroupExampleInput2">Search Employees</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Search"
        />
      </div>
    </form>
  );
}

export default InputForm;
