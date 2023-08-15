import express from "express";
import cors from "cors";
import fs from "fs";
import { join } from "path";
import "dotenv/config";
import dbconnection from "./db/dbConnection";
import { paymentRequestHandler } from "./handlers/paymentRequest";
const app = express();

// Apply middlware for CORS and JSON endpoing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbconnection();

app.post("/payment-request", paymentRequestHandler);
app.get("/webhook/:merchantId", paymentRequestHandler);
app.get("/pay", (req, res) =>
  res.sendFile(join(__dirname, "../UI/index.html"))
);
app.listen(process.env.PORT, () => console.log(" app listening on port 3000!"));
