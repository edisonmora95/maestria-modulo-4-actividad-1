import React, { Component } from 'react';

import Navbar from './components/navbar';
import SearchBar from './components/searchBar';
import PostList from './components/postList';
import Profile from './components/profile';

import { posts } from './data/posts';
import { profile } from './data/profile';

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
    const { avatar, username, bio } = profile;
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
