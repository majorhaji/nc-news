import { useEffect, useState } from "react";
import getArticles from "../api";
const ArticleList = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  if (!articles) {
    return null;
  }
  return (
    <main className="article-list">
      {articles.map((article) => {
        return (
          <article className="article" key={article.article_id}>
            <h4>{article.title}</h4>
            <section className="article-info">
              <p>{article.author}</p>
              <p class="created">{article.created_at}</p>
            </section>
            <section className="article-body">{article.body}</section>
          </article>
        );
      })}
    </main>
  );
};

export default ArticleList;
