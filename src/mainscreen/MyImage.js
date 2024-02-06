import React from 'react';
import Context from '../Context';
import { useContext } from 'react';

const MyImage = ({ imageChosen }) => {
  const { puzzleChosen,setPuzzleChosen } = useContext(Context);

  const isSelected = imageChosen === puzzleChosen;
  const imageClass = isSelected ? "puzzle selected" : "puzzle";

  return (
    <div className={imageClass}
      onClick = { () => {setPuzzleChosen(imageChosen)} } >
        <img src={ `${imageChosen}.png` } style={{ maxWidth: '90%', maxHeight: '90%' }} />
    </div>
  )
}

export default MyImage
