import express from "express";
import "reflect-metadata";
import dataSource from "./functions/dataSource.js";
import indexRouter from "./routes/index.js";
import urlsRouter from "./routes/urls.js";

const app = express();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", urlsRouter);
app.use("/l", indexRouter);

// Server Setup
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

//load database
dataSource
  .initialize()
  .then(() => {
    console.log("Database is up");
  })
  .catch((err) => console.error(err));
