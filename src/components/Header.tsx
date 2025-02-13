import React from 'react';

interface HeaderProps {
    name: string;
    firstname?: string;
    age?: number;
}

const Header: React.FC<HeaderProps> = ({name , firstname , age}) => {
    return (
        <header>
            <h1>Welcome to {name} {firstname} Website with {age} year</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;