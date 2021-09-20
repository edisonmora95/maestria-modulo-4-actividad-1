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
    <main>
      <header>
        {renderNavbar()}
      </header>
      <main className="App container">
        {renderSearchBar()}
        {renderPostList()}
      </main>
    </main>
  );
}

export default App;
