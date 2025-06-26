require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const userName = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

const uri = `mongodb+srv://${userName}:${password}@practice1.stkfhhm.mongodb.net/?retryWrites=true&w=majority&appName=practice1`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const database = client.db('taskDB');
    const taskCollection = database.collection('tasks');


    app.get('/homeTasks', async (req, res) => {
      const allTasks = await taskCollection.find().toArray();

      function parseDeadline(deadlineStr) {
        const [day, month, year] = deadlineStr.split("-");
        return new Date(`${year}-${month}-${day}`);
      }
      const today = new Date();
      const upcomingTasks = allTasks
        .filter(task => parseDeadline(task.deadline) >= new Date(today.toDateString()))
        .sort((a, b) => parseDeadline(a.deadline) - parseDeadline(b.deadline))
        .slice(0, 6);

      res.send(upcomingTasks);
    });

    app.get('/tasks', async (req, res) => {
      const cursor = taskCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/tasks/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await taskCollection.findOne(query);
      res.send(result);
    })

    app.post('/tasks', async (req, res) => {
      const newTask = req.body;
      const result = await taskCollection.insertOne(newTask);
      res.send(result);
    })

    app.patch('/tasks/:id', async (req, res) => {
      const id = req.params.id;
      const updateTask = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = { $set: updateTask };
      const result = await taskCollection.updateOne(query, updateDoc, options);
      res.send(result);
    })

    app.put('/tasks/:id', async (req, res) => {
      const id = req.params.id;
      const updateTask = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = { $set: updateTask };
      const result = await taskCollection.updateOne(query, updateDoc, options);
      res.send(result);
    })

    app.delete('/task/:id',  async(req,res)=>{
      const id  = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await taskCollection.deleteOne(query);
      res.send(result);
    })


  } finally { }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World');
})


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
