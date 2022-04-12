import React, {useEffect, useState} from 'react';
import {getPosts, updatePost} from '../../api/api';
import './posts.css';
import Post from '../post/post';
import PostModal from '../postModal/postModal';

const PAGE_SIZE = 18;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  // TODO: Properly update list when post is deleted
  // TODO: Keep selected post as index in order to pass to modal for navigation left and right
  // TODO: "New post" button that opens modal with empty post and an "upload image button"

  const updatePosts = async (page) => {
    const newPosts = await getPosts(PAGE_SIZE, page);
    setPosts(newPosts);
  };

  const onClose = () => {
    setSelectedPost(null);
    updatePosts(page);
  };

  useEffect(() => {
    updatePosts(0);
  }, []);

  useEffect(() => {
    updatePosts(page);
  }, [page]);

  return (
    <>
      {selectedPost && <PostModal post={selectedPost} close={onClose} />}
      <h1 className="title">Posts</h1>
      <div className="pagination">
        <button
          className="button"
          disabled={page <= 0}
          onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <p className="pageNumber">Page {page + 1}</p>
        <button className="button" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
      <div className="posts">
        {posts.map((post) => (
          <Post
            key={post.description}
            post={post}
            setSelectedPost={setSelectedPost}
          />
        ))}
      </div>
    </>
  );
};

export default Posts;
