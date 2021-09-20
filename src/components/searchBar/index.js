import React from 'react';

const SearchBar = () => {
  const renderContent = () => {
    return (
      <form>
        <section className="search-section">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="default input example"/>
        </section>
      </form>
    );
  };

  return renderContent();
};

export default SearchBar;
