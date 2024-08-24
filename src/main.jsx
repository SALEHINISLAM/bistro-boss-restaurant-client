import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/PubliRoute.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-white'>
    <RouterProvider router={router}/>
    </div>
  </StrictMode>,
)
