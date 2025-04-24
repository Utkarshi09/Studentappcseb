import { useState } from 'react'
import './App.css'
import Registration from './component/Registration'
import Login from './component/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Dashboard from './component/dashboard'
import StudentAdmin from './component/StudentAdmin'
function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Registration/>}/>
          </Route>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/studentadmin' element ={<StudentAdmin/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App