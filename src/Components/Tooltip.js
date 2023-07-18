import React from 'react';
import './Tooltip.css';

function Tooltip({ description, languages, isVisible }) {
    return (
        <div className={`tooltip-container ${isVisible ? 'visible' : ''}`}>
            <div className='tooltip-content'>
                <h3>Description</h3>
                <p>{description}</p>
                <h3>Languages</h3>
                <p>{languages}</p>
            </div>
        </div>
    );
}

export default Tooltip;
