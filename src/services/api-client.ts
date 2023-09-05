import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "ea9972067acb4ae3b5a32c0d0111184c" },
});
