import React from 'react';
import Context from '../Context';
import { useContext } from 'react';
import MyImage from './MyImage.js';

const ImageSelector = () => {
  const puzzles = ['image_1', 'image_2', 'image_3'];

  return (
    <div className="puzzle-strip">
      <div className="puzzle-container">
        {puzzles.map((puzzle) => (
          <MyImage key={puzzle} imageChosen={puzzle}/>
        ))}
      </div>
    </div>
  );
};

export default ImageSelector;