import { useState, useEffect } from 'react';
import { User, Car } from '../types';

export default function Users() {
    const [cars, setCars] = useState<Array<Partial<User>>>([]);
    // const [cars, setCars] = useState<Car[]>([]); 

    useEffect(() => {
      getCars();
    }, []);

    // async function getUsers() {
    //   const res = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars');
    //   if (res.ok) {
    //     const data =  await res.json();
    //     setUsers(data);
    //   } else window.alert('Bad Request');
    // }
  
    async function getCars() {
      const res = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars');

      if (res.ok) {
        const data = await res.json();
        setCars(data); 
      } else {
        console.error('Bad Request');
      }
    }
}







  //   function followUser() {}
  
  //   return (
  //     // <>
  //     //   <h3>Users: </h3>
  //     //   {users.length > 0 && (
  //     //     <>
  //     //       {users.map((user: Partial<User>) => (
  //     //         <>
  //     //           <p key={user.id}>
  //     //             {user.username} <small>{user.email} </small>
  //     //             {localStorage.getItem('token') && (
  //     //               <button onClick={followUser}>Follow</button>
  //     //             )}
  //     //           </p>
  //     //         </>
  //     //       ))}
  //     //     </>
  //     //   )}
  //     // </>
  //   );
  // }
  