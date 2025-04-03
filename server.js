const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Webhook endpoint
app.post('/https://discordapp.com/api/webhooks/1307382502205165721/Kak0rprUXawMzG51rI-c6vuA5vhpWY5bV0vzOQN2nZC-bQofLG0dkDGF_xCUw3841JeQ', (req, res) => {
    console.log('discord recieved data:', req.body);
    res.status(200).send('Webhook processed');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
