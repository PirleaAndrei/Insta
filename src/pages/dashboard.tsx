import React, { useEffect } from 'react';
import Header from '../components/header';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar';

export default function Dashboard() {
    useEffect(() => {
        document.title    
    }, []);
       
    return ( 
        <p>Hello from Dashboard</p>
    )
}