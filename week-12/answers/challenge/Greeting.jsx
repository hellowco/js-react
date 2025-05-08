import React, { useEffect, useState } from 'react';
export default function Greeting({ initial }) {
  const [msg, setMsg] = useState(initial);
  useEffect(() => setMsg(prev => prev + '!'), [initial]);
  return <div>{msg}</div>;
}
