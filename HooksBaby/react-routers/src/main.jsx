import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, UNSAFE_RSCDefaultRootErrorBoundary, UNSAFE_SingleFetchRedirectSymbol } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Users from './components/users/Users.jsx'

const router1 = createBrowserRouter([
  {
    path: '/', 
    element: <Layout/>, 
    children: [
    { 
      path: "",
      element: <Home/>
    },
    {
      path: 'about',
      element: <About/>
    },
    {
      path: 'contact',
      element: <Contact/>
    }
  ]
  }
])


const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path ='' element =  {<Home/>}/>
      <Route path ='about' element =  {<About/>}/>
      <Route path ='contact' element =  {<Contact/>}/>
      <Route path = 'user/:id' element = {<Users/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router2}/>
  </StrictMode>,
)
