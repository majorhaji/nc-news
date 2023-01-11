import {getCommentsById} from '../api'
import {useEffect, useState } from 'react';
import PostComment from './PostComment';
import moment from 'moment';

const CommentList = ({article_id}) => {
    const [isLoading, setLoading] = useState(true);
    const [comments, setComments] = useState([])
    const [userPost, setUserPost] = useState()


    useEffect(() => {
        setLoading(true);
        getCommentsById(article_id)  
        .then(({comments}) => {
          setComments(comments)
          setLoading(false);
          comments.map((comment) => {
            if(moment().diff(comment.created_at) < 70000){
              comment.class="new-comment";
            } else{
              comment.class="comment"
            }
          })
        }).catch(err => console.log(err))
    }, [userPost])
    
    if(isLoading){
        return(
          <p className="loading">Loading...</p>
        )
      }


    return (
        <article className="comments">
               
                {comments.map((comment) => {
                  return(
                    <section className={comment.class} key={comment.comment_id}>
                      <aside className="votes">{comment.votes}</aside>
                      <section className="comment-info">
                      <p className="author">{comment.author}</p>
                  <p className="created">{comment.created_at}</p>
                      </section>
                      <p className="comment-body">{comment.body}</p>
                    </section>
                  )
                })}
                <PostComment article_id={article_id} setUserPost={setUserPost}/>
              </article>
    )
}

export default CommentList