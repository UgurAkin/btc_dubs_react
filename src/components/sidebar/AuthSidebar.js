import React from 'react';
import ProfilePanel from './ProfilePanel';
import Nav from './Nav';

const AuthSidebar = ({ name, themeUrl, avatarUrl, logout }) => {
  return (
    <>
      <ProfilePanel name={name} themeUrl={themeUrl} avatarUrl={avatarUrl} />
      <Nav logout={logout} />
    </>
  );
};

export default AuthSidebar;
