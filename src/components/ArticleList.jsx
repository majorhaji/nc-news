import { useEffect, useState } from "react";
import {getArticles} from "../api";
import {Link} from 'react-router-dom';
const ArticleList = () => {
  const [articles, setArticles] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const date = new Date();

  const currentYear = date.getFullYear();

  useEffect(() => {
    setLoading(true);
    getArticles().then((articles) => {
      setArticles(articles);
      setLoading(false);
    }).catch(err => console.log(err))
  }, []);

 

  if(isLoading){
    return(
      <p className="loading">Loading...</p>
    )
  }
  return (
    <main className="article-list">
      {articles.map((article) => {
        const timestamp = article.created_at.slice(0,4); 

         let articleAge = currentYear-  parseInt(timestamp)

         articleAge > 1 ? articleAge+= ` years ago` : articleAge+= ` year ago`
        return (
          <article className="article" key={article.article_id}>
            <h4 className="title"><Link to={`/article/${article.article_id}`}>{article.title}</Link></h4>
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
