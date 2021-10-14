import React, { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Post = (props) => {
  const {
    img = 'http://placeimg.com/640/480',
    createdAt,
    likes: postLikes,
    author,
    description,
    comments,
  } = props;

  const time = dayjs(createdAt).fromNow();
  const [likes, setLikes] = useState(postLikes);
  const [likeBtnClicked, setLikeBtnClicked] = useState(false);

  const onLikeBtnClick = () => {
    if (likeBtnClicked) {
      setLikes(likes - 1);
      setLikeBtnClicked(false);
      return;
    }
    setLikes(likes + 1);
    setLikeBtnClicked(true);
  };

  const renderTimeAndLike = () => {
    return (
      <section className="row">
        {renderTime()}
        {renderLikeBtn()}
      </section>
    );
  };

  const renderTime = () => {
    return (
      <article className="col-6" style={{ textAlign: 'left' }}>
        <span>{time}</span>
      </article>
    );
  };

  const renderLikeBtn = () => {
    return (
      <article className="col-6" style={{ textAlign: 'right' }}>
        <button type="button" className="btn btn-danger" onClick={onLikeBtnClick}>
          <i className="bi-heart"></i>
          <span style={{ marginLeft: 5 }}>{likes}</span>
        </button>
      </article>
    );
  };

  const renderAuthor = () => {
    return (
      <section style={{ textAlign: 'left' }} className="my-2">
        <span style={{ fontWeight: 'bold' }}>{author.name}</span>
      </section>
    );
  };

  const renderText = () => {
    return (
      <section>
        <p className="card-text" style={{ textAlign: "justify" }}>{description}</p>
      </section>
    );
  };

  const renderComments = () => {
    return (
      <section style={{ textAlign: 'left' }} className="my-2">
        <i className="bi-chat-right"></i>
        <span style={{ marginLeft: 5 }}>Comments ({comments})</span>
      </section>
    );
  };

  const renderContent = () => {
    return (
      <main className="card">
        <img src={img} alt="Logo"/>
        <section className="card-body">
          {renderTimeAndLike()}
          {renderAuthor()}
          {renderText()}
          {renderComments()}
        </section>
      </main>
    );
  };

  return renderContent();
};

export default Post;
