import express from 'express';
import { createServer } from 'http';
import { Server } from 'ws';
import { createTransport } from '@mercuryworkshop/epoxy-transport';
import { BareServer } from '@tomphttp/bare-server-node';
import { Ultraviolet } from '@titaniumnetwork-dev/ultraviolet';

const app = express();
const server = createServer(app);
const wss = new Server({ server });

app.use(express.static('public'));

const uv = new Ultraviolet({
    server: server,
    // Add other UV options here
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

wss.on('connection', (ws) => {
    // Handle WebSocket connections
    console.log('New connection');
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
