import React, { useState } from 'react'

const User = () => {
    const [user, setUser] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users";
    const getData = () => {
        return fetch(url).then((res) => res.json());
    };
    const fetchAndGetUser = async () => {
        try {
            const data = await getData();
            setUser(data);
            console.log(user);

        } catch (error) {
            console.log(error);

        }
    };
    return (
        <div>
            <h1>Welcome to my user page</h1>
            <button onClick={fetchAndGetUser}>FetchAndGetUser</button>
            <hr />
            {user.map((el) => (
                <div style={{ border: "1px solid red", padding: "20px", margin: "20px" }}>
                    <h1>Name:{el.name}</h1>
                    <h2>Email:{el.email}</h2>
                    <h3>UserId:{el.id}</h3>
                    <p>website:{el.website}</p>
                    <button>MORE INFO</button>
                </div>

            ))}
        </div>
    )
}

export default User