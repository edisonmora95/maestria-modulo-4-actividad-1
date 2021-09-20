import SearchBar from './components/searchBar';
import './App.css';

const App = () => {
  const renderSearchBar = () => {
    return (
      <section className="row my-3">
        <article className="col-12">
          <SearchBar />
        </article>
      </section>
    );
  };

  return (
    <div className="App container">
      {renderSearchBar()}
    </div>
  );
}

export default App;
