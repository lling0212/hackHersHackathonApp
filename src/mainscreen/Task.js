import React from 'react';

const Task = ( {key} ) => {


  return (
    <div className="grid-item">
        <p>TASK</p>
        {key}
    </div>
  )
}

export default Task
