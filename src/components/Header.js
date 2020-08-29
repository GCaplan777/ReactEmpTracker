import React from "react";

function Header(props) {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Springfield Nuclear Power Plant</h1>
      <p>
        Click on carrots to filter by heading or use the search box to narrow
        your results.
      </p>
    </div>
  );
}

export default Header;
