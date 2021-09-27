import React from 'react';

const SearchBar = (props) => {
  const {
    onSearch,
    value = "",
  } = props;
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };
  const onChange = (e) => {
    onSearch(e.target.value);
  };
  const renderContent = () => {
    return (
      <form>
        <section className="search-section">
          <input
            onKeyDown={onKeyDown}
            onChange={onChange}
            className="form-control"
            value={value}
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
