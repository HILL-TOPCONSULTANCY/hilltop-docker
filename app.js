const express = require('express');
const app = express();
const path = require('path');

// Set view engine to ejs
app.set('view engine', 'ejs');

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route to render homepage
app.get('/', (req, res) => {
    res.render('index');
});

// Set up the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
