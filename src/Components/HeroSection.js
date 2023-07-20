import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Software Developer</h1>
            <p> Hi, I'm Noah Marean. A passionate Software Developer</p>
            <p>based in the Orlando area.</p>
            <div className="hero-btns">
                {/*<Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Linked in</Button>*/}
                {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>GitHub <i className='far fa-play-circle' /></Button> */}
                <a class='social-icon-link twitter' href="https://www.linkedin.com/in/noah-marean-069671238/"><big><big><big><big><i class='fab fa-linkedin' /></big></big></big></big><span class="tab"></span></a>
                <a class='social-icon-link twitter' href="https://github.com/TLT-1/"><big><big><big><big><i class='fab fa-github' /></big></big></big></big></a>

            </div>
        </div>
    );
}

export default HeroSection;