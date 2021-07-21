import { useState } from 'react';


const users =[
     { name: 'Kris', age: 18 },
     { name: 'Sara', age: 20 },
     { name: 'Ali', age: 20 },
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age:number} | undefined>();


    const onClick = ()=> {
       const foundUser = users.find((user)=> {
           return user.name === name;
       });

       setUser(foundUser)
    }
    return <div>
        User Search
        <input value = { name } onChange={(e) => setName(e.target.value)} />
        <button onClick={ onClick }>Find User</button>
        <div>
            <p>{ user && user.name }</p>
            <p>{ user && user.age }</p>

        </div>
    </div>
};

export default UserSearch;