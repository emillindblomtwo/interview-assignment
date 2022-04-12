import React from 'react';
import {replaceImageSize} from '../../utils/utils';
import './post.css';

const Post = ({post, setSelectedPost}) => {
  const imageData = post.data.media[0];
  return (
    <div className="post" onClick={() => setSelectedPost(post)}>
      <h6 className="description">{post.description}</h6>
      {/* TODO: Use multiple images if available, guard data */}
      <img
        className="post-image"
        src={replaceImageSize(
          imageData.image,
          200,
          Math.round((imageData.width / imageData.height) * 200),
        )}
      />
    </div>
  );
};

export default Post;
