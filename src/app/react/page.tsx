import Header from '@/components/Header';
import React from 'react';

const Page: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Welcome to My Page</h1>
            <p>This is a sample page created with React and TypeScript.</p>
        </div>
    );
};

export default Page;