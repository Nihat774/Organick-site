import  { lazy,Suspense } from 'react'
import { Route,Routes } from  'react-router-dom'
const Home = lazy(() => import("../pages/Home"));
const AboutP = lazy(() => import("../pages/About"));
const ShopP = lazy(()=> import("../pages/Shop"))
function  MyRoutes() {
  return (
    <>
      <Suspense fallback="Loading">
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/about" element = {<AboutP/>}/>
            <Route path="/shop" element = {<ShopP/>}/>

        </Routes>
      </Suspense>
    </>
  )
}

export default MyRoutes
