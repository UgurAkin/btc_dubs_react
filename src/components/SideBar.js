import React, { useContext } from 'react';
import { UserContext } from 'components/App';

const SideBar = ({ userAction }) => {
  const userCtx = useContext(UserContext);
  const profilePanelBtnText = userCtx ? 'Logout' : 'Login';
  const avatarUrl = userCtx
    ? userCtx.avatarUrl
    : 'https://via.placeholder.com/250';

  return (
    <div id="SideBar" className="bg-dark col-2 pt-5">
      <div id="SidebarHeader" className="container py-2 bg-secondary">
        <img className="rounded-circle" src={avatarUrl} alt="" />
        <div className="row">
          <div className="col-6 offset-3 text-center align-middle">
            <button
              className="btn btn-sm btn-block btn-primary text-light"
              type="button"
              onClick={userAction}
            >
              {profilePanelBtnText}
            </button>
          </div>
        </div>
      </div>
      <div id="SideNav">
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-transparent text-light d-flex align-items-center justify-content-between">
            Cras justo odio
            <span className="badge badge-primary badge-pill">14</span>
          </li>
          <li className="list-group-item bg-transparent text-light">
            Cras justo odio
          </li>
          <li className="list-group-item bg-transparent text-light">
            Cras justo odio
          </li>
          <li className="list-group-item bg-transparent text-light">
            Cras justo odio
          </li>
          <li className="list-group-item bg-transparent text-light">
            Cras justo odio
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
