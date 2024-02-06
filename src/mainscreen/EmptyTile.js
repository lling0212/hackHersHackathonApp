import React from 'react';
import { useContext } from 'react';
import Context from '../Context.js';

const EmptyTile = ({ index }) => {

    const { puzzleMode, puzzleChosen, allCompleted } = useContext(Context); 
    const imageName = `${puzzleChosen}_part_00${index + 1}.jpg`; 

    return (
        <div>
            <div className="grid-item"> 
                {(puzzleMode && allCompleted) && <img src={imageName} style={{ maxWidth: '100%', maxHeight: '100%' }}/>}
            </div>
        </div>
    )
}

export default EmptyTile
