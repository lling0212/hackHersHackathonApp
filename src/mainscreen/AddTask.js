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
    contextInfo.setShowAddTask(false);

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
        onChange={handleNameSetting}>
      </input>
 
      <input
        type="number"
        placeholder="# of Blocks"
        value={timeblocks}
        onChange={handleBlocksSetting}
        onFocus={() => timeblocks === 0 && setBlocks('')}>
      </input>

      <button
        type = "button"
        onClick = {handleCancel}>
        Cancel 
      </button>

      <button type = "submit">Add</button>
      </form>
    </div>
);
};

export default AddTask
