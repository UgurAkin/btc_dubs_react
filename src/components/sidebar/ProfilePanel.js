import React from 'react';

const ProfilePanel = ({ name, themeUrl, avatarUrl }) => {
  return (
    <>
      <div id="ProfilePanel" className="profile-panel">
        <div
          className="theme"
          style={{
            backgroundImage: `url(${themeUrl})`
          }}
        ></div>
        <div className="text-center p-5">
          <img
            className="rounded-circle w-50 m-auto profile-thumbnail border"
            src={avatarUrl}
            alt=""
          />
          <p className="text-center pt-2">
            <b>{name}</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfilePanel;
