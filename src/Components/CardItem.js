import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from './Tooltip';

function CardItem(props) {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const handleTooltipToggle = () => {
        setIsTooltipVisible(!isTooltipVisible);
    };

    return (
        <>
            <li className='cards__item'>
                <div
                    className='cards__item__link'
                    onMouseEnter={handleTooltipToggle}
                    onMouseLeave={handleTooltipToggle}
                >
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img src={props.src} alt='Travel Image' className='cards__item__img' />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </div>
                <Tooltip
                    description={props.description}
                    languages={props.languages}
                    isVisible={isTooltipVisible}
                />
            </li>
        </>
    );
}

export default CardItem;
