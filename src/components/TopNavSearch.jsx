import React from "react";

function TopNavSearch() {
  var searchStyles = {
    borderBottomLeftRadius: "50px",
    borderBottomRightRadius: "50px",
    borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    border: "2px solid #38A1F3",
    marginRight: "100px",
    width: "150px",
    fontSize: "15px",
    padding : "8px", 
  }

  var tweetStyles = {
    borderBottomLeftRadius: "50px",
    borderBottomRightRadius: "50px",
    borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    border: "2px solid #38A1F3",
    marginRight: "20px",
    width: "80px",
    fontSzie: "15px",
    padding: "8px",
  }

  return (
    <div>
      <input style={searchStyles}
        type="text" placeholder="Search"></input>
      <input style={tweetStyles} type="button" value="Tweet"></input>
    </div>

  );

}

export default TopNavSearch;