import React from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  users: User[];
};

export const FilteredUsers: React.FC<Props> = ({ users }) => {
  return (
    <ul>
      {users.filter(user => user.name.startsWith('A')).map((user) => (
        <li key={user.id}>{`${user.name} - ${user.email}`}</li>
      ))}
    </ul>
  );
};
