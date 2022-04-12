import React, {useEffect, useState} from 'react';
import {getImpacters, getPosts} from '../../api/api';
import './impacters.css';
import Post from '../post/post';
import {replaceImageSize} from '../../utils/utils';

const PAGE_SIZE = 18;

const Posts = () => {
  const [impacters, setImpacters] = useState([]);

  useEffect(() => {
    const getAllImpacters = async (page) => {
      const allImpacters = await getImpacters();
      setImpacters(allImpacters);
    };

    getAllImpacters();
  }, []);

  return (
    <>
      <h1 className="title">Impacters</h1>
      <div className="impacters">
        {impacters.map((impacter) => (
          <div className="impacter">
            <h3 class="name">{impacter.name}</h3>
            <img
              class="image"
              src={replaceImageSize(impacter.profile_image, 300, 300)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
