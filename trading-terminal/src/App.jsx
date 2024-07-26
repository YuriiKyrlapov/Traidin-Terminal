import React, { useState } from 'react';
import Header from './components/Header';
import TradeControls from './components/TradeControls';
import QuoteDisplay from './components/QuoteDisplay';

const App = () => {
  const [balance, setBalance] = useState(1000); // начальный баланс

  const handleBuy = (amount) => {
    setBalance(balance - amount); // Логика покупки
  };

  const handleSell = (amount) => {
    setBalance(balance + amount); // Логика продажи
  };

  const handleDeposit = (amount) => {
    setBalance(balance + amount); // Логика пополнения
  };

  return (
    <div>
      <Header balance={balance} />
      <QuoteDisplay />
      <TradeControls
        onBuy={handleBuy}
        onSell={handleSell}
        onDeposit={handleDeposit}
      />
    </div>
  );
};

export default App;
