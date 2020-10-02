import React, { useState } from 'react'

const MyFormObject = () => {

    const USER = {
        id: "1",
        name: "Dinesh",
        salary: 10000
    }

    const [user, setUser] = useState(USER)

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(user)
    }
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setUser((preValue) => {
            console.log(preValue);
            return {
                ...preValue, //Spread Operator 
                [name]: value,
            };
        }
        )
        console.log(event.target.value)
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                UserID:   <input type="text" name="id" value={user.id} onChange={handleInput} /><br />
       Name <input type="text" name="name" value={user.name} onChange={handleInput} /><br />
       Salary <input type="text" name="salary" value={user.salary} onChange={handleInput} /><br />
                <input type="submit" value="Submit" />
            </form>
        </>
    )

}

export default MyFormObject