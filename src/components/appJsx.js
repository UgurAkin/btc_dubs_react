import React from "react";
import "styles/App.css";

const sidebarJsx = (
  <>
    <div
      id="Sidebar"
      className="d-flex flex-column sticky-top sidebar border-right vh-100"
    >
      <div className="border-bottom py-3">
        <p className="h2 text-center">
          <i>Burnaby Tennis Club</i>
        </p>
      </div>
      <div>
        <div id="ProfilePanel" className="p-5">
          <div className="container-fluid text-center">
            <img
              className="rounded-circle img-thumbnail w-50 m-auto"
              src="https://via.placeholder.com/250"
              alt=""
            />
            <p className="text-center">
              <b>Ugur Akin</b>
            </p>
          </div>
        </div>
      </div>

      <nav className="border-top flex-grow-1 d-flex align-items-stretch list-group list-group-flush border-bottom w-100">
        <a
          className="d-flex align-items-center flex-grow-1 list-group-item list-group-item-action"
          href="#HistoryContent"
        >
          <i className="far fa-clipboard mx-3"></i>
          <span>My Results</span>
        </a>
        <a
          className="d-flex align-items-center flex-grow-1 list-group-item list-group-item-action"
          href="#StatsContent"
        >
          <i className="far fa-chart-bar mx-3"></i>
          <span>My Stats</span>
        </a>
        <a
          className="d-flex align-items-center flex-grow-1 list-group-item list-group-item-action"
          href="#ProfileContent"
        >
          <i className="far fa-user mx-3"></i>
          <span>Profile</span>
        </a>
        <a
          className="d-flex align-items-center flex-grow-1 list-group-item list-group-item-action"
          href="#ContentHeader"
        >
          <i className="fas fa-power-off mx-3"></i>
          <span>Logout</span>
        </a>
      </nav>
    </div>
  </>
);

const lastWeekJsx = (
  <div id="LastWeeksResults" className="collapse show">
    <table className="table table-striped">
      <thead>
        <tr>
          <th className="border-top-0" scope="col">
            #
          </th>
          <th className="border-top-0" scope="col">
            First
          </th>
          <th className="border-top-0" scope="col">
            Last
          </th>
          <th className="border-top-0" scope="col">
            Handle
          </th>
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
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    <div className="text-right">
      <a href="#PreviousWeeks" className="text-muted">
        See Previous Weeks
      </a>
    </div>
  </div>
);

const rulesAndFormatJsx = (
  <div id="RulesAndFormat" className="collapse show">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac
      aliquam ante. Proin eget commodo urna. Suspendisse posuere turpis
      efficitur diam vulputate, a lacinia mauris tristique. Curabitur
      condimentum, quam malesuada blandit facilisis, quam lectus vehicula arcu,
      eget hendrerit ante sem ac lectus. Nunc viverra lobortis ex, non tempor
      lacus fermentum a. Praesent ut laoreet lorem. Etiam aliquam a arcu quis
      pulvinar. Quisque semper luctus massa, vitae tempor purus auctor sed.
      Aliquam eu maximus urna. Vestibulum ante ipsum primis in faucibus orci
      luctus et ultrices posuere cubilia curae; Aenean non turpis bibendum,
      congue enim nec, pharetra justo. Phasellus imperdiet ante nisi, nec
      posuere eros fringilla ut. Praesent sem dolor, blandit at mollis sit amet,
      iaculis sed enim. Aliquam nunc quam, maximus ac scelerisque non, lobortis
      non lorem. Ut vehicula sodales nisi, hendrerit fringilla mauris dapibus
      ut.
    </p>
    <p>
      Ut finibus luctus eleifend. Morbi felis justo, molestie non metus cursus,
      rhoncus ornare sapien. Maecenas maximus, orci sit amet hendrerit vehicula,
      ligula purus scelerisque metus, nec blandit lectus ligula id turpis.
      Integer sollicitudin, leo ut sollicitudin ultrices, sapien tortor
      sollicitudin augue, nec viverra ex erat ultricies ex. Etiam mollis purus
      ut lectus suscipit, sed hendrerit mauris ultricies. Fusce urna mi,
      suscipit ac nulla at, imperdiet lobortis sapien. Sed dolor leo, accumsan
      nec ligula et, ultricies efficitur dui. Etiam aliquam pharetra leo, vitae
      facilisis felis euismod non. Nam tristique finibus porttitor. Nunc sed
      nulla sed felis tempor pharetra a ac eros. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Maecenas mollis ultrices volutpat. Nam vitae
      erat augue. Suspendisse placerat massa tortor, sed varius nisi imperdiet
      sed. Ut nec pharetra sem. Duis auctor quis turpis nec rhoncus.
    </p>
  </div>
);

const contentJsx = (
  <>
    <main className="container-fluid">
      <header className="row">
        <div className="col-9 mx-auto">
          <div className="jumbotron  jumbotron-fluid my-4 p-4">
            <div className="container">
              <h1 className="display-4 text-center">BTC Doubles Night</h1>
              <hr className="my-4" />
              <div className="px-5 py-2">
                <p className="lead text-left">
                  X days, hh:mm:ss until the registration for next doubles night
                  opens.
                </p>
                <p className="lead text-right">
                  <a
                    className="btn btn-secondary btn-lg disabled"
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
      </header>

      <div className="row">
        <div className="col-11 mx-auto">
          <div className="list-group list-group-flush">
            <a
              role="button"
              href="#LastWeeksResults"
              data-toggle="collapse"
              className="list-group-item list-group-item-action h4"
            >
              Last Week&apos;s Results
            </a>
            {lastWeekJsx}
            <a
              role="button"
              href="#RulesFormat"
              data-toggle="collapse"
              className="list-group-item list-group-item-action h4"
            >
              Rules &amp; Format
            </a>
            {rulesAndFormatJsx}
          </div>
        </div>
      </div>
      <div id="HistoryContent"></div>
      <div id="StatsContent"></div>
      <div id="ProfileContent"></div>
    </main>
  </>
);

const appJsx = (
  <div id="App" className="row no-gutters">
    {sidebarJsx}
    <div className="col">{contentJsx}</div>
  </div>
);

export default appJsx;
