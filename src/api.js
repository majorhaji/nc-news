import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-api-project-2.onrender.com",
});

export default function getArticles() {
  return api.get("/api/articles").then(({ data: { articles } }) => {
    return articles;
  });
}
