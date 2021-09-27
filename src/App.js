import React, { Component } from 'react';

import Navbar from './components/navbar';
import SearchBar from './components/searchBar';
import PostList from './components/postList';

import { posts } from './components/postList/posts';

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      posts: posts,
      searchValue: "",
      loadedPosts: false,
    };
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ loadedPosts: true });
    }, 3000);
  }

  onSearch (value) {
    this.setState({ searchValue: value });
    const filteredPosts = posts.filter((post) => post.description.toLowerCase().includes(value.toLowerCase()));
    this.setState({ posts: filteredPosts });
  }

  renderNavbar () {
    return <Navbar />;
  }

  renderSearchBar () {
    const { searchValue } = this.state;
    return (
      <section className="row my-3">
        <article className="col-12">
          <SearchBar onSearch={this.onSearch} value={searchValue}/>
        </article>
      </section>
    );
  }

  renderPostList () {
    const {
      posts = [],
      loadedPosts = false,
    } = this.state;

    if (!loadedPosts) {
      return (
        <p>Loading...</p>
      );
    }

    return <PostList posts={posts} />;
  }

  render () {
    return (
      <main>
        <header>
          {this.renderNavbar()}
        </header>
        <main className="App container">
          {this.renderSearchBar()}
          {this.renderPostList()}
        </main>
      </main>
    );
  }

}

export default App;
