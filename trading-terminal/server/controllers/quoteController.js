let currentQuote = 100;

const getQuote = (req, res) => {
  res.json({ quote: currentQuote.toFixed(2) });
};

const updateQuote = () => {
  currentQuote += (Math.random() - 0.5) * 2;
  return currentQuote.toFixed(2);
};

module.exports = {
  getQuote,
  updateQuote
};
