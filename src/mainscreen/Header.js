// title of our app; potentially add toggle between timer / main screen here?
import React from 'react'
import { useState, useContext } from 'react';
import Context from '../Context.js';
import GenericButton from '../timerscreen/GenericButton.js';
import PuzzleToggle from './PuzzleToggle.js';

const Header = ({onAdd}) => {
  return (
    <div>
      <header className='header'>
        <PuzzleToggle/>
        <h1> Pomo Puzzle </h1>
        <GenericButton color="#7F00FF" text="Add Task" textColor="white" onClick={onAdd}/>
      </header>
    </div>
  )
}

export default Header
