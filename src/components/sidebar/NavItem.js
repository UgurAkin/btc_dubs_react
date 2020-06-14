import React from 'react';

const NavItem = ({ title, faIcon, navAction }) => {
  return (
    <button
      className="bg-dark text-light d-flex align-items-center flex-grow-1 list-group-item list-group-item-action"
      onClick={navAction}
    >
      <i className={`mx-3 ${faIcon}`}></i>
      <span>{title}</span>
    </button>
  );
};

export default NavItem;
