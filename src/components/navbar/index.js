import React from 'react';

const Navbar = () => {
  const renderContent = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i class="bi-lightning-charge-fill"></i>
            <span>three pics</span>
          </a>
          <i class="bi-person-circle"></i>
        </div>
      </nav>
    );
  };

  return renderContent();
};

export default Navbar;
