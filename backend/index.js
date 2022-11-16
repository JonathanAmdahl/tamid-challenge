import cors from "cors";
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
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});

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
