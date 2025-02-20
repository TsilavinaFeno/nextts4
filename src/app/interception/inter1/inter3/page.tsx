import Link from 'next/link';
import React from 'react';

const Inter3Page: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Inter3 Page</h1>
            <p>This is the content of the Inter3 page.</p>
            <Link href={`/interception/inter2`} style={{ color: 'blue' }} >
                To inter2 page
            </Link>
        </div>
    );
};

export default Inter3Page;