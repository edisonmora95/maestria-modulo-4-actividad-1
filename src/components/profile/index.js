import React from 'react';

import './profile.css';

const Profile = (props) => {
  const {
    avatar,
    username,
    bio,
  } = props;

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
      </main>
    );
  };

  return renderContent();
};

export default Profile;
