const express = require('express');
const cors = require('cors');
const { default: ollama } = require('ollama');
const app = express();
const port = 8000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.post('/ollama', async (req, res) => {
    try {
        const { question } = req.body;
        if (!question) {
            throw new Error('Question not provided');
        }

        const response = await ollama.chat({
            model: 'llama3.1',
            messages: [{ role: 'user', content: question }],
          })
        res.json(response.message.content);
    } catch (error) {
        console.log("error", error)
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
