import React, { useContext } from 'react';
import logo from '../assets/firebase-logo.png'
import { Link } from 'react-router';
import MyContainer from './MyContainer';
import MyLink from './MyLink';
import { AuthContext } from '../context/AuthContext';
const Navbar = () => {
    //ata amader authProvider component teke asche 

    const result = useContext(AuthContext)
    console.log (result)

    return (
        // amra ata full kaj korsi MyLink Component 
    <div className=' py-2 border-b border-b-slate-300 text-white bg-black'>
        <div className='flex items-center justify-between'>
            <MyContainer className={'flex justify-between items-center'}>
            <figure>
                <img src={logo} className='w-[55px]' />
                 </figure>
                <ul className='flex items-center gap-2'>
                    {/* is active akta react object ata react teke asche  */}
                    <li className='flex gap-3'>
                    <MyLink to={'/'}>Home</MyLink>
                    <MyLink to={'/about-us'}>About Us</MyLink>
                    <MyLink to={'/profile'}>Profile</MyLink>
                    </li>

                </ul>
                <button className='bg-purple-500 text-white px-4 py-2 rounded-md font-semibold '>
                <Link to={'/signin'}>Sign in</Link>
                </button>

           </MyContainer>
        </div>

</div>
        
    );
};

export default Navbar;