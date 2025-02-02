// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample data
let utilities = [
    { id: 1, name: 'Electricity', usage: 120 },
    { id: 2, name: 'Water', usage: 80 },
];

// API endpoint to get all utilities
app.get('/api/utilities', (req, res) => {
    res.json(utilities);
});

// API endpoint to get a specific utility by ID
app.get('/api/utilities/:id', (req, res) => {
    const utility = utilities.find(u => u.id === parseInt(req.params.id));
    if (!utility) return res.status(404).send('Utility not found');
    res.json(utility);
});

// API endpoint to add a new utility
app.post('/api/utilities', (req, res) => {
    const newUtility = {
        id: utilities.length + 1,
        name: req.body.name,
        usage: req.body.usage,
    };
    utilities.push(newUtility);
    res.status(201).json(newUtility);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
