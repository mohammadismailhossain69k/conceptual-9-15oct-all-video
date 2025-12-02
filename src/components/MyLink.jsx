// ata hoytese navbar a link active color blue dekanor jorno 

import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({to,className, children}) => {
    return (
        <div>
            {/* isActive ta asche react router teke  */}
              <NavLink to={to} className={({isActive})=> (isActive?'text-purple-500':`${className} font-bold`)}>{children}</NavLink>
        </div>
    );
};

export default MyLink;