import React, { useEffect, useState } from 'react';
export default function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`/api/user/${userId}`)
      .then(r => r.json())
      .then(data => setUser(data));
  }, [userId]);
  if (!user) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
