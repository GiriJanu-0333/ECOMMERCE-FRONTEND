import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import "boxicons/css/boxicons.min.css";
import AuthProvider from './context/AuthContext.jsx';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
   <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
