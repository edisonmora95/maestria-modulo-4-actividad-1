import React, { Component } from 'react';

import Navbar from './components/navbar';
import SearchBar from './components/searchBar';
import PostList from './components/postList';
import Profile from './components/profile';
import Login from './components/login';

import './plugins/axios';

import './App.css';
import { getLoggedUser } from './services/authentication';
import { getUserId } from './services/localStorage';
import { Route, Switch, withRouter } from 'react-router';
import { getPosts } from './services/posts';

class App extends Component {
  constructor () {
    super();
    this.state = {
      posts: [],
      searchValue: "",
      loadedPosts: false,
      section: "posts",
      loginOk: false,
      currentUser: {},
    };
    this.onSearch = this.onSearch.bind(this);
    this.onProfileClick = this.onProfileClick.bind(this);
    this.onLogoClick = this.onLogoClick.bind(this);
    this.onLoginComplete = this.onLoginComplete.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount () {
    const userId = getUserId();
    if (userId) {
      try {
        await this.getUser(userId);
        this.props.history.push('/');
        this.loadPosts();
      } catch (error) {
        console.log(error);
        this.props.history.push('/login');
      }
    } else {
      this.props.history.push('/login');
    }
  }

  async getUser(userId) {
    const user = await getLoggedUser(userId);
    this.setState({ currentUser: user });
  }

  async loadPosts() {
    const posts = await getPosts();
    this.setState({ posts, loadedPosts: true });
  }

  onLogout () {
    this.setState({ currentUser: {} });
  }

  onSearch (value) {
    this.setState({ searchValue: value });
  }

  onProfileClick () {
    this.props.history.push('/profile');
  }

  onLogoClick () {
    this.props.history.push('/');
  }

  async onLoginComplete() {
    const userId = getUserId();
    if (userId) {
      try {
        await this.getUser(userId);
        this.props.history.push('/');
        this.loadPosts();
      } catch (error) {
        console.log(error);
        this.props.history.push('/login');
      }
    } else {
      this.props.history.push('/login');
    }
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
      searchValue,
      loadedPosts = false,
    } = this.state;

    if (!loadedPosts) {
      return (
        <p>Loading...</p>
      );
    }

    let filteredPosts = [...posts];
    if (searchValue) {
      filteredPosts = filteredPosts.filter((p) => p.text.toLowerCase().includes(searchValue.toLowerCase()));
    }

    return <PostList posts={filteredPosts} />;
  }

  renderProfile () {
    const {
      currentUser: { avatar, username, bio } = {},
    } = this.state;
    return (
      <section className="row my-3">
        <Profile
          avatar={avatar}
          username={username}
          bio={bio}
          onLogout={this.onLogout}
        />
      </section>
    );
  }

  renderMainContent () {
    return (
      <div>
        <Switch>
          <Route path="/login">
            <Login onLoginComplete={this.onLoginComplete} />
          </Route>
          <Route path="/profile">
            {this.renderProfile()}
          </Route>
          <Route path="/">
            <div>
              {this.renderSearchBar()}
              {this.renderPostList()}
            </div>
          </Route>
        </Switch>
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

export default withRouter(App);
