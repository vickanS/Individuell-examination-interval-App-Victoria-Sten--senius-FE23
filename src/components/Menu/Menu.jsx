import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import menuicon from '../../assets/menuicon.svg'
import '../../Styles/Menu.css';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='menu-container'>
            <motion.img
                src={menuicon}
                alt='menu icon'
                className='menu-icon'
                onClick={toggleMenu}
                style={{ filter: isOpen ? 'invert(1)' : 'invert(0)' }}  
                transition={{ delay: 0.3 }} 
            />

            {isOpen && (
                <motion.div
                    className='menu-slide'
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ delay: 0.2 }}
                >
                    <ul>
                        <li>
                            <Link to= '/' onClick={toggleMenu}>
                            Close Interval App
                            </Link>
                        </li>
                        <h1>Timers</h1>
                        <li>
                            <Link to='/analog-timer' onClick={toggleMenu}>
                                Analog Timer
                            </Link>
                        </li>
                        <li>
                            <Link to='/digital-timer' onClick={toggleMenu}>
                                Digital Timer
                            </Link>
                        </li>
                    </ul>
                </motion.div>
            )}
        </div>
    );
};








export default Menu;