import React from 'react';

const Header = ({ balance }) => {
  return (
    <header>
      <h1>Trading Terminal</h1>
      <p>Balance: ${balance}</p>
    </header>
  );
};

export default Header;
