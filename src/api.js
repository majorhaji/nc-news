import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-api-project-2.onrender.com",
});

export function getArticles() {
  return api.get("/api/articles").then(({ data: { articles } }) => {
    return articles;
  });
}

export function getArticleById(article_id) {
  return api.get(`/api/articles/${article_id}`).then(({ data }) => {
    return data;
  });
}

export function getCommentsById(article_id) {
  return api.get(`/api/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
}

export function incrementVotes(article_id, vote) {
  return api.patch(`/api/articles/${article_id}`, { inc_votes: vote });
}
export default { getArticles, getArticleById, getCommentsById, incrementVotes };
