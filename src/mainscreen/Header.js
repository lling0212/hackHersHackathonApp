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
        <h1> Pomo Puzzle </h1>
        {/* <h2>{ puzzleChosen }</h2> */}
        <GenericButton color="#1d4ed8 " text="Add Task" textColor="white" onClick={onAdd}/>
      </header>
    </div>
  )
}

export default Header
