import Link from 'next/link';
import React from 'react';

const NotificationPage: React.FC = () => {
    return (
        <div>
            <h1>Notifications</h1>
            <p>This is the notification page.</p>
            <Link href="/dashboard/archived">
                Go to archived notifications
            </Link>
        </div>
    );  
};

export default NotificationPage;