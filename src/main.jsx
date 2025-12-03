import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import router from './Routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'sonner';
import AuthProvider from './context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
      <>
     <AuthProvider> {/** amra akane AuthProvider componet deyar karone amra child teke parent ar akane data send korthe pabo  */}
      <RouterProvider router={router} />
     <ToastContainer />
     {/* icons  */}
       <Toaster position='top-right'/>
     </AuthProvider>
     </>
  // </StrictMode>,
)
