import { createContext, useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import College from './Component/College'
import Department from './Component/Department'
import Faculty from './Component/Faculty'
import Krish from './assets/Krish.jpg'


export const FacultyContext = createContext()

function App() 
{

  const facultyInfo = {
      'name' : "Krishna",
      'email' : "krishu@gmail",
      'contactNo' : '+91 1234567890',
      'city' : "Gokul",
      'image': Krish
    }
  return (
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
