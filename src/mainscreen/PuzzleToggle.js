import React, { useState } from 'react'
import './PuzzleToggle.css';

const PuzzleToggle = () => {

    const [puzzleMode, setPuzzleMode] = useState(false)
    
    // toggleMode toggles the value every time the fn is called
    const toggleMode = () => {
        setPuzzleMode(!puzzleMode);
    };

  return (
    <div>
    <label className="puzzle-toggle">
    <input
        type="checkbox"
        checked={isPuzzleMode}
        onChange={togglePuzzleMode}
        ></input>

    <span className="slider round"></span>
    Puzzle Mode

    </label>

    </div>
  )
}

export default PuzzleToggle
