import React from "react";

function TableHead(props) {
  return (
    <thead className="thead">
      <tr>
        <th scope="col">Image</th>
        <th
          scope="col"
          onClick={props.sortNameHandler}
          style={{ textDecorationLine: "underline" }}
        >
          Name
        </th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
        <th scope="col">Phone</th>
      </tr>
    </thead>
  );
}

export default TableHead;
