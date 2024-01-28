// title of our app; potentially add toggle between timer / main screen here?
import React from 'react'
import { useState, useContext } from 'react';
import Context from '../Context.js';
import GenericButton from '../timerscreen/GenericButton.js';
import PuzzleToggle from './PuzzleToggle.js';

const Header = ({onAdd}) => {
  const { puzzleChosen } = useContext(Context);

  return (
    <div>
      <header className='header'>
        <PuzzleToggle/>
        <img src="/finalLogo.png" alt="Hackathon Logo" style={{ width: '300px', height: 'auto' }}/>
        {/* <h2>{ puzzleChosen }</h2> */}
        <GenericButton color="#00A36C		 " text="Add Task" textColor="white" onClick={onAdd}/>
      </header>
    </div>
  )
}

export default Header
