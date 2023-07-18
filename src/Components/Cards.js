import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1> ABOUT ME</h1>

            <p className='about-me'> I am currently studying computer science at Full sail university; The program is a 20-month bachelor's degree.<br></br>
                I have an MTA in Python. During my degree program, I worked on a mobile ordering app that was completed in 2 months; I also worked<br></br>
                on a personal website in a month. These projects that I have done in class show that I can pick up new languages and skills in a short<br></br>
                amount of time and accel in them. My work experience shows that I am dedicated to work and don't bounce around from job to job.<br></br>
                I am looking for job experience in the field out of college and a possible internship. In my free time I love to snowboard,<br></br>
                play video games, work on cars, play the saxophone, build robots, and collect records.<br></br>
            </p>

            <br />
            <br />
            <br />

            <h1>PROJECTS</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/Skyline.png'
                            text='Mobile ordering app for Skyline Chili'
                            label='Skyline Chili App'
                            path='https://github.com/TLT-1/SkylineChiliApp'
                            description='This is a mobile ordering app for the restaurant Skyline Chili. This was a project made as a class assignment where me and two other students had to pick up new languages that we have never used and ship a product in under two months.'
                            languages='Languages: XML, Java, Kotlin, Android Studio'
                        />
                        <CardItem
                            src='images/travel.jpg'
                            text='Travel booking destination website'
                            label='Travel Website'
                            path='https://github.com/TLT-1/TravelWebsite'
                            description='This is a travel booking destination website. It was created as a final project for my Web Design and Development class at university.'
                            languages='Languages: HTML, CSS, JavaScript, Bootstrap'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
