import React, { useState } from 'react';
import 'styles/App.css';
import Sidebar from './sidebar/Sidebar';
import RegistrationJumbotron from './sidebar/RegistrationJumbotron';

const sampleUser = {
  name: 'Ugur Akin',
  dob: {
    dd: '21',
    mm: '03',
    yyyy: '1995'
  },
  avatarUrl: process.env.PUBLIC_URL + '/sampleAvatar.jpg',
  themeUrl: process.env.PUBLIC_URL + '/sampleThemeFed.jpg'
};

const UserContext = React.createContext();

const lastWeekJsx = (
  <div id="LastWeeksResults" className="collapse show">
    <table className="table table-striped">
      <thead>
        <tr>
          <th className="border-top-0" scope="col">
            Group A
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

const App = () => {
  const [user, setUser] = useState();
  const login = () => {
    setUser(sampleUser);
  };
  const logout = () => {
    setUser();
  };
  return (
    <div id="App" className="row no-gutters">
      <UserContext.Provider value={user}>
        <Sidebar login={login} logout={logout} />
      </UserContext.Provider>

      <div className="col">
        <main className="container-fluid">
          <header className="row">
            <div className="col-9 mx-auto">
              <RegistrationJumbotron />
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
                  href="#RulesAndFormat"
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
      </div>
    </div>
  );
};

export { UserContext };
export default App;
