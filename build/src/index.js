"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const data_1 = require("./assets/data");
const app = express();
const PORT = 3000;
app.use(express.static("public"));
app.use("/images", express.static("images"));
app.get("/", (req, res) => res.send(data_1.data));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
