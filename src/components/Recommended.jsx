import React from "react";

function Recommended(props){
  var styles = {
    display: "flex",
    flexDirecton: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "10px",
  }

  var Image = {
    width: "70px",
    height: "70px",
    backgroundColor: "grey",
    backgroundImage: "url("+props.image+")",
    backgroundSize: "contain",
    marginTop: "10px",
    marginLeft: "10px",
    marginRight: "10px",
  }

  var button = {
    backgroundColor: "#3B5998",
    color: "white",
    marginTop: "15px",
    padding: "10px",
    textAlign: "center",
    width: "100px",
  }

  return (
    <div style={styles}>
      <div style={Image}>
      </div>
      <div>
        <div>{props.name}</div>
        <button style={button} type="button">Button</button>
      </div>
    </div>
  )
}

export default Recommended;