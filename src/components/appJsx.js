import React from "react";
import "styles/App.css";

const appJsx2 = (
  <div id="App" className="container-fluid">
    <div className="row flex-xl-nowrap">
      <div
        id="Sidebar"
        className="d-flex flex-column col-md-4 col-xl-2 sticky-top border-right vh-100"
      >
        <div className="row border-bottom">
          <p className="h2 text-center">Burnaby Tennis Club</p>
        </div>
        <div className="row">
          <div id="ProfilePanel" className="p-5">
            <div>
              <img
                className="rounded-circle img-thumbnail"
                src="https://via.placeholder.com/250"
                alt=""
              />
              <p>fName LName</p>
            </div>
          </div>
        </div>

        <div className="row border-top bg-primary flex-grow-1">
          <nav className="d-flex align-items-stretch list-group list-group-flush border-bottom w-100">
            <a
              className="d-flex align-items-center flex-grow-1 list-group-item list-group-item-action"
              href="#HistoryContent"
            >
              <span>My History</span>
            </a>
            <a
              className="d-flex align-items-center flex-grow-1 list-group-item list-group-item-action"
              href="#StatsContent"
            >
              My Stats
            </a>
            <a
              className="d-flex align-items-center flex-grow-1 list-group-item list-group-item-action"
              href="#ProfileContent"
            >
              Profile
            </a>
            <a
              className="d-flex align-items-center flex-grow-1 list-group-item list-group-item-action"
              href="#ContentHeader"
            >
              Logout
            </a>
          </nav>
        </div>
      </div>

      <main className="col-md-9 col-xl-8" role="main"></main>
    </div>
  </div>
);

const appJsx = (
  <div id="App" className="container-fluid">
    <div className="row">
      <div id="SideBar" className="col-2 py-2 border-right sticky-top sidebar">
        <div className="row">
          <p className="container h2 text-center">Burnaby Tennis Club</p>
        </div>
        <div className="row">
          <div id="ProfileHeader" className="container">
            <img
              className="rounded-circle img-thumbnail"
              src="https://via.placeholder.com/250"
              alt=""
            />
            {/* <div className="row">
            <div className="col text-center align-middle">
            <button
            type="button"
            className="btn btn-sm btn-block btn-primary text-light"
            >
            Login
            </button>
            </div>
          </div> */}
          </div>
        </div>
        <div className="row"></div>
      </div>

      <div id="SiteContent" className="col">
        <div id="ContentHeader" className="row justify-content-center">
          <div className="col-9">
            <div className="jumbotron  jumbotron-fluid my-4">
              <div className="container">
                <h1 className="display-4 text-center">BTC Doubles Night</h1>
                <hr className="my-4" />
                <p className="lead text-center">
                  X time until the registration for next doubles night opens.
                </p>
                <p className="lead text-center">
                  <a
                    className="btn btn-primary btn-lg disabled"
                    href="body"
                    role="button"
                  >
                    Register Here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="ContentBody">
          <div
            id="MainPageContent"
            className="container-fluid justify-content-center"
          >
            <ul className="list-group list-group-flush">
              <a
                role="button"
                href="#LastWeeksResults"
                data-toggle="collapse"
                className="list-group-item list-group-item-action h4"
              >
                Last Week&apos;s Results
              </a>
              <div id="LastWeeksResults" className="collapse">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                href="#PreviousWeeks"
                className="list-group-item list-group-item-action h4"
              >
                See Previous Weeks
              </a>
            </ul>
          </div>
          <div id="HistoryContent"></div>
          <div id="StatsContent"></div>
          <div id="ProfileContent"></div>
        </div>
      </div>
    </div>
  </div>
);

export { appJsx };
export default appJsx2;
