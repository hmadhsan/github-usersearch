import React from "react";

const Header = () => {
  return (
    <nav
      className="header"
      style={{
        backgroundColor: "#101010",
        color: "white",
        padding: "15px",
        fontSize: "20px",
        textAlign: "center"
      }}
    >
      <i className="github icon"> </i> Github Search User{" "}
      <i className="github icon"> </i>
    </nav>
  );
};

export default Header;
