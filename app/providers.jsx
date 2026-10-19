'use client';

import { useState, useEffect } from 'react';
import Navbar from '../src/components/layouts/Navbar';
import Footer from '../src/components/layouts/Footer';

export default function Providers({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        setDarkMode(savedMode === 'dark');
        document.documentElement.setAttribute('data-theme', savedMode === 'dark' ? 'dark' : 'light');
    }, []);

    useEffect(() => {
        const localTheme = darkMode ? 'dark' : 'light';
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [darkMode]);

    const handleDarkMode = () => {
        const nextMode = !darkMode;
        localStorage.setItem('darkMode', nextMode ? 'dark' : 'light');
        setDarkMode(nextMode);
    };

    return (
        <div className={`${darkMode ? 'dark' : ''} font-Poppins`}>
            <Navbar dark={handleDarkMode} data={darkMode} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
