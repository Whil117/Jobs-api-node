const express = require("express");
const app = express();
const cors = require("cors");
const data = require("./data.json");

const PORT = 8000;

app.use(cors());
app.use(express.static("public"));
app.use("/images", express.static("images"));

app.get("/", (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; } ) => {
  res.status(200).json(data)
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

module.exports = app;

//    "dev": "nodemon src/index.ts",
