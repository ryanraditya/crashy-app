const express = require('express');
const path = require('path');
const app = express();

// Serve file statis dari folder tempat index.html dan style.css kamu berada
app.use(express.static(path.join(__dirname)));

app.listen(3000, () => {
  console.log('✅ Web Masjid is running on port 3000');
});
