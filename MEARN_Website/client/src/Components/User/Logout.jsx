import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Executing logout effect');
        // Clear localStorage
        localStorage.clear();
        console.log('LocalStorage after clear:', localStorage);

        // Show success message
        toast.success("Logged out successfully!");

        // Navigate to home
        setTimeout(() => navigate('/'), 500); // Ensure toast shows before navigating
    }, [navigate]);

    return <div>Logging out...</div>;
};

export default Logout;
