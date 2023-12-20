const isInt = (num) => {
  let status = false;
  let number = undefined;

  if (!isNaN(num) && Number.isInteger(parseFloat(num))) {
    status = true;
    number = parseFloat(num);
  }

  return [status, number];
};

// Data
let userData = [
  {
    id: 1,
    name: "John",
    age: 32,
    profession: "plumber",
  },
  {
    id: 2,
    name: "Patrik",
    age: 23,
    profession: "tutor",
  },
  {
    id: 3,
    name: "Yumi",
    age: 20,
    profession: "actress",
  },
  {
    id: 4,
    name: "Huges",
    age: 40,
    profession: "fireman",
  },
  {
    id: 5,
    name: "Timothy",
    age: 32,
    profession: "shopkeeper",
  },
];


// Get Functions
const getAllUsers = (req, res) => {
  res.status(200).json(userData);
};

const getUser = (req, res) => {
  const [status, id] = isInt(req.params.id);
  if (!status) {
    return res.status(400).send("Invalid ID");
  }

  const user = userData.find((data) => data.id === id);

  if (!user) {
    return res.status(404).send("User Not Found");
  }

  res.status(200).send(user);
};

// Post Functions

const postUser = (req, res) => {
  const { id, name, age, profession } = req.body;

  if (!id || !name || !age || !profession) {
    return res.status(406).send("Missing Payload Elements");
  }

  const [idStatus, ID] = isInt(id);
  const [ageStatus, Age] = isInt(age);

  if (!idStatus || !ageStatus) {
    return res.status(406).send("Invalid Payload Values");
  }

  const data = { id: ID, name: name, age: Age, profession: profession };
  userData.push(data);

  res.status(201).send("User created!");
};

// Put Functions

const updateUser = (req, res) => {
  const { name, age, profession } = req.body;
  const { id } = req.params;

  if (!name || !age || !profession) {
    return res.status(406).send("Missing Payload Elements");
  }

  const [idStatus, ID] = isInt(id);
  const [ageStatus, Age] = isInt(age);

  if (!idStatus || !ageStatus) {
    return res.status(406).send("Invalid Payload Values");
  }

  userData = userData.map((data) => {
    if (data.id === ID) {
      data.name = name;
      data.age = age;
      data.profession = profession;
    }
    return data;
  });

  res.status(200).send("Updation successful");
};

// Delete Functions

const deleteUser = (req, res) => {
  const [status, id] = isInt(req.params.id);

  if (!status) {
    return res.status(400).send("Invalid ID");
  }

  userData = userData.filter((data) => data.id !== id);
  res.status(200).send("Deletion Successful");
};


module.exports = {
    isInt, getAllUsers, getUser, postUser, updateUser, deleteUser
}