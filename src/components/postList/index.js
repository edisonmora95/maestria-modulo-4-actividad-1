import React from 'react';
import Post from './post';

const PostList = () => {
  const listLength = 5;

  const renderContent = () => {
    const posts = Array(listLength).fill(1);
    return (
      <section className="row">
        {posts.map((_, index) => {
          return <article className="col-12 col-sm-6 col-md-4 my-2" key={`post=${index}`}>
            <Post/>
          </article>
        })}
      </section>
    );
  };

  return renderContent();
};

export default PostList;
