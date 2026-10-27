const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [
    {id: 1, title: 'Learn Node.js basics', completed: true},
    {id: 2, title: 'Set up Express server', completed:true},
    {id: 3, title: 'Create RESTful API', completed: false}
];

app.get('/api/tasks', (req, res) =>{
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const newTask= {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(port, ()=>{
  console.log(`server is running on port ${port}`);
});