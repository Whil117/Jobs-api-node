const express = require('express')
import { data } from "./assets/data";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.use("/images", express.static("images"));

app.get(
  "/",
  (
    req: any,
    res: {
      send: (
        arg0: {
          id: number;
          title: string;
          company: { name: string; logo: string };
          descript: { ago: string; time: string; only: string };
        }[]
      ) => any;
    }
  ) => res.send(data)
);

app.listen(process.env.PORT || PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
