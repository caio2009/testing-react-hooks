import { useCallback, useEffect, useState } from 'react';

import styles from './UserCard.module.css';

export default function UserCard(props) {
  const { userData, emailVisibility } = props;

  // ================================================================================
  // States
  // ================================================================================

  const [_emailVisibility, setEmailVisibility] = useState(true);

  // ================================================================================
  // Effects
  // ================================================================================

  useEffect(
    () => {
      setEmailVisibility(emailVisibility);
    },
    [emailVisibility]
  );

  // ================================================================================
  // Handlers
  // ================================================================================

  const handleEmailVisibilityClick = useCallback(
    () => {
      setEmailVisibility(!_emailVisibility);
    },
    [_emailVisibility]
  );

  return (
    <div className={styles.container}>
      {/* Card header */}
      <div className={styles.header}>
        <h3>{userData.name}</h3>
        <br />
      </div>

      {/* Card body */}
      <div className={styles.body}>
        <div style={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
          <p>
            <strong>Email: </strong>
            <span>{_emailVisibility ? userData.email : '----'}</span>
          </p>

          <button onClick={handleEmailVisibilityClick}>
            {_emailVisibility ? 'Hide' : 'Show'}
          </button>
        </div>
        <br />

        <div>
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
    </div>
  );
}
