import React from "react";
import TopNav from "./TopNav";
import Profile from "./Profile";
import NewsFeed from "./NewsFeed";

function App(){
  var styles= {
    width: "1100px",
    marginRight: "auto",
    marginLeft: "auto",
  }
  var body= {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  }
  

  return (
    <div style={styles}>
      <TopNav />
    <div stlye={body}>
      <Profile />
      <NewsFeed />
    </div>
    </div>
  );
}

export default App;