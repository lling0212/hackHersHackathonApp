import React from 'react';
import '/Users/mckennareale/Downloads/IntelliJ_files/hackHersHackathonApp/src/index.css'; // Import your CSS file

const Grid = () => {
  const gridSize = 3; // since it's a 3x3 grid
  const gridNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // the numbers to display in the grid

  return (
    <div className="grid-container">
      {gridNumbers.map(number => (
        <div key={number} className="grid-item">
          {number}
        </div>
      ))}
    </div>
  );
};

export default Grid;