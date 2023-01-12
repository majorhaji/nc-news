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

export function getTopics() {
  return api.get(`/api/topics`).then(({ data }) => {
    return data;
  });
}


export function getArticlesByTopic(topic) {
  return api.get(`/api/articles?topic=${topic}`).then(({ data }) => {
    return data;
  });
}


export function postCommentById(article_id, post) {
  return api
    .post(`/api/articles/${article_id}/comments`, {
      username: "tickle122",
      body: post,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
    
    

export default {
  getArticles,
  getArticleById,
  getCommentsById,
  incrementVotes,
  getArticlesByTopic,
  getTopics,
  postCommentById
};





