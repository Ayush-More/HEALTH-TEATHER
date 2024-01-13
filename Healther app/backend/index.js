const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 3000;

// Use bodyParser middleware to parse incoming JSON data
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(cors());

app.post("/signup", (req, res) => {
  const {
    clientId,
    clientLogoUrl,
    userID,
    userName,
    password,
    confirmPassword,
  } = req.body;

  if (
    !clientId ||
    !clientLogoUrl ||
    !userID ||
    !userName ||
    !password ||
    !confirmPassword
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match." });
  }

  // Read existing data from the signUp.json file
  let signUpData = [];
  try {
    signUpData = JSON.parse(fs.readFileSync("signUp.json", "utf8"));
  } catch (err) {
    console.error("Error reading signUp.json:", err);
    return res.status(500).json({ error: "Internal Server Error." });
  }

  // Add new sign-up data
  signUpData.push({
    clientId,
    clientLogoUrl,
    userID,
    userName,
    password,
  });

  // Write updated data back to the signUp.json file
  try {
    fs.writeFileSync(
      "signUp.json",
      JSON.stringify(signUpData, null, 2),
      "utf8"
    );
  } catch (err) {
    console.error("Error writing to signUp.json:", err);
    return res.status(500).json({ error: "Internal Server Error." });
  }

  res.status(200).json({ message: "Sign-up successful!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
