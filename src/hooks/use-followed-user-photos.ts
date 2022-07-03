import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';

export default function useFollowedUsersPhotos() {
    const [photos, setPhotos] = useState();
    const  user  = useContext(UserContext);
    
    useEffect(() => {
        async function getTimelinePhotos() {}
        
        getTimelinePhotos();
    }, //[(user?.uid ?? "")]);
    []);
    return { photos };
}