import React from "react";
import TopNav from "./TopNav";
import Profile from "./Profile";
import NewsFeed from "./NewsFeed";
import PeopleYouMayKnow from "./PeopleYouMayKnow";

function App(){
  var styles= {
    width: "1100px",
    marginRight: "auto",
    marginLeft: "auto",
    border : "2px solid lightgrey",
  }
  var layout = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  }
  

  return (
    <div style={styles}>
      <TopNav />
      <div style={layout}>
        <Profile />
        <NewsFeed />
        <PeopleYouMayKnow />
      </div>
    </div>
  );
}

export default App;