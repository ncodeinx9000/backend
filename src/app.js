import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//form se jo data araha
app.use(express.json({ limit: "16kb" }));
export { app };
//url se jo data araha
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//public file se data ayega
app.use(express.static("public"));
app.use(cookieParser());

export { app };
