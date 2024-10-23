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
            <img
                src={menuicon}
                alt='menu icon'
                className='menu-icon'
                onClick={toggleMenu}
            />

            {isOpen && (
                <motion.div
                    className='menu-slide'
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ delay: 0.3 }}
                >
                    <ul>
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