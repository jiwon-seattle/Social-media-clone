import React from "react";
import TopNavButton from "./TopNavButton";
import TopNavSearch from "./TopNavSearch";

function TopNav(){
  var styles = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "50px",
    borderBottom: "2px solid lightgrey",
    paddingBottom: "15px"
  }

  var buttonStyle = {
    justifyContent: "flex-start"
  }

  return (
    <div style={styles}>
      <div style={buttonStyle}>
        <TopNavButton buttonName="Home" />
        <TopNavButton buttonName="Notifications" />
        <TopNavButton buttonName="Messages" />
      </div>
        <TopNavSearch />
      </div>
  );
}

export default TopNav;
