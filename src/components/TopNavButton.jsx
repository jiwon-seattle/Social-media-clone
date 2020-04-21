import React from "react";

function TopNavButton(props){
  var styles = {
    borderRadius: "0px",
    border: "none",
    height: "50px",
    paddingLeft: "20px",
    paddingRight: "20px",
    fontSize: "13px",
    backgroundColor: "white",
  }

  return (
    <button style={styles}>{props.buttonName}</button>
  );
}

export default TopNavButton;