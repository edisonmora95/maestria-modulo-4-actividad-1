import React, { Component } from 'react';

import Navbar from './components/navbar';
import SearchBar from './components/searchBar';
import PostList from './components/postList';
import Profile from './components/profile';

import { posts } from './components/postList/posts';

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      posts: posts,
      searchValue: "",
      loadedPosts: false,
      section: "posts",
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

  renderProfile () {
    const avatar = "https://gravatar.com/avatar/9cdf3d945a11fed3ad9db98893d54392?s=400&d=robohash&r=x";
    const username = "edisonmora";
    const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return (
      <section className="row my-3">
        <Profile
          avatar={avatar}
          username={username}
          bio={bio}
        />
      </section>
    );
  }

  renderMainContent () {
    const { section } = this.state;

    if (section === "posts") {
      return (
        <div>
          {this.renderSearchBar()}
          {this.renderPostList()}
        </div>
      );
    }

    return (
      <div>
        {this.renderProfile()}
      </div>
    );
  }

  render () {
    return (
      <main>
        <header>
          {this.renderNavbar()}
        </header>
        <main className="App container">
          {this.renderMainContent()}
        </main>
      </main>
    );
  }

}

export default App;
