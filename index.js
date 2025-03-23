const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static('public'));

// API endpoint to handle messages
app.post('/api/send-message', async (req, res) => {
    try {
        const { message } = req.body;
        
        // Forward message to webhook
        const webhookResponse = await axios.post(process.env.WEBHOOK_URL, {
            message: message
        });

        // Send response back to frontend
        res.json({
            response: webhookResponse.data
        });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({
            error: 'Failed to process message'
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
