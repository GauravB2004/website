const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const propertyRoutes = require('./routes/propertyRoutes');
const userRoutes = require('./routes/userRoutes');

// const path = require('path');
const app = express();

// Connect to MongoDB
try {
    mongoose.connect('mongodb+srv://cdab89565:tBlJdoC4fO3u7wJt@cluster0.utwhjvq.mongodb.net/',
        { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("connected")
}
catch {
    console.log("not connected")
}

// Middleware
app.use(cors()); // Use CORS
app.use(express.json()); // Parse JSON bodies


// Serve static files from the "uploads" directory
// app.use('/upload', express.static(path.join(__dirname, 'uploads')));

// Example middleware for admin-only routes
function isAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
        return next();
    }
    // Deny access if not admin
    return res.status(403).send('Access denied');
}

// Usage in an Express route
app.get('/admin', isAdmin, (req, res) => {
    // Your code here
});


// Use routes
app.use('/api/properties', propertyRoutes);
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
