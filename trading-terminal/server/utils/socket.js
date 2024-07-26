const { updateQuote } = require('../controllers/quoteController');

const initializeSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected');
    socket.emit('quote', updateQuote());

    const quoteInterval = setInterval(() => {
      const newQuote = updateQuote();
      io.emit('quote', newQuote);
    }, 1000);

    socket.on('disconnect', () => {
      console.log('Client disconnected');
      clearInterval(quoteInterval);
    });
  });
};

module.exports = {
  initializeSocket
};
