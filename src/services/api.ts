import axios from "axios";

const api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: "http://api.github.com",
});

export { api };