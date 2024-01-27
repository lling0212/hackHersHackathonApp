import React from 'react';
import Context from '../Context';
import { useContext } from 'react';
import MyImage from './MyImage.js';

const ImageSelector = () => {
  const puzzles = ['puzzle1.jpeg', 'test.jpeg', 'puzzle3.jpeg'];

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