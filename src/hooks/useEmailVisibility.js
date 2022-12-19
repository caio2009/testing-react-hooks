import { useCallback, useState } from 'react';

export default function useEmailVisibility() {
  const [emailVisibility, setEmailVisibility] = useState(true);

  const toggleEmailVisibility = useCallback(
    () => {
      setEmailVisibility(!emailVisibility);
    },
    [emailVisibility]
  );

  return {
    emailVisibility,
    toggleEmailVisibility
  };
}
