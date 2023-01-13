import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticlesByTopic, getSortedTopicArticles } from "../api";
import { Link } from "react-router-dom";
import moment from 'moment';
const Topic = ({sort, order}) => {

    const {topic}= useParams()

    const [articles, setArticles] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
      if(sort){
        getSortedTopicArticles(topic, sort, order).then((articles) => {
         setArticles(articles);
         setLoading(false);
        })
     } else{
      getArticlesByTopic(topic).then(({articles}) => {
        setLoading(false);
        setArticles(articles);
    }).catch((err) => {
        console.log(err);
    })
     }
        

    }, [sort, order])

    if(isLoading){
        return(
            <p className="loading">Loading...</p>
          )
    }

    return (
        <main className={`${topic}-list article-list`}>
      {articles.map((article) => {
        const timestamp = article.created_at

        let articleAge = moment().diff(timestamp)

         articleAge > 1 ? articleAge+= ` years ago` : articleAge+= ` year ago`
        
        return (
          <article className={`${topic} article`} key={article.article_id}>
            <h4 className={`${topic}-title title`}><Link to={`/article/${article.article_id}`}>{article.title}</Link></h4>
            <aside className={`${topic}-votes votes`}><p className="vote">{article.votes}</p><p className="comment-count">Comments:<br></br>{article.comment_count}</p></aside>
            <section className={`${topic}-info article-info`}>
            <p className={`${topic}-topic`}>#{article.topic}</p>
              <p className={`${topic}-author`}>Posted by {article.author}</p>
              <p className="created">{articleAge}</p>
            </section>
            <section className={`${topic}-article-body`}>{article.body}</section>
          </article>
        );
      })}
    </main>
      );

}

export default Topic