import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    
    //user ta profile a dekabo 
    
    const [user,setUser] = useState("sabbir boss")
    
    const authInfo = {
        user,
        setUser ,
    }
    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;