import React from 'react';
import Context from '../Context';
import { useContext } from 'react';

const MyImage = ({ imageChosen }) => {
  const { puzzleChosen,setPuzzleChosen } = useContext(Context);

  // checking if this is the selected file 
  const isSelected = imageChosen === puzzleChosen;
  // applying selected class if it is chosen 
  const imageClass = isSelected ? "puzzle selected" : "puzzle";

  return (
    <div className={imageClass}
      onClick = { () => {setPuzzleChosen(imageChosen)} } >
        <img src={ imageChosen } style={{ maxWidth: '90%', maxHeight: '90%' }} />
    </div>
  )
}

export default MyImage
