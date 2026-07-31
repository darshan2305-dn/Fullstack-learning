import { useContext } from "react";
import { FacultyContext } from "../App";


function Faculty()
{
    const facultyInfo = useContext(FacultyContext)
    return(
        <>
            <div>
                <h3>Faculty Information</h3>
                <img src={facultyInfo.image} width='200' height='200' alt="Faculty"></img>
                <p>Name : {facultyInfo.name}</p>
                <p>Email : {facultyInfo.email}</p>
                <p>Contact : {facultyInfo.contactNo}</p>
                <p>City : {facultyInfo.city}</p>
            </div>
        </>
    );
}
export default Faculty;