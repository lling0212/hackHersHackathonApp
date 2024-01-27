import './App.css';
import { useState } from 'react';
import Grid from './mainscreen/Grid.js';
import AddTask from './mainscreen/AddTask.js';
import ImageSelector from './mainscreen/ImageSelector.js';
import Header from './mainscreen/Header.js';
import Timer from './timerscreen/Timer.js';

function App() {

  // control how components are rendered
  const [showMainScr, setShowMainScr] = useState(true);
  const [showAddTask, setShowAddTask]  = useState(false);
  const [showTimer, setShowTimer]  = useState(false);
  const [puzzleChosen, setPuzzleChosen] = useState("image1.jpg"); // img name to be changed
  const [puzzleMode, setPuzzleMode] = useState(true);
  const [selectedTile, setSelectedTile] = useState(0); // index of chosen tile: 0 - 8

  // actual data
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Review CIT 596 notes',
      timeblocks: 2,
      doneblocks: 0,
      showPuzzle: false,
      state: "not started",
    },
    {
      id: 2,
      text: 'Complete CIT 593 project',
      timeblocks: 5,
      doneblocks: 2,
      showPuzzle: false,
      state: "started"
    },
    {
      id: 3,
      text: 'Prep for coding interview',
      timeblocks: 3,
      doneblocks: 3,
      showPuzzle: false,
      state: "complete"
    },
    // can add some more sample task
  ])

  // Functions to modify tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter(
      (task) => task.id !== id
      )
    )
  }

  const completeTask = (id) => {
    setTasks(tasks.map(
      (task) => task.id === id 
        ? {...task, state: "complete"} 
        : task
    ));
  }

  const startTask = (id) => {
    setTasks(tasks.map(
      (task) => task.id === id 
        ? {...task, state: "started"} 
        : task
    ));
  }

  const addTimeToTask = (id) => {
    setTasks(tasks.map(
      (task) => task.id === id 
        ? {...task, doneblocks: task.doneblocks + 1} 
        : task
    ));    
  }

  const toggleShowImage = (id) => {
    // check if the && syntax works
    setTasks(tasks.map(
      (task) => task.id === id && task.state === "completed"
        ? {...task, showPuzzle: !task.showPuzzle} 
        : task
    ));
  }

  const addTask =(task) => {
    // TO DO - add a task to the grid
    // make sure you don't add if 
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ... task}
    setTasks([...tasks, newTask])
  }

  // functions to modify image selected?


  
  return (
    // change classNames
    <div className="container"> 
      {showMainScr 
      ? <>
          <Header 
            title = "Task Tracker"
            onAdd = {()=>setShowAddTask(!showAddTask)} // for add task form button
            onToggle = {()=>setShowAddTask(!showAddTask)} // toggle between puzzle modes
          />
          <Grid 
            tasks={tasks} 
            onDelete={deleteTask}
            // onClick={} // start timer, make main disappear when a tile is clicked


            // change seleceted Tile
            // imageChosen={}
            // setImageChosen={}
          />
        </>
      : <Timer  />} 

      {showAddTask && <AddTask onAdd={addTask}/>}

    </div>
  );
}

//onComplete task={task} onDelete={deleteTask}

// default: show main (grid, image selector, add task controlled by button)
// click on tile: 

export default App;
