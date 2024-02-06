import React from 'react'

const GenericButton = ({color, text, textColor, onClick }) => {
  return (
    <div>
      <button
      onClick = {onClick}
      style={{ backgroundColor: color, color: textColor}}
      className = 'genericbtn'
      >
        {text}
      </button>
    </div>
  )
}

export default GenericButton


