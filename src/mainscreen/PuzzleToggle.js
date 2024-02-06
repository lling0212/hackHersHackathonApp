import React, { useState, useContext } from 'react'
import Context from '../Context.js';

const PuzzleToggle = () => {
  const contextInfo = useContext(Context);

  return (
    <div>
    <label className="puzzle-toggle">
        <input
        type="checkbox"
        checked={contextInfo.puzzleMode}
        onChange={() => {
          contextInfo.setPuzzleMode(!contextInfo.puzzleMode)
        }}>
        </input>

    <span className="slider round"></span>
    <p className='puzzle-mode-title'>Puzzle Mode</p>

    </label>

    </div>
  )
}

export default PuzzleToggle
