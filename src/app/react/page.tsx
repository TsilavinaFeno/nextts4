import Header from '@/components/Header';
import React from 'react';

const Page: React.FC = () => {
    return (
        <>
            <Header name={'ITCA'} firstname='Ankadikely' age={26} />
            <main>
                <h2>Home </h2>
                <p>Welcome to my website!</p>
            </main>
        </>
    );
};

export default Page;