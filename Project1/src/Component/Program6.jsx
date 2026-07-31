import reactLogo from "../assets/shinchan.gif";

function Program6()
{
    const Person = {
        name : "Darshan Parmar",
        avatar : reactLogo
    }
    return(
        <>
            <div>
                <h1>{Person.name}</h1>
                <img className="avatar"
                src={Person.avatar}
                alt="reactLogo"
                width="150"
                 />
            </div>
            <div>
                <ul>
                    <li>List1</li>
                    <li>List2</li>
                    <li>List3</li>
                </ul>
            </div>
        </>
    )
};
export default Program6;