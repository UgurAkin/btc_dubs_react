import React from "react";
import 'styles/App.css';

function App() {
  return (
    <div id="App" className="row">
      <div id="SideNav" className="col-2"></div>
      <div id="Content" className="row col">
        <div className="col-9 offset-1">
          <div id="Header">
            <div className="jumbotron  jumbotron-fluid my-4">
              <div className="container">
                <h1 className="display-4 text-center">BTC Doubles Night</h1>
                <hr className="my-4" />
                <p className="lead text-center">X time until the registration for next doubles night opens.</p>
                <p className="lead text-center">
                  <a className="btn btn-primary btn-lg disabled" href="#" role="button">Register Here!</a>            </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
}

export default App;
