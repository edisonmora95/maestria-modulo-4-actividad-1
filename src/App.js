import Navbar from './components/navbar';
import SearchBar from './components/searchBar';
import './App.css';
import PostList from './components/postList';

const App = () => {
  const renderNavbar = () => {
    return <Navbar />;
  };

  const renderSearchBar = () => {
    return (
      <section className="row my-3">
        <article className="col-12">
          <SearchBar />
        </article>
      </section>
    );
  };

  const renderPostList = () => {
    return <PostList />;
  };

  return (
    <div className="App container">
      {renderNavbar()}
      {renderSearchBar()}
      {renderPostList()}
    </div>
  );
}

export default App;
