import React, {useState} from "react";

function NewUser({users}){
    // console.log(users)
    return (
        <div>
            <h1>New User Component</h1>
            <form>
                <input
                    type="text"
                    name="userNameField"
                    // after you create state for this form, add state name to value field
                    // value= SOME STATE HERE
                    // add state setter here, may be onChange
                />
                <button type="submit">Submit New User</button>
            </form>
        </div>
    )
}

export default NewUser