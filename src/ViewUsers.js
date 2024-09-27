import axios from "axios";

function ViewUsers()
{
    axios.get('https://jsonplaceholder.typicode.com/users').then(response=>
    console.log(response)).catch (error=>console.log(error));
    
    //If We Want to print data with Get users Button then use this functionfrom lineno 9to 13 and line no 17 only
    function onGetData()
    {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>
            console.log(response.data)).catch (error=>alert("Something went wrong"));  
    }
    
    return<div>
        <h1>All Users...!!</h1>
        <button onClick={onGetData}>Get users</button>
    </div>
}

export default ViewUsers;