import React from 'react'
import { useState } from 'react'

const AddTask = () => {
  
      const [Name,setName] = useState('');
      const [Blocks,setBlocks] = useState('');

      const handleNameSetting = (event) => {
        setName(event.target.value);
  };
  
      const handleBlocksSetting = (event) => {
        setBlocks(event.target.value);
  };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (!Name){
          alert('Woops !You forgot to add your Task!')
          return
        }
        //  need to append the data -- TBD 
    
        // after appending resetting the form fields
        setName('');
        setBlocks(''); 

  };
    
      const handleCancel = (event) => {
        setName('');
        setBlocks('');
        

  };


  return (
    <div>
       <label className="add-task-form"></label>
      <form onSubmit = {handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={Name}
        onChange={handleNameSetting}
      >
         </input>
 
      <input
              type="number"
              placeholder="# of Blocks"
              value={Blocks}
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
