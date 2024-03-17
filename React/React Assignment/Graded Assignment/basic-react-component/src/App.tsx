import React, { useState, useEffect } from 'react';
import { UserList } from './components/UserList';
import { Product } from './components/Product';
import { FilteredUsers } from './components/FilteredUsers';
import './App.css'

type User = {
  id: number;
  name: string;
  email: string;
};

const App: React.FC = () => {
  // Initial dummy data for users
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    { id: 4, name: 'David', email: 'david@example.com' },
    { id: 5, name: 'Eve', email: 'eve@example.com' },
    { id: 6, name: 'Frank', email: 'frank@example.com' },
    { id: 7, name: 'Grace', email: 'grace@example.com' },
    { id: 8, name: 'Hannah', email: 'hannah@example.com' },
    { id: 9, name: 'Ishani', email: 'ishani@example.com' },
    { id: 10, name: 'John', email: 'john@example.com' }
  ]);

  // Simulating UserList adding a user (you can integrate a real functionality instead)
  useEffect(() => {
    const newUser = { id: users.length + 1, name: 'Kevin', email: 'kevin@example.com' };
    setUsers(users => [...users, newUser]);
  }, []);

  return (
    <div className='container'>
      <UserList /> 
      <Product />
      <FilteredUsers users={users} />
    </div>
  );
};

export default App;
