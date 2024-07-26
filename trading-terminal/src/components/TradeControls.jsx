import React, { useState } from 'react';

const TradeControls = ({ onBuy, onSell, onDeposit }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={() => onBuy(amount)}>Buy</button>
      <button onClick={() => onSell(amount)}>Sell</button>
      <button onClick={() => onDeposit(amount)}>Deposit</button>
    </div>
  );
};

export default TradeControls;
