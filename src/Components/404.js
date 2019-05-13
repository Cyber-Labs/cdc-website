import React from "react";
import { Link } from "react-router-dom";

const Not_found = () => {
  return (
    <div>
      <h1>ERROR: 404 Page Not Found!</h1>
      <Link to="/">GO Back to The Home Page</Link>
    </div>
  );
};

export default Not_found;
