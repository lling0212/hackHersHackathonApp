import React from 'react';
import { useContext } from 'react';
import Context from '../Context.js';
import '../grid.css';

const Task = ({ index }) => {
  const { tasks, selectedTile, showTimer, showMainScr } = useContext(Context);
  const { puzzleMode, puzzleChosen } = useContext(Context);
  const { setSelectedTile, setShowTimer, setShowMainScr } = useContext(Context);
  const task = tasks[index];

  const imageName = `${puzzleChosen}_part_00${index + 1}.jpg`
  console.log(imageName)

  let myClass = "grid-item";
  if (task && task.state === "complete") {
    myClass = "grid-item complete"
  }
  if (task && task.state === "started") {
    myClass = "grid-item started"
  }
  if (task && task.state === "not started") {
    myClass = "grid-item notstarted"
  }   

  return (
    <div className={myClass}
      onClick={() => {
        if (task) {
          setSelectedTile(index)
          setShowTimer(true)
          setShowMainScr(false)
        }
      }}>
      {puzzleMode && task && task.state === "complete" ? (
        <img src={imageName} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      ) : (
        <div className="task-text-box">
          <div className="task-title">{task && task.text}</div> 
          <div className="task-progress">{task && `${task.doneblocks} / ${task.timeblocks}`}</div>
        </div>
      )}
    </div>
  );
}

export default Task
