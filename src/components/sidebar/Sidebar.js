import React, { useContext } from 'react';
import ProfilePanel from './ProfilePanel';
import { UserContext } from 'components/App';
import Nav from './Nav';
import Title from './Title';

const SidebarBodyForUser = logout => (
  <>
    <ProfilePanel />
    <Nav logout={logout} />
  </>
);

const SidebarBodyForGuest = login => (
  <>
    <div className="flex-grow-1 d-flex align-items-start">
      <div className="px-5 py-3 mx-3 mt-5 border rounded">
        <p className="w-100">
          You are not logged in. Please log in to access registration or your
          profile details.
        </p>
        <button
          className="btn btn-block btn-outline-light"
          type="button"
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  </>
);

const Sidebar = ({ login, logout }) => {
  const userCtx = useContext(UserContext);
  return (
    <div
      id="Sidebar"
      className="bg-dark text-light d-flex flex-column sticky-top sidebar vh-100"
    >
      <Title />
      {userCtx ? SidebarBodyForUser(logout) : SidebarBodyForGuest(login)}
    </div>
  );
};

export default Sidebar;
