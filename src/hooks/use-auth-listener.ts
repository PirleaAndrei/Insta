import { useState, useEffect, useContext } from 'react';
import firebase from 'firebase';

export default function useAuthListener() {
    
    const temp = localStorage.getItem('authUser')
    const [user, setUser] = useState<firebase.User | null>(temp? JSON.parse(temp) : null)
    
    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });
        
        return () => listener();
    }, [firebase]);
    
    return {user} ;
}