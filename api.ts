// import cors from "cors";
// import express from "express";
// import axios from "axios";
// import * as dotenv from "dotenv";

// dotenv.config();

// const axiosInstance = axios.create({
//   baseURL: "https://api.rawg.io/api",
// });

// const app = express();

// app.use(cors());

// app.get("/getGames", (req, res, next) => {
//   axiosInstance
//     .get("/games", {
//       params: { key: process.env.VITE_RAWG_API_KEY },
//     })
//     .then((response) => {
//       res.json(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// app.listen(process.env.VITE_PORT, () =>
//   console.log(`Server port on: ${process.env.VITE_PORT || 3001}`)
// );
