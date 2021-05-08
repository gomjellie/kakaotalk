import { useState } from 'react';

export default function useConstructor(callBack = () => {}) {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  setHasBeenCalled(true);
  callBack();
}
