import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById} from "../api";

import CommentList from "./CommentList";
import Voting from "./Voting";

const Article = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState([]);
  const [isLoading, setLoading] = useState(true);
  

  useEffect(() => {
    getArticleById(article_id)
    .then(({ article }) => {
      setArticle(article);
      setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading === true) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <main className="article-comments">
      <article className="article" key={article.article_id}>
        <h4 className="title">{article.title}</h4>
       <Voting votes={article.votes} article_id={article.article_id}/>
        <section className="article-info">
          <p className="topic">#{article.topic}</p>
          <p className="author">Posted by {article.author}</p>
          <p className="created">{article.created_at}</p>
        </section>
        <section className="article-body">{article.body}</section>
        <p className="comment-count">{article.comment_count} comments</p>
      </article>
      <CommentList article_id={article_id} />
    </main>
  );
};

export default Article;
