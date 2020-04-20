import React from "react";
import Tweet from "./Tweet";

function NewsFeed(){
  var Feed = {
    width: "400px",
    height: "650px",
    border: "2px solid lightgrey",
    marginTop: "15px",
    marginLeft: "25px",
    lineHeight: "23px",
    zIndex: "1",
    backgroundColor: "lightblue",
  }

  var Input = {
    width: "300px",
    height: "35px",
    marginLeft: "80px",
    border: "1px solid #38A1F3",
    marginTop: "20px",
    marginBottom: "20px",
  }

  // var Block = {
  //   padding: "7px",
  //   backgroundColor: "#800020",
  //   zIndex: "2",
  //   position: "fixed",
  //   top: "auto",
  //   left: "auto",
  //   marginTop: "20px",
  //   marginLeft: "25px",
  // }

  return (
    <div>
      <div style={Feed}>
        {/* <span style={Block}>Me</span> */}
        <input style={Input} type="text" placeholder="What's happening?"/>
        <Tweet name="Lorem Ipsum" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Tweet name="Lorem Ipsum2" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." likes="Lorem Ipsum"/>

      </div>
    </div>
  );
}

export default NewsFeed;