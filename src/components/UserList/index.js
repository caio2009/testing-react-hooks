import { useState } from 'react';

import styles from './UserList.module.css';

import Title from '../Title';
import UserCard from '../UserCard';
import UserCardProfile from '../UserCardProfile';

export default function UserList() {
  const users = [
    {
      name: 'Yukihiro',
      email: 'yukihiro@email.com',
      technologies: ['ruby', 'ruby on rails']
    },
    {
      name: 'Yukihiro',
      email: 'yukihiro@email.com',
      technologies: ['ruby', 'ruby on rails', 'react js', 'nodejs']
    },
    {
      name: 'Yukihiro',
      email: 'yukihiro@email.com',
      technologies: ['react js', 'nodejs']
    },
    {
      name: 'Yukihiro',
      email: 'yukihiro@email.com',
      technologies: []
    }
  ];

  const [emailVisibility, setEmailVisibility] = useState(true);

  return (
    <div>
      <Title text="User List" />

      <UserCardProfile 
        userData={users[0]} 
        emailVisibility={emailVisibility} 
        onEmailToggleVisibilityClick={() => setEmailVisibility(!emailVisibility)}
      />
      <br />

      <div className={styles.gridContainer}>
        {users.map((user, i) => (
          <UserCard 
            key={i} 
            userData={user} 
            emailVisibility={emailVisibility}
          />
        ))}
      </div>
    </div>
  );
}
