import React from "react";

function InputForm() {
  return (
    <form>
      <div className="form-group">
        <label for="formGroupExampleInput2">Another label</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Another input"
        />
      </div>
    </form>
  );
}

export default InputForm;
