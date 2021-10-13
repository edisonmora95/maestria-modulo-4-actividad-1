import React, { Component } from 'react';

import Navbar from './components/navbar';
import SearchBar from './components/searchBar';
import PostList from './components/postList';
import Profile from './components/profile';
import Login from './components/login';

import { posts } from './data/posts';
import { profile } from './data/profile';

import './plugins/axios';

import './App.css';
import { getLoggedUser } from './services/authentication';

class App extends Component {
  constructor () {
    super();
    this.state = {
      posts: [],
      searchValue: "",
      loadedPosts: false,
      section: "posts",
      loginOk: false,
    };
    this.onSearch = this.onSearch.bind(this);
    this.onProfileClick = this.onProfileClick.bind(this);
    this.onLogoClick = this.onLogoClick.bind(this);
    this.onLoginComplete = this.onLoginComplete.bind(this);
  }

  async componentDidMount () {
    const userId = localStorage.getItem('user-id');
    if (userId) {
      try {
        await getLoggedUser(userId);
        this.setState({ loginOk: true });
        this.loadPosts();
      } catch (error) {
        console.log(error);
      }
    }
  }

  loadPosts() {
    setTimeout(() => {
      this.setState({
        loadedPosts: true,
        posts: posts,
      });
    }, 3000);
  }

  onSearch (value) {
    this.setState({ searchValue: value });
    const filteredPosts = posts.filter((post) => post.description.toLowerCase().includes(value.toLowerCase()));
    this.setState({ posts: filteredPosts });
  }

  onProfileClick () {
    this.setState({ section: "profile", posts: [] });
  }

  onLogoClick () {
    this.setState({ section: "posts", posts: [] });
  }

  onLoginComplete() {
    this.setState({ loginOk: true });
    this.loadPosts();
  }

  renderNavbar () {
    return <Navbar onLogoClick={this.onLogoClick} onProfileClick={this.onProfileClick} />;
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
    const { section, loginOk } = this.state;

    if (!loginOk) {
      return (
        <Login onLoginComplete={this.onLoginComplete} />
      );
    }

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
