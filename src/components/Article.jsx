import {useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import {getArticleById} from '../api'

const Article = () => {

    let {article_id} = useParams();

    const [article, setArticle] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getArticleById(article_id).then(({article}) => {
            setArticle(article);
            setLoading(false);
        })
    }, [])
    if (!article) {
        return <p className="error">No Articles Found</p>
      }

      if(isLoading===true){
        return(
          <p className="loading">Loading...</p>
        )
      }
     

      return (
        
        <main className="article-comments">
              <article className="article" key={article.article_id}>
                <h4 className="title">{article.title}</h4>
                <aside className="votes">{article.votes}</aside>
                <section className="article-info">
                <p className="topic">#{article.topic}</p>
                  <p className="author">Posted by {article.author}</p>
                  <p className="created">{article.created_at}</p>
                </section>
                <section className="article-body">{article.body}</section>
              </article>
        </main>
      );

} 

export default Article