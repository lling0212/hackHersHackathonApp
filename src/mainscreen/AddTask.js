import React from 'react'
import { useState, useContext } from 'react'
import Context from '../Context.js'

const AddTask = () => {
  
      const [text,setName] = useState('');
      const [timeblocks,setBlocks] = useState(0);
      const contextInfo = useContext(Context);
      const doneblocks = 0;
      const showPuzzle = false;
      const state = "not started";

      const handleNameSetting = (event) => {
        setName(event.target.value);
  };
  
      const handleBlocksSetting = (event) => {
        setBlocks(event.target.value);
  };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (!text){
          alert('Woops !You forgot to add your Task!')
          return
        }
        
        contextInfo.addTask({ text, timeblocks, doneblocks, showPuzzle, state });

        // {
        //   id: 1,
        //   text: 'Review CIT 596 notes',
        //   timeblocks: 2,
        //   doneblocks: 0,
        //   showPuzzle: false,
        //   state: "not started",
        // },
    
        // after appending resetting the form fields
        setName('');
        setBlocks(''); 

  };
    
      const handleCancel = (event) => {
        setName('');
        setBlocks('');
        contextInfo.setShowAddTask(false);

  };


  return (
    <div>
       <label className="add-task-form"></label>
      <form onSubmit = {handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={text}
        onChange={handleNameSetting}
      >
         </input>
 
      <input
              type="number"
              placeholder="# of Blocks"
              value={timeblocks}
              onChange={handleBlocksSetting}
            >
        </input>

    <button
      type = "button"
      onClick = {handleCancel} 
    >
    Cancel 
    </button>

    <button
    type = "submit"
    
    >
      Add Task

    </button>

  </form>
  
    </div>
);
};

export default AddTask
