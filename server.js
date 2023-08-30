import express from "express";
import colors from "colors";
import dotenv from "dotenv";
// import morgan from "morgan";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoute.js";

//---configure env
dotenv.config();

//---database config
// connectDB();

//---rest object for create Api
const app = express();

//---middleware
// app.use(express.json());
// app.use(morgan("dev"));

//--routes
// app.use("/api/v1/auth", authRoutes);

//---est api
app.get("/", (req, res) => {
  res.send("<h1>Welcome test to E-commerce app</h1>");
});

//---PORT
const PORT = process.env.PORT || 8080;
// const PORT = 8080;

//---run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
