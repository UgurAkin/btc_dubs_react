import React from 'react';

const GuestSidebar = ({ login }) => {
  return (
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
};

export default GuestSidebar;
