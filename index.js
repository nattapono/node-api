const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT} 🔥`);

app.get('/', (req, res) => {
    res.send('This is API running..')
})

app.get('/about', (req, res) => {
    res.send('This is about route.')
})

module.exports = app