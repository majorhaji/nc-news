import {postCommentById} from '../api'
import { useState } from 'react';
const PostComment = ({article_id, setUserPost}) => {
    const [posted, setPosted] = useState(false);
    

    const postComment = (event) => {
        event.preventDefault()
        const newComment = event.target[1].value
        setUserPost(newComment)
        postCommentById(article_id, newComment)
        setPosted(true);
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
