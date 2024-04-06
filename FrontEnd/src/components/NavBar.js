import React from "react";
import Exams from "./Exams";
import Users from "./Users";
import { useSelector } from "react-redux";

function Navbar () {
 
   
  const Selector = useSelector( state => state.Role)
  console.log(Selector)
    return (
      <>
        { (Selector ==='SuperAdmin'||Selector ==='Admin') &&<div>
          <Exams />
        </div>}
       {(Selector ==='SuperAdmin')&& <div>
          <Users />
        </div>}
      </>
    );
 
}
export default Navbar;
