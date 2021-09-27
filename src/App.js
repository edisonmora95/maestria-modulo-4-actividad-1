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
    };
  }

  renderNavbar () {
    return <Navbar />;
  }

  renderSearchBar () {
    return (
      <section className="row my-3">
        <article className="col-12">
          <SearchBar />
        </article>
      </section>
    );
  }

  renderPostList () {
    const {
      posts = [],
    } = this.state;

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
