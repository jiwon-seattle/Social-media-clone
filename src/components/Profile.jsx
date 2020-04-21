import React from "react";
var profileImg = require("../img/jiwon.jpg")
var backgroundImg = require("../img/la.jpg")

function Profile(){
  const name = "Jiwon Han"
  const tweets = "102";
  const following = "7";
  const follower = "7";

  const top = {
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
  const picture = {
    zIndex: "2",
    width: "100px",
    height: "100px",
    backgroundColor: "#38A1F3",
    backgroundImage: "url("+profileImg+")",
    backgroundSize: "105px",
    backgroundRepeat: "no-repeat",
    border: "2px solid white",
    position: "relative",
    top: "30px",
    left: "auto",
    marginTop: "-105px",
    marginLeft: "14px",
    borderRadius: "20px",
  }

  const bottom = {
    border : "2px solid lightgrey",
    width: "300px",
    height: "100px",
    zIndex: "1",
    position: "relative",
  }

  const name = {
    textAlign: "right",
    marginRight: "20px",
    marginTop: "15px",
    marginBottm: "15px",
    fontSize: "20px",
    fontWeight: "bold",
  }

  const link = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: "13px",
  }

  const text = {
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
        <div style={name}>{name}</div>
        <div style={link}><span>TWEETS {tweets} </span><span>FOLLOWING {following} </span><span>FOLLOWERS {follower}</span></div>
      </div>
      <div style={text}>
      <em>4/20/2020</em>
      <br />
      I had taro smoothie today. It was really sweeet!
      <br />
      <br />
      <em>4/19/2020</em>
      <br />
      I am learning programming, and it is hard but rewarding :)
      <br />

      </div>
    </div>
  );

}

export default Profile;