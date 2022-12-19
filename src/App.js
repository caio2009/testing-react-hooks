import styles from './App.module.css';

import UserList from './components/UserList';

function App() {
  return (
    <main className={styles.container}>
      <UserList />
    </main>
  );
}

export default App;
