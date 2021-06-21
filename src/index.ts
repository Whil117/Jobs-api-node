import express from "express";

const app = express();
const PORT = 8000;

const data = require("../data.json");
console.log(data);

app.use(express.static("public"));

app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  res.json(data)
  res.sendStatus(200).send('OK')
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
