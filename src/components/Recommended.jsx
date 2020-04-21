import React from "react";

function Recommended(props){
  const styles = {
    display: "flex",
    flexDirecton: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "10px",
  }

  const Image = {
    width: "70px",
    height: "70px",
    backgroundColor: "grey",
    backgroundImage: "url("+props.image+")",
    backgroundSize: "contain",
    marginTop: "10px",
    marginLeft: "10px",
    marginRight: "10px",
  }

  const button = {
    backgroundColor: "#3B5998",
    color: "white",
    marginTop: "15px",
    padding: "10px",
    textAlign: "center",
    width: "100px",
    borderRadius: "0px",
    border: "none",
  }

  return (
    <div style={styles}>
      <div style={Image}>
      </div>
      <div>
        <div>{props.name}</div>
        <button style={button} type="button">Say Hello</button>
      </div>
    </div>
  )
}

export default Recommended;