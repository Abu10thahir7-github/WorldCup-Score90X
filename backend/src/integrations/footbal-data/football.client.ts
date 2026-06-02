import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const footballClient =
  axios.create({
    baseURL:
      process.env.FOOTBALL_BASE_URL,

    headers: {
      "X-Auth-Token":
        process.env.FOOTBALL_API_KEY,
    },
  });