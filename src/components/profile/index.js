import React from 'react';
import { useHistory } from 'react-router';
import { logout } from '../../services/authentication';

import './profile.css';

const Profile = (props) => {
  const {
    avatar,
    username,
    bio,
    onLogout,
  } = props;

  const history = useHistory();

  const onLogoutClick = async () => {
    try {
      await logout();
      history.push("/login");
      onLogout();
    } catch (error) {
      console.log(error);
    }
  };

  const renderContent = () => {
    return(
      <main>
        <section className="my-3">
          <img src={avatar} className="avatar" alt="avatar img"/>
        </section>
        <section className="my-3">
          <span><b>{username}</b></span>
        </section>
        <section className="my-3 px-3">
          <p>{bio}</p>
        </section>
        <section>
          <button onClick={onLogoutClick} type="button" class="btn btn-link">Salir</button>
        </section>
      </main>
    );
  };

  return renderContent();
};

export default Profile;
