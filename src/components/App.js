import React, { useState } from 'react';
import 'styles/App.css';
import Sidebar from './Sidebar';
import ContentHeader from './ContentHeader';
import ContentBody from './ContentBody';

const sampleUser = {
  name: {
    first: 'Ugur',
    middle: 'M.',
    last: 'Akin'
  },
  dob: {
    dd: '21',
    mm: '03',
    yyyy: '1995'
  },
  avatarUrl: process.env.PUBLIC_URL + '/sampleAvatar.jpg'
};

const UserContext = React.createContext(sampleUser);

const App = () => {
  const [user, setUser] = useState();
  const login = () => setUser(sampleUser);
  const logout = () => setUser();
  return (
    <div id="App" className="row no-gutters">
      <UserContext.Provider value={user}>
        <Sidebar userAction={user ? logout : login} />
      </UserContext.Provider>

      <div id="SiteContent" className="col">
        <ContentHeader />
        <ContentBody />
      </div>
    </div>
  );
};

export { UserContext };
export default App;
