//import { useContext } from "react";
//import {UserContext} from "../App";

function User() 
{
  //const users = useContext(UserContext);
  return (
    <>
      <h1>User's Array List.</h1>
      {
            // 1st way..
            users.map((user)=>{
                return(
                    <div>
                        <h3>Name : {user.name}</h3>
                        <h3>Age : {user.age}</h3>
                        <hr/>
                    </div>
                );
            })
            // 2nd way..
            // users.map((user)=>(
            //         <div>
            //             <h3>Name : {user.name}</h3>
            //             <h3>Age : {user.age}</h3>
            //             <hr/>
            //         </div> 
            // ))
      }
    </>
  );
}
export default User;