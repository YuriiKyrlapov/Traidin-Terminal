import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000'); // Предполагая, что сервер работает на localhost:4000

const QuoteDisplay = () => {
  const [quote, setQuote] = useState(0);

  useEffect(() => {
    socket.on('quote', (data) => {
      setQuote(data);
    });

    return () => {
      socket.off('quote');
    };
  }, []);

  return (
    <div>
      <h2>Current Quote: ${quote}</h2>
    </div>
  );
};

export default QuoteDisplay;
