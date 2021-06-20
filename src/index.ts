import express from "express";
import { data } from "./assets/data";

const app = express();
const PORT = 3000;


app.use(express.static("public"));

app.use("/images", express.static("images"));

app.get("/", (req, res) => res.send(data));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
