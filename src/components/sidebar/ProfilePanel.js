import React, { useContext } from 'react';
import { UserContext } from 'components/App';

const ProfilePanel = () => {
  const userCtx = useContext(UserContext);
  const avatarUrl = userCtx
    ? userCtx.avatarUrl
    : 'https://via.placeholder.com/250';
  const themeUrl = userCtx ? userCtx.themeUrl : '';
  const name = userCtx ? userCtx.name : '';
  return (
    <div>
      <div id="ProfilePanel">
        <div
          className="theme"
          style={{
            backgroundImage: `url(${themeUrl})`
          }}
        ></div>
        <div className="text-center p-5">
          <img
            className="rounded-circle img-thumbnail w-50 m-auto profile-thumbnail"
            src={avatarUrl}
            alt=""
          />
          <p className="text-center pt-2">
            <b>{name}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
