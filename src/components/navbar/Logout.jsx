import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

const Logout = () => {
  const history = useHistory();
  const onClickLogout = () => {
    console.log("clear and log out");
    localStorage.clear();
    history.push("/");
  };

  return (
    <Button
      variant="contained"
      onClick={onClickLogout}
      style={{ marginLeft: "10px", backgroundColor: "#90B274" }}
    >
      Sign Out
    </Button>
  );
};

export default Logout;
