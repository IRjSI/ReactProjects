import React, { useEffect, useState } from 'react'
import { Logo, Container, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  
  const [userName,setUserName] = useState('')
  useEffect(()=>{
    authService.getCurrentUser().then((data) => {
      setUserName(data.name);
    });
  },[])
  

  return (
    <header>
      <Container>
        <nav>
          <div>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => (
              item.active ?(
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)} className='inline-block px-6 py-2 duration-200 rounded-full'>
                    {item.name}
                  </button>
                </li>
              ) : null
            ))}
            {authStatus && (
              <li className='pl-10 pt-2'>
                <LogoutBtn />
              </li>
            )}
            <h1 className="text-2xl font-bold pl-16 pt-1">{userName && `Hello 👋🏻, ${userName}`}</h1>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
