import React from "react";
import {useDispatch} from "react-redux"
import {  Roles } from "../store/slice/Slice";
import Navbar from "./NavBar";
function ChooseRole () {
  
    const dispatch = useDispatch()



        return (
     
 
        <>   
        <button onClick={()=>{dispatch(Roles('SuperAdmin'))}}>Super Admin</button>
        
        <button onClick={()=>{dispatch(Roles("Admin"))}}>Admin</button>
   <Navbar/>
        </>
       
        );

        }

export default ChooseRole;
