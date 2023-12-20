const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.static("./test-form"));
app.use(express.urlencoded({ extended: false })); // to decode encoded url got from POST request from a <form></form> element and deliver them to req.body
app.use(express.json()); // to decode any json based post request and deliver them to req.body

app.post("/auth", (req, res) => {
  const content = req.body;
  console.log(content); // any logic to do with the post data
  res.status(201).send("Success"); // response to the request as successfull
});

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
