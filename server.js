//const express = require('express');
import express from 'express';
const app = express();
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });
//get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
const jokes = [
    {
        id: 1,
        title:"Joke 1",
        content: "Why did the scarecrow win an award? Because he was outstanding in his field."
    },
    {
        id: 2,
        title:"Joke 2",
        content: "Why don't scientists trust atoms? Because they make up everything."
    },
    {
        id: 3,
        title:"Joke 3",
        content: "What do you call a fake noodle? An impasta."
    },
    {
        id: 4,
        title:"Joke 4",
        content: "Want to hear a joke about construction? I'm still working on it."
    },
    {
        id: 5,
        title:"Joke 5",
        
        content: "Why did the math book look sad? Because it had too many problems."
    }



]
res.json(jokes);});




const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:5000`);
});

