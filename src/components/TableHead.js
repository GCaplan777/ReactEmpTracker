import React from "react";

function TableHead(props) {
  return (
    <thead>
      <tr>
        {/* <th scope="col">#</th> */}
        <th scope="col">Image</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
        <th scope="col">Phone</th>
      </tr>
    </thead>
  );
}

export default TableHead;
