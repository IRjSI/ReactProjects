import { useContext, useEffect, useState, useSyncExternalStore } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Seller from './components/Seller'
import Buyer from './components/Buyer'
import Home from './components/Home'
import { setLocalStrg } from './utilities/LocalStorage'
import { UserContext } from './context/UserContext'

function App() {

  const [user,setUser] = useState(null)

  const authData = useContext(UserContext)

  const handleLogin = (email, password) => {
    const foundUser = authData?.users.find((e) => email === e.email && password === e.password);
    if (foundUser) {
      setUser('user');
      console.log(authData);
    } else {
      alert('Invalid email or password!');
    }
  };
  
 
  return (
    <>
      { !user ? <Login handleLogin={handleLogin} /> : '' }
      { user ? <Home /> : '' }
    </>
  )
}

export default App
