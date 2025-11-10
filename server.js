const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve file statis
app.use(express.static(path.join(__dirname)));

// Mode crash aktif?
if (process.env.CRASH === 'true') {
  console.log('💥 Crash mode aktif! Aplikasi akan crash dalam 5 detik...');
  setTimeout(() => {
    console.log('💥 Simulated crash triggered!');
    process.exit(1);
  }, 5000);
}

app.listen(PORT, () => {
  console.log(`🚀 Web Masjid running on port ${PORT}`);
});
