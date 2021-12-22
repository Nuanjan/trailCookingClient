import React, { useState } from "react";
import Drawer from "./Drawer";
import Toolbar from "./Toolbar";

const Navbar = () => {
  const [left, setLeft] = useState(false);
  const toggleDrawer = () => {
    setLeft(false);
  };
  const openDrawer = () => {
    setLeft(true);
  };
  return (
    <div>
      <Drawer openDrawerHandler={openDrawer} />
      <Toolbar left={left} toggleDrawerHandler={toggleDrawer} />
    </div>
  );
};

export default Navbar;
