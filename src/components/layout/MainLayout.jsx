import { Outlet } from 'react-router';
import Navbar from '../Navbar';

const MainLayout = () => {
    // const navigation = useNavigate()
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
        
    );
};

export default MainLayout;