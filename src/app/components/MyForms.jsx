import React, { useState } from 'react'

const MyForms = () => {

    const initialList = [
        'userA',
        'userB',
        'userC',
    ];

    const USER={
        id:1,
        name: "Dinesh",
        email :"dk@gmail.com"
    }

    const [username, setUsername] = useState();

    const [userdata, setUserList] = useState(initialList);

    const [formData, seformData] = useState(USER);


    const onInputChangeHandler = event => {
        event.preventDefault();
        setUsername(event.target.value)
    }

    const onSubmitHandler = event => {


        if (username) {
            setUserList(userdata.concat(username));
        }
        event.preventDefault();
    }

    return (

        <form onSubmit={onSubmitHandler}>
            <h1>{username}</h1>
            <h2>
                {
                    userdata.map((user) => <li> {user}</li>)
                }
            </h2>
           UserName:  <input type="text" value={username} onChange={onInputChangeHandler} />
           Email:  <input type="text"  value={username} onChange={onInputChangeHandler} />
            <input type="submit" value="Add User" />
        </form>
    )

}

export default MyForms