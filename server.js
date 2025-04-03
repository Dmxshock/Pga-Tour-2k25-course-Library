const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    '1071547508611-23f93ouruj0b8ta5ej53m15gh67sog9r.apps.googleusercontent.com',
    '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',
    'http://localhost
'
);

oauth2Client.setCredentials({
    access_token: 'YOUR_ACCESS_TOKEN',
    refresh_token: 'YOUR_REFRESH_TOKEN',
});

const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

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
