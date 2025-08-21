require('dotenv').config();
const app = require('./src/app');

// Use dynamic port or default to 3001
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
