import React from "react";
import Tweet from "./Tweet";

const tweet1Img = require("../img/woman.png")
const tweet2Img = require("../img/man.png")

function NewsFeed(){
  const Feed = {
    width: "400px",
    height: "650px",
    marginTop: "15px",
    marginLeft: "25px",
    lineHeight: "23px",
    zIndex: "1",
    backgroundColor: "lightblue",
  }

  const Input = {
    width: "300px",
    height: "35px",
    marginLeft: "80px",
    border: "1px solid #38A1F3",
    marginTop: "20px",
    marginBottom: "20px",
  }

  const Block = {
    padding: "7px",
    backgroundColor: "#800020",
    zIndex: "2",
    position: "relative",
    top: "50px",
    left: "auto",
    marginTop: "20px",
    marginLeft: "15px",
  }

  return (
    <div>
      <div style={Feed}>
        <span style={Block}>Jiwon</span>
        <input style={Input} type="text" placeholder="What's happening?"/>
        <Tweet image={tweet1Img} name="Yuna" content="These days, there are full of people in parks. I don't believe it lol.." />
        <Tweet image={tweet2Img} name="Hun" content="I watched infinite challenge yesterday, and it was super fun! I recommend you guys to watch it again." likes="Jiwon likes it"/>
        <Tweet image={tweet1Img} name="Lala" content="I dreamed I was forced to eat a giant marshmallow. When I woke up, my pillow was gone." likes="Jiwon likes it"/>

      </div>
    </div>
  );
}

export default NewsFeed;