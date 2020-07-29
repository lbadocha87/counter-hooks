import React, {useState, useEffect} from 'react';


const Counter = () => {

    const [counter, setCounter] = useState(17);
    const [user, setUser] = useState('John Smith');
    const [userId, setUserId] = useState(1);

    const getNextUser = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json())
        .then(user => {
            setUser(user.name)
        })
    }

    useEffect(()=>{
     
        getNextUser(userId);

    }, [userId]);

    return (
        <div>
            <p>Licznik: {counter}</p>
            <button onClick={()=>setCounter(counter + 1)}>Dodaj 1</button>

            <p>User: {user}</p>
            <button onClick={()=>setUserId(userId + 1)}>Next user</button>
        </div>
    )
}

export default Counter;