import './App.css';
import { useState, useContext } from 'react';
import Grid from './mainscreen/Grid.js';
import AddTask from './mainscreen/AddTask.js';
import ImageSelector from './mainscreen/ImageSelector.js';
import Context from './Context.js';
import Header from './mainscreen/Header.js';
import Timer from './timerscreen/Timer.js';

function App() {

  // control how components are rendered
  const [showMainScr, setShowMainScr] = useState(true);
  const [showAddTask, setShowAddTask]  = useState(false);
  const [allCompleted, setAllCompleted]  = useState(false);
  const [showTimer, setShowTimer]  = useState(false);
  const [puzzleChosen, setPuzzleChosen] = useState("test.jpeg"); // img name to be changed
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
    // add a task to the grid
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ... task}
    if (tasks.length < 9) { 
      setTasks([...tasks, newTask])
    }
  }

  // functions to modify image selected?


  
  return (
    // change classNames
    <div className="container"> 
      <Context.Provider value = {{
        showMainScr,
        setShowMainScr,
        showAddTask,
        setShowAddTask,
        showTimer,
        setShowTimer,
        puzzleChosen,
        setPuzzleChosen,
        puzzleMode,
        setPuzzleMode,
        selectedTile,
        setSelectedTile,
        tasks,
        setTasks,
        deleteTask,
        completeTask,
        startTask,
        addTimeToTask,
        toggleShowImage,
        addTask,}}>

      {showMainScr ? (
        <>
          <Header 
            onAdd = {()=>setShowAddTask(!showAddTask)} // for add task form button
          />

          <div className={`main-content ${showAddTask ? 'row-layout' : ''}`}>
          
          <Grid // may not need below parameters as we have useContext
            tasks={tasks} 
            onClick={()=> {
              setShowAddTask(!showAddTask)
            }} // when tile is clicked: start timer, make main disappear when a tile is clicked
            // modify seleceted Tile; imageChosen={}; setImageChosen={}
          />
          
          <div className={showAddTask ? 'add-task-visible' : 'add-task-hidden'}>
          {showAddTask && <AddTask onAdd={addTask}/>}
          </div>
          
          </div>
          
        </>
        

      ): (<Timer 
          // task={selectedTile} 
          // tasks={tasks} 
          // onComplete={completeTask} 
          // onDelete={deleteTask}
          // onStart={startTask}
          // onAddTime={addTimeToTask} 
        />
      )} 
      {showMainScr && <ImageSelector/>}
      </Context.Provider>
      
    </div>
    
  );
}

export default App;
