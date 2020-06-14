import React from 'react';
import NavItem from './NavItem';

const Nav = ({ logout }) => {
  return (
    <nav className="flex-grow-1 d-flex align-items-stretch list-group list-group-flush border-bottom w-100">
      <NavItem
        navAction={() => (window.location.href = '#HistoryContent')}
        faIcon="far fa-clipboard"
        title="My Results"
      />
      <NavItem
        navAction={() => (window.location.href = '#StatsContent')}
        faIcon="far fa-chart-bar"
        title="My Stats"
      />
      <NavItem
        navAction={() => (window.location.href = '#ProfileContent')}
        faIcon="far fa-user"
        title="Profile"
      />
      <NavItem navAction={logout} faIcon="fas fa-power-off" title="Logout" />
    </nav>
  );
};

export default Nav;
