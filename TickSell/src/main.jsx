import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Buyer from './components/Buyer.jsx'
import Seller from './components/Seller.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import ContextProvider from './context/UserContext.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />}/>
//       <Route path='buy' element={<Buyer />}/>
//       <Route path='sell' element={<Seller />}/>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
)
