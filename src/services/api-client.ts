import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5975bf9c91ba4bccb74ae3cb03c219e6",
  },
});
