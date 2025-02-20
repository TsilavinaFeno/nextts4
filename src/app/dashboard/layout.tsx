import React from 'react';

interface DashboardLayoutProps {
    children: React.ReactNode;
    notification: React.ReactNode;
    pub: React.ReactNode;
    users: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, notification, pub, users }) => {
    return (
        <>
            {children}
            <div style={{ border: '1px solid white', display: 'flex', height: '70vh' }}>
                <div style={{ border: '1px solid white', width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {users}
                </div>
                <div style={{ border: '1px solid white', width: '60%' }}>
                    <div style={{ border: '1px solid white', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {notification}
                    </div>
                    <div style={{ border: '1px solid white', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {pub}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;