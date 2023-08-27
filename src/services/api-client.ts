import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "e5c673c3c71342f4b96ffcd3ba9abb5b" },
});
