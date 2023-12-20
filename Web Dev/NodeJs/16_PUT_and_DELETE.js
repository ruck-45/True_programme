// HTTP methods
    // GET : get data  --------> (res.params)
    // POST : send data --------> (res.body)
    // PUT : update data --------> (res.params + res.body)
    // DELETE : delete data ------> (res.params)



// Note each method to a specific path is a separate request
    // app.get('/api/users:id')
    // app.post('/api/users:id')
    // app.put('/api/users:id')
    // app.delete('/api/users:id')

    // all above requests are treated differently by the server as each one represents a different method despite the same URL


// Util Function and data
const isInt = (num) => {
  let status = false;
  let number = undefined;

  if (!isNaN(num) && Number.isInteger(parseFloat(num))) {
    status = true;
    number = parseFloat(num);
  }

  return [status, number];
};

let userData = [
    {
        id: 1,
        name : 'John',
        age : 32,
        profession : 'plumber'
    },
    {
        id: 2,
        name : 'Patrik',
        age : 23,
        profession : 'tutor'
    },
    {
        id: 3,
        name : 'Yumi',
        age : 20,
        profession : 'actress'
    },
    {
        id: 4,
        name : 'Huges',
        age : 40,
        profession : 'fireman'
    },
    {
        id: 5,
        name : 'Timothy',
        age : 32,
        profession : 'shopkeeper'
    },
]


// React server

const express = require('express');
const app = express();
const PORT = 5000;


app.use(express.json());

// Home
app.get('/',(req,res)=>{
    res.status(200).send('Welcome !!');
})

// API
app.get('/api/users',(req,res)=>{
    res.status(200).json(userData);
})

app.get('/api/users/:id',(req,res)=>{
    const [status,id] = isInt(req.params.id);
    if(!status){
        return res.status(400).send("Invalid ID")
    }

    const user = userData.find((data)=>data.id === id)

    if(!user){
        return res.status(404).send("User Not Found")
    }

    res.status(200).send(user);
})

app.post('/api/users',(req,res)=>{
    const {id, name, age, profession} = req.body;

    if(!id || !name || !age || !profession){
        return res.status(406).send("Missing Payload Elements")
    }

    const [idStatus, ID] = isInt(id);
    const [ageStatus, Age] = isInt(age);

    if(!idStatus || !ageStatus){
        return res.status(406).send("Invalid Payload Values");
    }

    const data = {id:ID, name: name, age: Age, profession: profession}
    userData.push(data)

    res.status(201).send("User created!")
    
})

app.put('/api/users/:id',(req,res)=>{
    const { name, age, profession } = req.body;
    const {id} = req.params;

    if (!name || !age || !profession) {
      return res.status(406).send("Missing Payload Elements");
    }

    const [idStatus, ID] = isInt(id);
    const [ageStatus, Age] = isInt(age);

    if (!idStatus || !ageStatus) {
      return res.status(406).send("Invalid Payload Values");
    }

    userData = userData.map((data)=>{
        if(data.id === ID){
            data.name = name;
            data.age = age;
            data.profession = profession;
        }
        return data;
    })

    res.status(200).send("Updation successful");
})

app.delete('/api/users/:id',(req,res)=>{
    const [status, id] = isInt(req.params.id);

    if (!status) {
      return res.status(400).send("Invalid ID");
    }

    userData = userData.filter((data)=>data.id !== id);
    res.status(200).send("Deletion Successful")

})


app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})


