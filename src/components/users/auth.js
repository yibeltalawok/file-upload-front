import {useState,createContext, useContext} from 'react'
// import { useNavigate } from 'react-router-dom';
const AuthContext=createContext(null);
export const AuthProvider=({children})=>{    
    const userInfo=localStorage.getItem("accessToken")
    const [user, setUser] = useState(userInfo);
    // const navigate=useNavigate();
    const login=(user)=>{
        setUser(user)
          }
    const logout=()=>{
        // const userInfo=localStorage.getItem("accessToken")?JSON.parse(localStorage.getItem("accessToken")):null;
            localStorage.clear();
            // navigate("/login")
        setUser(null)
        }
    return(
        <AuthContext.Provider value={{user,login,logout}}>
          {children}
        </AuthContext.Provider>
            )
        }
export const useAuth=()=>{
    return useContext(AuthContext)
}
 