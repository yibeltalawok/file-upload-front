import React, { Fragment, useState, useRef } from "react";
import Logo from '../../img/Logo_p.png';
import { useNavigate } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { HiOutlineX } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import { FcAudioFile } from "react-icons/fc";
import { CiBank,CiFileOn,CiYoutube,CiSquarePlus,CiCamera} from "react-icons/ci";
const Header=()=>{
  const [navBackground, setNavBackground] = useState(false);
  const [nav, setNav] = useState(false);
   const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
    const navigate=useNavigate();
    const location = useLocation();
  function logoutBtn(){  
    // localStorage.clear();
    navigate("/login");
  }
      // if(userInfo==null)
      //    {
      //     navigate("/login");
      //     }
      const handleNav = () => {
        setNav((prev) => !prev);
      };
      const navRef = useRef();
      navRef.current = navBackground;

  const styles = () => {
    switch (location.pathname) {
      case "/":
        return navBackground ? "[#CECFCC]" : "[#CECFCC]";
      default:
        return navBackground ? "#[#CECFCC]" : "[#CECFCC]";
    }};
  // logo
  const logos = () => {
    switch (location.pathname) {
      case "/":
        return (
          <img
            className="xl:w-48 md:w-40 w-32 bg-[#CECFCC] h-16"
            src={navBackground ? Logo : Logo}
            alt="Logo"
          />);
      default:
        return (
          <img
            className="xl:w-48 md:w-40 w-32 xl:bg-slate-100 h-16"
            src={navBackground ? Logo : Logo}
            alt="Logo"
          />
        );}};
        const navLinkStyles=({isActive})=>{
          return{
           color:isActive ?'green':'black',
           fontWeight:isActive?'bolder':'unset',
           fontSize:isActive? '20px':'unset'
          }}
    return(
        <>
        <div className="w-full h-20" >
         <div className=" w-full align-center fixed">  
          <div className=" bg-slate-100 w-full h-20 flex items-center fixed">
           <div className="flex h-5 rounded">
            <div className="flex items-center">
             <div className="flex lg:ml-3 md:ml-20">
                  <NavLink >{logos}</NavLink>
                  <div
                    onClick={handleNav}
                    className="block md:hidden text-textColor ml-52 mt-1"
                     >
                    {!nav && <RiMenuLine size={24} />}
             </div>
            </div>
           </div> 
          </div> 
          <ul className="hidden container md:ml-10 lg:ml-32 md:flex">
              <li className='p-3 transition duration-700 transform hover:-translate-y-1 
                             hover:scale-110 hover:rounded-lg uppercase flex font-medium'>
                <NavLink style={navLinkStyles} className='inline-flex'  to="/">
                 <CiBank />
                <p>መግቢያ</p>
                </NavLink>
               </li>
               <li className=' p-4 ml-2  transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg uppercase  flex font-medium'>
                <NavLink style={navLinkStyles} className='inline-flex'
                  to="/images"
                >
                <CiCamera />
                 <p>ፎቶዎች</p> 
                </NavLink>
              </li>
              <li className='p-4 ml-2 transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg uppercase  flex font-medium'>               
                 <NavLink style={navLinkStyles} className='inline-flex' 
                  to="/videos"
                >
                <CiYoutube />
                 <p>ቪዲዮዎች</p> 
                </NavLink>
              </li>
              <li className='p-4 ml-2 transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:rounded-lg uppercase  flex font-medium'>
              <NavLink style={navLinkStyles} className='inline-flex'
                  to="/audios"
                >
                <FcAudioFile />
                <p>ኦዲዮዎች</p>
                </NavLink>
              </li>
              <li className='p-4  ml-2 transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 hover:rounded-lg uppercase  flex font-medium'>
              <NavLink style={navLinkStyles} className='inline-flex'
                  to="/files">
               <CiFileOn />
                  <p>ፋይሎች</p>
                </NavLink>
              </li>
              <li className='p-4 ml-2 transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 hover:rounded-lg uppercase  flex font-medium'>
              <NavLink style={navLinkStyles} className='inline-flex'
                  to="/addfile"
                >
                <CiSquarePlus />
                <p>አዲስ ጭምር</p>  
                </NavLink>
              </li>

              <li className='p-4 ml-3 transition duration-700 transform hover:-translate-y-1 hover:scale-110
                              hover:bg-slate-100 hover:rounded-lg uppercase  flex font-medium'>
              <NavLink style={navLinkStyles} className='inline-flex'
                  to="/ViewPosts"
                >
                {/* <CiSquarePlus /> */}
                <p>ፑስት</p>  
                </NavLink>
              </li>
              <li className='p-4 ml-4 transition duration-700 transform hover:-translate-y-1 hover:scale-110
                            hover:bg-slate-100 hover:rounded-lg uppercase  flex font-medium text-blue-600'>
              <button
                  className="leading-snug hover:text-primary font-display  hover:opacity-75"
                  onClick={logoutBtn} >
                ውጥት
             </button>
              </li>
              </ul>
              <ul
              className={
                nav
                  ? "xl:hidden fixed bg-gray-400 text-slate-50 left-0 top-0 w-full text-textColor ease-in-out duration-500 hover:opacity-200 text-lg hover:transform hover:scale-100 hover:md:scale-125 hover:duration-300"
                  : "ease-in-out duration-500 fixed left-[-100%]"
                }>
                <div class="w-full bg-sky-700 -mt-2">
           <div className="flex ml-64 mt-2 ">
             <h1>
               <img
                  className="w-20  "
                  src={Logo}
                  alt="Logo"
                />
               </h1>
               <h1 onClick={handleNav} >
                {" "}
                {nav && <HiOutlineX size={20} />}
               </h1>
               </div>

                </div>
              
            <li className="ml-10 mt-6 ">
              <a
                className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                href="/"
               >
                <p className="ml-1">መግቢያ</p>
              </a>
              </li>
            <li className="ml-10 mt-6 ">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/images"
                >
                 <p className="ml-1">ፎቶዎች</p> 
                </a>
              </li>
            <li className="ml-10 mt-6 ">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/videos"
                >
                 <p className="ml-1">ቪዲዮዎች</p> 
                </a>
              </li>
            <li className="ml-10 mt-6 ">
               <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/audios"
                >
                <p className="ml-1">ኦዲዮዎች</p>
                </a>
              </li>
            <li className="ml-10 mt-6 ">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/files"
                >
                  <p className="ml-1">ፋይሎች</p>
                </a>
              </li>
            <li className="ml-10 mt-6 ">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/addfile"
                  >
                <p className="ml-1">አዲስ ጭምር</p>  
                </a>
              </li>
            <li className="ml-10 mt-6 ">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/addfile"
                  >
                {/* <CiSquarePlus /> */}
                <p className="ml-1">ፑስት</p>  
                </a>
              </li>
            <li className="ml-10 mt-6 text-sky-600 ">
              <button
              className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
              onClick={logoutBtn}
              >
             ውጥት
           </button>
          </li>
        </ul>
      </div>
     </div>
    </div> 
  </>)}
export default Header;