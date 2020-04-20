import React from "react";

function TopNavButton(props){
  var styles = {
    border: "2px solid lightgrey",
    borderRadius: "0px",
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