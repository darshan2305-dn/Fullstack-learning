import { createContext } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Hello from './Component/Hello'
import Program6 from './Component/Program6'
import User from './Component/User'
import Home from './Component/Home'
import Profile from './Component/Profile'
import College from './Component/College'
import Department from './Component/Department'
import Faculty from './Component/Faculty'
import Shinchan from './assets/Shinchan.gif'

export const FacultyContext = createContext();

function App() 
{
  const facultyInfo = {
    'name' : "Jayna ma'am",
    'email' : "jayn12@gmail",
    'contactNo' : '+91 0934578690',
    'city' : "Ahmedabad",
    'image':Shinchan
  }
  return(
      <>
          <div>
              <FacultyContext.Provider value={facultyInfo}>
                  <College/>
              </FacultyContext.Provider>
          </div>
      </>
  )
}
export default App
