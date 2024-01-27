import React from 'react'
import '/Users/nikitasingh/git/HackHers Project/hackHersHackathonApp/src/index.css'

const PlayButton = ({onPlay}) => {
  return (
    <div>
    <button
    onClick={onPlay}
    className='playbtn'
    aria-label="Play"
    >

    <svg
    viewBox="0 0 24 24"
        width="24" height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="play-icon"
    >
      
      <polygon points="5 3 19 12 5 21 5 3">

      </polygon>
      </svg>
      </button>
    
    
      
    </div>
  )
}

export default PlayButton
