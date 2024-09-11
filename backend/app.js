import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World!",
  });
});
