import React from "react";
import Recommended from "./Recommended";

var person1 = require('../img/googler.png');
var person2 = require('../img/cat.jpg');
var person3 = require('../img/boba.jpg');

function PeopleYouMayKnow(){
  var styles = {
    border: "1px solid lightgrey",
    marginLeft: "25px",
    marginTop: "15px",
    width: "300px",
    height: "300px",
    paddingLeft: "20px",
    paddingTop: "10px",
  }

  return (
    <div style={styles}>
      People You May Know
      <Recommended image={person1} name="Fancy googler"/>
      <Recommended image={person2} name="Purrrr"/>
      <Recommended image={person3} name="Bubble Bubble"/>
    </div>
  )
}

export default PeopleYouMayKnow