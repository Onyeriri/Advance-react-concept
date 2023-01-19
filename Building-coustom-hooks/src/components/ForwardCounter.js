import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from './hooks/use-counter';

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter * -1}</Card>;
};

export default ForwardCounter;
