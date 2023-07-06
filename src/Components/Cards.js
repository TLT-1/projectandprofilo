import React from 'react';
import { Link } from "react-router-dom";
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1> ABOUT ME</h1>


            <br></br>
            <br></br>
            <br></br>



            <h1>PROJECTS</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src='images/Skyline.png' text="Mobile ordering app for Skyline Chili" label='Skyline Chili App' path='https://github.com/TLT-1/SkylineChiliApp' />
                        <CardItem src='images/travel.jpg' text='Travel booking destionation website' label='Travel Website' path='https://github.com/TLT-1/TravelWebsite' />
                    </ul>
                    
                </div>
            </div>
        </div>
    );

}

export default Cards;