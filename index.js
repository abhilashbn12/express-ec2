import express from 'express';

const app = express();

app.listen(3000, () => console.log("Api running on Port:3000"));
app.get('/', (req, res) => res.json("Hello World!"))