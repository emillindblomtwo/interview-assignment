import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './postModal.css';
import {replaceImageSize} from '../../utils/utils';
import {deletePost, updatePost} from '../../api/api';

const Modal = ({post, close}) => {
  const [description, setDescription] = useState(post.description);

  // TODO: Add outside click handler to close modal
  // TODO: Scrolling / modal positioning

  const onDelete = () => {
    deletePost(post.id)
      .catch((e) => console.error(e))
      .finally(() => close());
    // TODO: Handle error and give feedback
  };

  const onUpdate = () => {
    updatePost(post.id, {...post, description})
      .catch((e) => console.error(e))
      .finally(() => close());
    // TODO: Handle error and give feedback
  };

  const imageData = post.data.media[0];
  return ReactDOM.createPortal(
    <div className="modalWrapper">
      <div className="modal" role="dialog" aria-modal="true">
        <h3 className="modalTitle">{post.description}</h3>
        <div className="descriptionInput">
          <label className="descriptionLabel">Edit description</label>
          <textarea
            className="descriptionField"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <img
          className="postImage"
          src={replaceImageSize(
            imageData.image,
            300,
            Math.round((imageData.width / imageData.height) * 300),
          )}
        />
        <button className="close" type="button" onClick={close}>
          Close post
        </button>
        <button className="save" type="button" onClick={onUpdate}>
          Save changes
        </button>
        <button className="delete" type="button" onClick={onDelete}>
          Delete post
        </button>
      </div>
      <div className="overlay"></div>
    </div>,
    document.body,
  );
};

export default Modal;
