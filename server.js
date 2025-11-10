const express = require('express');
const app = express();
const PORT = 3000;

// Serve file HTML & CSS
app.use(express.static(__dirname));

// Route utama
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Tambahkan kondisi crash lewat environment variable
if (process.env.CRASH === 'true') {
  console.log('💥 Simulated crash mode aktif!');
  setTimeout(() => {
    console.log('💥 Crashing the app...');
    process.exit(1);
  }, 5000);
} else {
  console.log('🚀 App berjalan normal di port', PORT);
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
