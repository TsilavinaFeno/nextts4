import Link from 'next/link';
import React from 'react';

const Page: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Inter4 Page</h1>
            <p>This is the content of the Inter4 page.</p>
            <Link href={`/interception/inter5`}>
                Link to inter 5
            </Link>
        </div>
    );
};

export default Page;