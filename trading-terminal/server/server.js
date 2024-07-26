const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { initializeSocket } = require('./utils/socket');
const quoteRoutes = require('./routes/quoteRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(express.json());

// API Routes
app.use('/api/quotes', quoteRoutes);

// Initialize Socket.IO
initializeSocket(io);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
