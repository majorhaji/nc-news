import {postCommentById} from '../api'
// import { useState } from 'react';
const PostComment = ({article_id, setUserPost, setComments, isLoading}) => {
    const postComment = (event) => {
        event.preventDefault()
        const newComment = event.target[1].value
        
       
        postCommentById(article_id, newComment).then(()=> {
            setUserPost(newComment)
        setComments(comments => [...comments, newComment])

        })
    }
 
    return(
        <form className='post-comment' onSubmit={(event => {postComment(event)})}>
            <fieldset>
                <textarea className="comment-area" placeholder='Your thoughts...'></textarea>
            <button className='comment-submit'>Post</button>
            </fieldset>
        </form>
    )

}

export default PostComment
