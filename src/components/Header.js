import { useState } from 'react';

// Mock Bars3Icon component since we don't have @heroicons/react
const Bars3Icon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-5 py-4 bg-slate-900 shadow-lg z-50">
            <a className="font-bold text-cyan-400 text-lg whitespace-nowrap" href="#">
                Jothi Lakshmi S
            </a>

            <nav className="hidden md:block">
                <ul className="flex space-x-8 text-white font-medium">
                    <li className="hover:text-cyan-400 transition-colors"><a href="/">Home</a></li>
                    <li className="hover:text-cyan-400 transition-colors"><a href="/#about">About</a></li>
                    <li className="hover:text-cyan-400 transition-colors"><a href="/#projects">Projects</a></li>
                    <li className="hover:text-cyan-400 transition-colors"><a href="/#resume">Resume</a></li>
                    <li className="hover:text-cyan-400 transition-colors"><a href="/#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Menu */}
            {toggleMenu && (
                <nav className="absolute top-full left-0 w-full bg-slate-900 shadow-xl md:hidden z-40">
                    <ul
                        onClick={() => setToggleMenu(false)}
                        className="flex flex-col text-white text-center space-y-4 py-5"
                    >
                        <li className="hover:text-cyan-400 transition-colors"><a href="/">Home</a></li>
                        <li className="hover:text-cyan-400 transition-colors"><a href="#about">About</a></li>
                        <li className="hover:text-cyan-400 transition-colors"><a href="#projects">Projects</a></li>
                        <li className="hover:text-cyan-400 transition-colors"><a href="#resume">Resume</a></li>
                        <li className="hover:text-cyan-400 transition-colors"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            )}

            <button 
                onClick={() => setToggleMenu(!toggleMenu)} 
                className="block md:hidden z-50 p-1"
                aria-label="Toggle menu"
            >
                <Bars3Icon className="text-white h-7 w-7" />
            </button>
        </header>
    );
}