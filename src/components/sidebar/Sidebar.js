import React, { useContext } from 'react';
import { UserContext } from 'components/App';
import Title from './Title';
import AuthSidebar from './AuthSidebar';
import GuestSidebar from './GuestSidebar';

const Sidebar = ({ login, logout }) => {
  const userCtx = useContext(UserContext);
  const { name, avatarUrl, themeUrl } = { ...userCtx };

  const SidebarBody = userCtx ? (
    <AuthSidebar
      name={name}
      avatarUrl={avatarUrl}
      themeUrl={themeUrl}
      logout={logout}
    />
  ) : (
    <GuestSidebar login={login} />
  );

  console.log('sidebar');
  return (
    <div
      id="Sidebar"
      className="bg-dark text-light d-flex flex-column sticky-top sidebar vh-100"
    >
      <Title />
      {SidebarBody}
    </div>
  );
};

export default Sidebar;
