import { useEffect, useState } from "react";
import getArticles from "../api";
const ArticleList = () => {
  const [articles, setArticles] = useState(null);

  const date = new Date();

  const currentYear = date.getFullYear();

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
        const timestamp = article.created_at.slice(0,4); 

         let articleAge = currentYear-  parseInt(timestamp)

         articleAge > 1 ? articleAge+= ` years ago` : articleAge+= ` year ago`
        return (
          <article className="article" key={article.article_id}>
            <h4 className="title">{article.title}</h4>
            <aside className="votes">{article.votes}</aside>
            <section className="article-info">
            <p className="topic">#{article.topic}</p>
              <p className="author">Posted by {article.author}</p>
              <p className="created">{articleAge}</p>
            </section>
            <section className="article-body">{article.body}</section>
          </article>
        );
      })}
    </main>
  );
};

export default ArticleList;
