import React from 'react';
import '../index.css'; 
import Context from '../Context.js';
import { useContext } from 'react';
import Task from './Task.js';
import EmptyTile from './EmptyTile.js'

const Grid = () => {
  const gridNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
  const { tasks } = useContext(Context);

  return (
    <div className="grid-container">
      
      {gridNumbers.map((number, index) => (
        tasks.length >= number
          ? <Task key={number} index={index}/>
          : <EmptyTile key={number} index={index} />
      ))}
      
    </div>
  );
};

export default Grid;