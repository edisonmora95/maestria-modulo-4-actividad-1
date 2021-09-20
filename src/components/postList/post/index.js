import React from 'react';

const Post = () => {

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
        <span>3min ago</span>
      </article>
    );
  };

  const renderLikeBtn = () => {
    return (
      <article className="col-6" style={{ textAlign: 'right' }}>
        <button type="button" className="btn btn-danger">
          <i className="bi-heart"></i>
          <span style={{ marginLeft: 5 }}>43k</span>
        </button>
      </article>
    );
  };

  const renderAuthor = () => {
    return (
      <section style={{ textAlign: 'left' }} className="my-2">
        <span style={{ fontWeight: 'bold' }}>@eric</span>
      </section>
    );
  };

  const renderText = () => {
    return (
      <section>
        <p className="card-text" style={{ textAlign: "justify" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </section>
    );
  };

  const renderComments = () => {
    return (
      <section style={{ textAlign: 'left' }} className="my-2">
        <i className="bi-chat-right"></i>
        <span style={{ marginLeft: 5 }}>Comments (15)</span>
      </section>
    );
  };

  const renderContent = () => {
    return (
      <main className="card">
        <img src="https://i.pinimg.com/originals/07/d3/45/07d345396d4a96a46a1cacac42001635.jpg" alt="Logo"/>
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
