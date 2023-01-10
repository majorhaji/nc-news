import {useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import {getArticleById, getCommentsById} from '../api'

const Article = () => {

    let {article_id} = useParams();

    const [article, setArticle] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [comments, setComments] = useState([])

    useEffect(() => {
        setLoading(true);
        getArticleById(article_id).then(({article}) => {
          setArticle(article);
          return getCommentsById(article_id)  
        }).then(({comments}) => {
          setComments(comments)
          setLoading(false);
        }).catch(err => console.log(err))
    }, [])
    

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
                <p className="comment-count">{article.comment_count} comments</p>
              </article>
              <article className="comments">
               
                {comments.map((comment) => {
                  return(
                    <section className='comment' key={comment.comment_id}>
                      <aside className="votes">{comment.votes}</aside>
                      <section className="comment-info">
                      <p className="author">{comment.author}</p>
                  <p className="created">{comment.created_at}</p>
                      </section>
                      <p className="comment-body">{comment.body}</p>
                    </section>
                  )
                })}
              </article>
        </main>
      );

} 

export default Article