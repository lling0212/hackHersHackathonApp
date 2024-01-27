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
          console.log(`before: ${contextInfo.puzzleMode}`)
          contextInfo.setPuzzleMode(!contextInfo.puzzleMode)
          console.log(`after: ${contextInfo.puzzleMode}`)
        }}>
        </input>

    <span className="slider round"></span>
    <p>Puzzle Mode</p>

    </label>

    </div>
  )
}

export default PuzzleToggle
