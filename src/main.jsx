import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
    <div className='bg-b h-[2790px] sm:h-[2800px] md:h-[2100px] lg:h-[1700px]'>
    <App />
    </div>
)

