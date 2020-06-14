import React from 'react';
import ProfilePanel from './ProfilePanel';
import Nav from './Nav';
import Title from './Title';

const Sidebar = ({ login, logout }) => {
  return (
    <div
      id="Sidebar"
      className="bg-dark text-light d-flex flex-column sticky-top sidebar vh-100"
    >
      <Title />
      <ProfilePanel />
      <Nav logout={logout} />
    </div>
  );
};

export default Sidebar;
