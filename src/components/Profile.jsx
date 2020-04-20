import React from "react";

function Profile(){
  var top = {
    position: "relative",
    border: "2px solid lightgrey",
    width: "300px",
    marginTop: "15px",
    height: "150px",
    backgroundColor: "#d6f5f5",
    zIndex: "1",
    // backgroundImage
    backgroundSize: "contain",
  }
  var picture = {
    zIndex: "2",
    width: "100px",
    height: "100px",
    backgroundColor: "#38A1F3",
    backgroundSize: "contain",
    border: "2px solid white",
    position: "fixed",
    top: "auto",
    left: "auto",
    marginTop: "-50px",
    marginLeft: "14px",
    borderRadius: "20px",
  }

  var bottom = {
    border : "2px solid, lightgrey",
    width: "300px",
    height: "100px",
    zIndex: "1",
    position: "relative",
  }

  var name = {
    textAlign: "right",
    marginRight: "20px",
    marginTop: "15px",
    marginBottm: "15px",
    fontSize: "20px",
    fontWeight: "bold",
  }

  var link = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: "13px",
  }

  var text = {
    width: "260px",
    height: "300px",
    padding: "20px",
    border : "2px solid lightgrey",
    marginTop: "20px",
    lineHeight: "23px",
  }

  return (
    <div>
      <div style={top}></div>
      <div style={picture}></div>
      <div style={bottom}>
        <div style={name}>Jiwon Han</div>
        <div style={link}><span>TWEETS</span><span>FOLLOWING</span><span>FOLLOWERS</span></div>
      </div>
      <div style={text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </div>
  );

}

export default Profile;