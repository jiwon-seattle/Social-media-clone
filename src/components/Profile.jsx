import React from "react";
var profileImg = require("../img/jiwon.jpg")
var backgroundImg = require("../img/la.jpg")

function Profile(){
  var top = {
    position: "relative",
    width: "302px",
    marginTop: "15px",
    height: "150px",
    backgroundColor: "#d6f5f5",
    backgroundRepeat: "no-repeat",
    zIndex: "1",
    backgroundImage: "url("+backgroundImg+")",
    backgroundSize: "cover",
  }
  var picture = {
    zIndex: "2",
    width: "100px",
    height: "100px",
    backgroundColor: "#38A1F3",
    backgroundImage: "url("+profileImg+")",
    backgroundSize: "132px",
    backgroundRepeat: "no-repeat",
    border: "2px solid white",
    position: "relative",
    top: "30px",
    left: "auto",
    marginTop: "-105px",
    marginLeft: "14px",
    borderRadius: "20px",
  }

  var bottom = {
    border : "2px solid lightgrey",
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
    height: "200px",
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
      I had taro smoothie today. It was really sweeet!
      </div>
    </div>
  );

}

export default Profile;