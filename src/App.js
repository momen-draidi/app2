import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import AiringToday from './Airing Today/AiringToday'
import MovieTop from './MovieTop/MovieTop'
import NowPlaying from './NOw Playing/NowPlaying'
import OnTv from './On TV/OnTv'
import MPopuolar from './popoular/MPopuolar'
import Tpopouler from './Tpopouler/Tpopouler'
import Top from './TvTop/Top'
import Upcoming from './Upcoming Movies/Upcoming'
   import Layout from './layout/Layout'
import PageNotFount from './PageNotFount'
import Details from './Details/Details.jsx'
import Header from './Header/Header'
import People from './people/People'


function App() {
  const router=createBrowserRouter([
    {path:'',element:<Layout/>, children:[
     {index:true ,element: <Header/>} ,
      { path: 'populear',element:<MPopuolar/>},
      {path:  'n'  ,element:<NowPlaying/>},
      {path:  'o'  ,element:<Upcoming/>},
      {path:  't'  ,element:<MovieTop/>},
      {path:  'a'  ,element: <Tpopouler/>},
      {path:  'b'  ,element:<OnTv/> },
      {path: 'd'   ,element: <AiringToday/>},
      {path : 'c'  ,element: <Top/>},
      {path:'opp' , element:<People/>},
      {path: '/Details/:id' , element:<Details/>},
      

    ]}
  ]);
  
  return (
    <>
    
      <RouterProvider  router={router} />
</>
  )
}

export default App