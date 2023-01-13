import { useEffect, useState } from "react";
import {getArticles, getSortedArticles} from "../api";
import {Link} from 'react-router-dom';
import moment from 'moment'
const ArticleList = ({sort, order}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
 
  
  useEffect(() => {
    setLoading(true);
    if(sort){
       getSortedArticles(sort, order).then((articles) => {
        setArticles(articles);
        setLoading(false);
       })
    } else{
      getArticles().then((articles) => {
        setArticles(articles);
        setLoading(false);
      })
    }
    
  }, [sort, order]);

 

  if(isLoading){
    return(
      <p className="loading">Loading...</p>
    )
  }
  return (
    <main className="article-list">
      {articles.map((article) => {
        const timestamp = article.created_at

        let articleAge = moment().diff(timestamp)

         articleAge > 1 ? articleAge+= ` years ago` : articleAge+= ` year ago`
        return (
          <article className="article" key={article.article_id}>
            <h4 className="title"><Link to={`/article/${article.article_id}`}>{article.title}</Link></h4>
            <aside className="votes"><p className="vote">{article.votes}</p><p className="comment-count">Comments:<br></br>{article.comment_count}</p></aside>
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
