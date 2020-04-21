import React from "react";

function Tweet(props){
  const styles = {
    border: "2px solid lightgrey",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  }

  const profile = {
    width: "50px",
    height: "50px",
    backgroundColor: "white",
    backgroundImage: "url("+props.image+")",
    backgroundSize: "50px",
    backgroundRepeat: "no-repeat",
    marginTop: "10px",
    marginLeft: "10px",
  }

  const text  = {
    width: "300px",
    paddingTop: "10px",
    paddingLeft: "20px",
    overflowWrap: "break-word",
  }
  const name = {
    fontWeight: "bold",
    marginTo: "5px",
    marginBottom: "5px",
  }

  const content = {
    marginTop: "10px",
    paddingTop: "10px",
  }

  const like = {
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