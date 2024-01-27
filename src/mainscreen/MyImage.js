import React from 'react';
import Context from '../Context';
import { useContext } from 'react';

const MyImage = ({ imageChosen }) => {
  const { setPuzzleChosen } = useContext(Context);

  return (
    <div className="puzzle"
      onClick = { () => {setPuzzleChosen(imageChosen)} } >
        <img src={ imageChosen } style={{ maxWidth: '90%', maxHeight: '90%' }} />
    </div>
  )
}

export default MyImage
