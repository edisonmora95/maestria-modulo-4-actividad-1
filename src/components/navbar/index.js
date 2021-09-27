import React from 'react';

const Navbar = (props) => {
  const {
    onLogoClick,
    onProfileClick,
  } = props;
  const renderContent = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i className="bi-lightning-charge-fill"></i>
            <span onClick={onLogoClick}>three pics</span>
          </a>
          <i className="bi-person-circle" onClick={onProfileClick}></i>
        </div>
      </nav>
    );
  };

  return renderContent();
};

export default Navbar;
