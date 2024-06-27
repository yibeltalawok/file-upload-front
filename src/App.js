import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from './components/pages/home';
import Addfile from './components/pages/addfile';
import Login from './components/users/login';
import Register from './components/users/register';
import Image from "./components/pages/Images";
import Audios from "./components/pages/Audios";
import Files from "./components/pages/Files";
import AddPost from "./components/pages/post/AddPost";
const LazyLoad=React.lazy(()=>import ("./components/pages/Videos"))
const LazyLoad1=React.lazy(()=>import ("./components/pages/post/ViewPosts"))


function App() {
  return (
  <>
  {/* <Loading /> */}
    <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/addfile" element={<Addfile/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/register" element={<Register/>}></Route>
       <Route path="/images" element={<Image/>}></Route>
       <Route path="/audios" element={<Audios/>}></Route>
       <Route path="/videos" element={<React.Suspense fallback="Loading...">{<LazyLoad/>}</React.Suspense>}></Route>
       <Route path="/files" element={<Files/>}></Route>
       <Route path="/ViewPosts" element={<React.Suspense fallback="Loading...">{<LazyLoad1/>}</React.Suspense>}>
       <Route index element={<React.Suspense fallback="Loading...">{<LazyLoad1/>}</React.Suspense>}/>
       <Route path="/ViewPosts" element={<React.Suspense fallback="Loading...">{<LazyLoad1/>}</React.Suspense>}/>
      </Route>
       <Route path="/AddPost" element={<AddPost/>}/>
       <Route path="/AddPost/:id" element={<AddPost/>}/>
    </Routes>
   </>
  );}
export default App;
