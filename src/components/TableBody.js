import React from "react";

function TableBody(props) {
  return (
    <tbody>
      <tr>
        {/* <th scope="row">1</th> */}
        <td>
          {" "}
          <img alt={props.name} src={props.image} />
        </td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.role}</td>
        <td>{props.phone}</td>
      </tr>
    </tbody>
  );
}

export default TableBody;
