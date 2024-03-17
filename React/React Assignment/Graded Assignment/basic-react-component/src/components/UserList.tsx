
//  UserList.tsx

import React, { useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: `User ${users.length + 1}`,
      email: `user${users.length + 1}@example.com`,
    };
    setUsers(users.concat(newUser));
  };

  return (
    <div>
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.name} - ${user.email}`}</li>
        ))}
      </ul>
    </div>
  );
};
