import {getCommentsById} from '../api'
import {useEffect, useState } from 'react';

const CommentList = ({article_id}) => {
    const [isLoading, setLoading] = useState(true);
    const [comments, setComments] = useState([])

  

    useEffect(() => {
        setLoading(true);
        getCommentsById(article_id)  
        .then(({comments}) => {
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
    )
}

export default CommentList