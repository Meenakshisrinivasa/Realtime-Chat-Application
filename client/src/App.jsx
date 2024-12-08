import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './login'
import { Signup } from './signup'
import { Dashboard } from './dashboard'
import { Route,Routes } from 'react-router-dom'


function App() {
  const [name, setName] = useState({ })
  const [password, setpassword] = useState({ })
  const submit=()=>{
    console.log(name)
    console.log(password)
  }


  return (
    <div className="kk">
<Routes>
  <Route path ='/' element={<Login/>}/>
  <Route path ='Signup' element={<Signup/>}/>
  <Route path='Dashboard' element={<Dashboard/>}/>

</Routes>
    </div>
  )



}

export default App
