import React from "react";
import 'styles/App.css';
import SideBar from "./SideBar";
import ContentHeader from "./ContentHeader";
import ContentBody from "./ContentBody";

function App() {
  return (
    <div id="App" className="row no-gutters">
      <SideBar />

      <div id="SiteContent" className="col">
        <ContentHeader />
        <ContentBody />
      </div>
    </div >
  );
}

export default App;
