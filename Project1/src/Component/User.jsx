import { useContext } from "react";
import {UserContext} from "../App";

function User() 
{
  const users = useContext(UserContext);
  return (
    <>
    <div>
        <h1>User's Array List.</h1>
        
        <table border="1" align="center">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Photo</th>
                </tr>
            </thead>
            <tbody>
            {
                // 1st way of map function              
                users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>
                            <img
                              src={user.img}
                              alt={user.name}
                              width="100"
                            />
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
    <div>
        <h1>User's Array List.</h1>
        <table border="1" align="center">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>College</th>
                    <th>Course</th>
                    <th>Photo</th>
                </tr>
            </thead>
            <tbody>
            {
                // 2nd way of map function
                users.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.clg}</td>
                            <td>{user.course}</td>
                            <td>
                                <img
                                  src={user.img}
                                  alt={user.name}
                                  width="100"
                                />
                            </td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    </div>
    </>
  );
}
export default User;