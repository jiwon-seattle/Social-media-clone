import React from "react";
// var profile = require("../img/jiwon2.jpg")

function Tweet(props){
  var styles = {
    border: "2px solid lightgrey",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  }

  var profile = {
    width: "50px",
    height: "50px",
    backgroundColor: "white",
    backgroundImage: "url("+props.image+")",

    backgroundSize: "50px",
    backgroundRepeat: "no-repeat",
    marginTop: "10px",
    marginLeft: "10px",
  }

  var text  = {
    width: "300px",
    paddingTop: "10px",
    paddingLeft: "20px",
    overflowWrap: "break-word",
  }
  var name = {
    fontWeight: "bold",
    marginTo: "5px",
    marginBottom: "5px",
  }

  var content = {
    borderTop: "1px solid lightgrey",
    marginTop: "10px",
    paddingTop: "10px",
  }

  var like = {
    bordertop : "2px solid lightgrey",
    marginTop: "10px",
    paddingTop: "10px",
    fontWeight: "bold",
  }

  if(props.likes){
    return (
      <div style={styles}>
        <div style={profile}></div>
        <div style={text}>
          <div style={name}>{props.name}</div>
          <div>{props.content}</div>
          <div style={like}>{props.likes}</div>
        </div>
      </div>
    );
  }

  else {
    return (
      <div style={styles}>
        <div style={profile}>
        </div>
        <div style={text}>
          <div style={name}>{props.name}</div>
          <div style={content}>{props.content}</div>
        </div>
      </div>
    );
  }
}

export default Tweet;