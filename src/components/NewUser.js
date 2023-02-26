import React, {useState} from "react";

function NewUser({onAddUser}){
    // console.log(users)
    // create form state here
    const [newUserName, setNewUserName] = useState("")

    // write handleSubmit function, including post fetch to 9292/users
    function handleSubmit(e){
        e.preventDefault();
        
        fetch("http://localhost:9292/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name: newUserName,
            }),
        })
        .then((response) => response.json())
        .then((newUserName) => {
            onAddUser(newUserName)
            setNewUserName("")
            console.log(newUserName)
            
        });
    }
    return (
        <div>
            <h3>Add New User</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="newUserName"
                    // after you create state for this form, add state name to value field
                    value={newUserName}
                    // add state setter here, may be onChange
                    onChange={(e) => setNewUserName(e.target.value)}
                />
                <button type="submit">Submit New User</button>
            </form>
        </div>
    )
}

export default NewUser