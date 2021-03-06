import React from 'react';
import { Link } from 'react-router-dom';
import Skelton from 'react-loading-skeleton';

const User = ( username: string, fullName: string ) => 
    !username || !fullName ? (
        <Skelton count={1} height={61} />        
    ) : (
        <Link to={`/p/${username}`} className="grid -grid-cols-4 gap-4 mb-4 items-center">
            <p>{username}</p>
        </Link>
    );
    
export default User;