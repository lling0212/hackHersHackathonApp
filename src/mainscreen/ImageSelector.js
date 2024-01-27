// allows user to select a puzzle image

import React from 'react';
import '../index.css'; // Import your CSS file

const ImageSelector = () => {
  const puzzles = ['Puzzle A', 'Puzzle B', 'Puzzle C'];

  return (
    <div className="puzzle-container">
      {puzzles.map(puzzle => (
        <div key={puzzle} className="puzzle">
          {puzzle}
        </div>
      ))}
    </div>
  );
};

export default ImageSelector;