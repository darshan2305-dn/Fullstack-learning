import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Hello from './Component/Hello'
import Program6 from './Component/Program6'

import Home from './Component/Home'
import Profile from './Component/Profile'
import User from './Component/User'
import Shinchan from './assets/Shinchan.gif'
import Sumedh from './assets/Sumedh.jpg'

import { createContext } from 'react'

export const UserContext = createContext()

function App() 
{
  const myArr = [
    {
        "name" : "Darshan",
        "age" : 20,
        "clg" : "JG University",
        "course" : "MCA",
        "img" : Shinchan
    },
    {
        "name" : "Nilesh",
        "age" : 21,
        "clg" : "Silver Oak",
        "course" : "BCA",
        "img" : Sumedh
    }
  ]
  return(
      <>
          <div>
              <UserContext.Provider value={myArr}>
                  <Home/>
              </UserContext.Provider>
          </div>
      </>
  )
}
export default App
