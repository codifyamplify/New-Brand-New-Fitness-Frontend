import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function NewUser({onAddUser}){
    const history = useHistory()
    const [newUserName, setNewUserName] = useState("")

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
            history.push("/users")
        });
    }
    return (
        <div>
            <h3>Add New User</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="newUserName"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                />
                <button type="submit">Submit New User</button>
            </form>
        </div>
    )
}

export default NewUser