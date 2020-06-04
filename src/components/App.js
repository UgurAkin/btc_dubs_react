import React from "react";
import 'styles/App.css';

function App() {
  return (
    <div id="App" className="row no-gutters">
      <div id="SideBar" className="bg-dark col-2 pt-5">
        <div id="ProfileHeader" className="container py-2 bg-secondary">
          <img className="img-rounded"
            src="https://via.placeholder.com/250" alt="" />
          <div className="row">
            <div className="col text-center align-middle">
              <a className="btn-sm btn-block btn-primary text-light" href="#">Log In</a>
            </div>
            <div className="col text-center align-middle">
              <a className="btn-sm btn-block btn-primary text-light">Sign Up</a>
            </div>
          </div>
        </div>

        <div id="SideNav">
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-transparent text-light d-flex align-items-center justify-content-between">
              Cras justo odio
              <span className="badge badge-primary badge-pill">14</span>
            </li>
            <li className="list-group-item bg-transparent text-light">Cras justo odio</li>
            <li className="list-group-item bg-transparent text-light">Cras justo odio</li>
            <li className="list-group-item bg-transparent text-light">Cras justo odio</li>
            <li className="list-group-item bg-transparent text-light">Cras justo odio</li>
          </ul>
        </div>

      </div>

      <div id="SiteContent" className="col">
        <div id="ContentHeader" className="row justify-content-center">
          <div className="col-9">
            <div className="jumbotron  jumbotron-fluid my-4">
              <div className="container">
                <h1 className="display-4 text-center">BTC Doubles Night</h1>
                <hr className="my-4" />
                <p className="lead text-center">X time until the registration for next doubles night opens.</p>
                <p className="lead text-center">
                  <a className="btn btn-primary btn-lg disabled" href="body" role="button">Register Here</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="ContentBody">
          <div id="History" className="container-fluid justify-content-center">
            <h3 id="HistoryHeader" className="card bg-dark p-2 text-light">
              + History
            </h3>
            <div className="accordion" id="accordionExample">
              <div className="container-fluid">
                <div className="card-header" id="headingOne" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <h4 className="mb-0">
                    <div className="text-left" >
                      + Date
                  </div>
                  </h4>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">

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
              </div>

            </div>
          </div >
        </div>
      </div>
    </div >
  );
}

export default App;
