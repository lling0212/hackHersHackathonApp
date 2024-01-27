import React from 'react';
import { useContext } from 'react';
import Context from '../Context.js';

const EmptyTile = ({ number }) => {

    const { puzzleMode } = useContext(Context);  
    
    return (
        <div>
            <div className="grid-item"> 
                {puzzleMode && <img src="test.jpeg" style={{ maxWidth: '100%', maxHeight: '100%' }}/>}
            </div>
        </div>
    )
}

export default EmptyTile
