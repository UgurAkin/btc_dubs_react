import React from 'react';
import SidebarHeader from './SidebarHeader';

const Sidebar = ({ userAction }) => {
  return (
    <div id="Sidebar" className="bg-dark col-2 pt-5">
      <SidebarHeader userAction={userAction} />
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

export default Sidebar;
