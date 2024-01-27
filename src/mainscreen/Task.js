import React from 'react';
import { useContext } from 'react';
import Context from '../Context.js';
import '../grid.css';

const Task = ({ index }) => {
  const { tasks, selectedTile, showTimer, showMainScr } = useContext(Context);
  const { puzzleMode, puzzleChosen } = useContext(Context);
  const { setSelectedTile, setShowTimer, setShowMainScr } = useContext(Context);
  const task = tasks[index];

  let myClass = "grid-item";
  if (task && task.state === "complete") {
    myClass = "grid-item complete"
  }
  if (task && task.state === "started") {
    myClass = "grid-item started"
  }


  return (
    <div className={myClass}
      onClick={() => {
        if (task && task.state !== "complete") {
          setSelectedTile(index)
          setShowTimer(true)
          setShowMainScr(false)
        }
      }}>
      {puzzleMode && task && task.state === "complete" ? (
        <img src={puzzleChosen} style={{ maxWidth: '100%', maxHeight: '100%' }} />
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
