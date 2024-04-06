import React from "react";


function Users() {
   
  
    const Users =['USER1' ,'USER2','USER3' ,'USER4' ,'USER5' ]

    
        return (<>
         { Users.map((user,index)=>{
          return  <li key={index}>{user}</li>
          })
          }
  
          </>
        )
   
}

export default Users ;
