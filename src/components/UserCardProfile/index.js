import styles from './UserCardProfile.module.css';

export default function UserCardProfile(props) {
  const { 
    userData, 
    emailVisibility,
    onEmailToggleVisibilityClick = null
  } = props;

  return (
    <div className={styles.container}>
      {/* Card header */}
      <div className={styles.header}>
        <h3>{userData.name} Profile</h3>
        <br />
      </div>

      {/* Card body */}
      <div className={styles.body}>
        <div style={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
          <p>
            <strong>Email: </strong>
            <span>{emailVisibility ? userData.email : '----'}</span>
          </p>

          <button onClick={() => { onEmailToggleVisibilityClick && onEmailToggleVisibilityClick() }}>
            {emailVisibility ? 'Hide' : 'Show' }
          </button>
        </div>
        <br />

        <p>
          <strong>Technologies:</strong>
        </p>
        {userData.technologies.length === 0 && (
          <p>Empty...</p>
        )}
        {userData.technologies.length > 0 && (
          <ul>
            {userData.technologies.map((technology, i) => (
              <li key={i}>&bull; {technology}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
