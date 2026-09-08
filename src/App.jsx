import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './component/navbar/Navbar.jsx'

function App() {
  
  return (
    <div>
   <Navbar/>
 <main>
   <Outlet/>
   </main>
   </div>
  )
}

export default App
