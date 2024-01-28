import React from 'react';
import { useContext } from 'react';
import Context from '../Context.js';

const EmptyTile = ({ number }) => {

    const { puzzleMode, puzzleChosen, allCompleted } = useContext(Context);  
    
    return (
        <div>
            <div className="grid-item"> 
                {puzzleMode && allCompleted && <img src={puzzleChosen} style={{ maxWidth: '100%', maxHeight: '100%' }}/>}
            </div>
        </div>
    )
}

export default EmptyTile
