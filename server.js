const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Crashy app is running... but will crash soon 😅');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
    // simulate crash after 5 seconds
    setTimeout(() => {
        console.error('💥 Simulated crash!');
        process.exit(1);
    }, 5000);
});
