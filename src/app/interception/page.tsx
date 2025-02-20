import Link from 'next/link';
import React from 'react';

const InterceptionPage: React.FC = () => {
    return (
        <div>
            <h1>Interception Page</h1>
            <p>Welcome to the interception page!</p>
            <Link href={`/interception/inter1`} style={{ color: 'blue' }} >
                To inter1 page
            </Link>
        </div>
    );
};

export default InterceptionPage;