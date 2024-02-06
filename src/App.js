import './App.css';
import { useState, useContext, useEffect } from 'react';
import Grid from './mainscreen/Grid.js';
import AddTask from './mainscreen/AddTask.js';
import ImageSelector from './mainscreen/ImageSelector.js';
import Context from './Context.js';
import Header from './mainscreen/Header.js';
import Timer from './timerscreen/Timer.js';

function App() {

  const [showMainScr, setShowMainScr] = useState(true);
  const [showAddTask, setShowAddTask]  = useState(false);
  const [allCompleted, setAllCompleted]  = useState(false);
  const [showTimer, setShowTimer]  = useState(false);
  const [puzzleChosen, setPuzzleChosen] = useState('image_1'); 
  const [puzzleMode, setPuzzleMode] = useState(true);
  const [selectedTile, setSelectedTile] = useState(0); 

  
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
  ])

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

  useEffect(() => {
    
    const completedTasksCount = tasks.reduce((count, task) => {
      if (task.state === "complete") {
        return count + 1;
      }
      return count;
    }, 0);
  
    if (completedTasksCount === tasks.length) {
      setAllCompleted(true);
    }

  }, [tasks, allCompleted]);

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
    setTasks(tasks.map(
      (task) => task.id === id && task.state === "completed"
        ? {...task, showPuzzle: !task.showPuzzle} 
        : task
    ));
  }

  const addTask =(task) => {
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ... task}
    if (tasks.length < 9) { 
      setTasks([...tasks, newTask])
      setAllCompleted(false);
    }
  }
  
  return (
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
        allCompleted,
        setAllCompleted,
        deleteTask,
        completeTask,
        startTask,
        addTimeToTask,
        toggleShowImage,
        addTask,}}>

      {showMainScr ? (
        <>
          <Header onAdd = {()=>setShowAddTask(!showAddTask)} />
          <div className={`main-content ${showAddTask ? 'row-layout' : ''}`}>
            <Grid
              tasks={tasks} 
              onClick={()=> {
                setShowAddTask(!showAddTask)
              }} 
            />
            <div className={showAddTask ? 'add-task-visible' : 'add-task-hidden'}>
              {showAddTask && <AddTask onAdd={addTask}/>}
            </div>
          </div>
        </>
      ): (<Timer />
      )} 
      {showMainScr && <ImageSelector/>}
      </Context.Provider>
    </div>
    
  );
}

export default App;
