import React from "react";
import { Link } from "react-router-dom";

const NotAllow = () => {
  return (
    <div>
      <h1>You Not Allow to Access untill You log in or Resgister</h1>
      <Link to="/">GO BACK</Link>
    </div>
  );
};

export default NotAllow;
