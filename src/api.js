import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-api-project-2.onrender.com",
});

export function getArticles() {
  return api
    .get("/api/articles")
    .then(({ data: { articles } }) => {
      return articles;
    })
    .catch((err) => console.log(err));
}

export function getArticleById(article_id) {
  return api
    .get(`/api/articles/${article_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
}

export default { getArticles, getArticleById };
