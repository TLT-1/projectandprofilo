import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import * as Scroll from 'react-scroll';




function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => { if (window.innerWidth <= 960) { setButton(false); } else { setButton(true); } };


    const projectScroll = () => {
        window.scrollTo(0, 870);
    };


    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);



    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Noah Marean {/* <i className='fab fa-typo3' />   This is the trvl logo*/}
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>

                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/' className='nav-links' onClick={Scroll.animateScroll.scrollToTop}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/' className='nav-links' onClick={projectScroll}> {/* change this when i add the about section to the correct place */}
                                About
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/' className='nav-links' onClick={projectScroll}>

                                Projects
                            </Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/' className='nav-links' onClick={Scroll.animateScroll.scrollToBottom}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--primary'>Contact</Button>} */}
                </div>
            </nav>
        </>
    );
}

export default Navbar
