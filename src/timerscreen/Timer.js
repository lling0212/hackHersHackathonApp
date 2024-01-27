import React, { useContext } from 'react'
import Context from '../Context'

const Timer = () => {
  const {selectedTile} = useContext(Context);

  return (
    <div>
      Timer
      {selectedTile}
    </div>
  )
}

export default Timer
