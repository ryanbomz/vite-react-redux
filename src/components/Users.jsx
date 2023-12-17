// src/components/Users.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers, setUsers } from '../redux/userSlice';
import axios from 'axios';

const Users = () => {
 const dispatch = useDispatch();
 const users = useSelector(selectUsers);

 useEffect(() => {
    // Fetch user data from API
    axios.get('https://reqres.in/api/users').then((response) => {
      const fetchedUsers = response.data.data;
      dispatch(setUsers(fetchedUsers));
    });
 }, [dispatch]);

 return (
    <div className="container mx-auto mt-20">
      <h1 className="text-2xl font-semibold mb-4">Users Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
 );
};

export default Users;