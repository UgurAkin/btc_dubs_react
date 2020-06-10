import React, { useContext } from 'react';
import { UserContext } from 'components/App';

const SidebarHeader = ({ userAction }) => {
  const userCtx = useContext(UserContext);
  const profilePanelBtnText = userCtx ? 'Logout' : 'Login';
  const avatarUrl = userCtx
    ? userCtx.avatarUrl
    : 'https://via.placeholder.com/250';

  return (
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
  );
};

export default SidebarHeader;
