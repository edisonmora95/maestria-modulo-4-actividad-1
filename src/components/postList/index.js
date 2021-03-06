import React from 'react';
import Post from './post';

const PostList = (props) => {
  const {
    posts = [],
  } = props;

  const renderContent = () => {
    return (
      <section className="row">
        {posts.map((post) => {
          return <article className="col-12 col-sm-6 col-md-4 my-2" key={`post=${post.id}`}>
            <Post
              id={post.id}
              img={post.image}
              createdAt={post.createdAt}
              likes={post.likes}
              author={post.author}
              description={post.text}
              comments={post.comments.length}
            />
          </article>
        })}
      </section>
    );
  };

  return renderContent();
};

export default PostList;
