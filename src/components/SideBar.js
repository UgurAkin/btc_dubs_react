import React from 'react'

const SideBar = () => {
    return (
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
    )
}

export default SideBar
