import React, { useState } from 'react';
import 'styles/App.css';
import appJsx from './appJsx';
import Sidebar from './sidebar/Sidebar';

const sampleUser = {
  name: 'Ugur Akin',
  dob: {
    dd: '21',
    mm: '03',
    yyyy: '1995'
  },
  avatarUrl: process.env.PUBLIC_URL + '/sampleAvatar.jpg',
  themeUrl: process.env.PUBLIC_URL + '/sampleThemeFed.jpg'
};

const UserContext = React.createContext(sampleUser);

const App = () => {
  const [user, setUser] = useState(sampleUser);
  const login = () => setUser(sampleUser);
  const logout = () => setUser();
  return (
    <div id="App" className="row no-gutters">
      <UserContext.Provider value={user}>
        <Sidebar login={login} logout={logout} />
      </UserContext.Provider>

      <div className="col"></div>
    </div>
  );
};

export { UserContext };
export default App;
