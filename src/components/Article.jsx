import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, incrementVotes } from "../api";

import CommentList from "./CommentList";

const Article = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [upVote, setUpvote] = useState("upvote");
  const [downVote, setDownvote] = useState("downvote");
  const [currVote, setCurrVote] = useState();
  const [upVoteClicked, setUpClicked] = useState();
  const [downVoteClicked, setDownClicked] = useState();

  const handleUpvote = (votes) => {
    if (!upVoteClicked) {
      
      setCurrVote(votes);
      setDownClicked(false);
      setDownvote("downvote");
      
      setUpvote("upvoted");
      setCurrVote(currVote + 1);
      localStorage.setItem("UpvoteClicked", upVote);

      setUpClicked(true);

      incrementVotes(article_id, 1);
    }
  };

  const handleDownvote = (votes) => {
    if (!downVoteClicked) {
      setCurrVote(votes);
      setUpClicked(false);
      setUpvote("upvote");

      setDownvote("downvoted");
      setCurrVote(currVote - 1);
      
      localStorage.setItem("DownvoteClicked", downVote);
      setDownClicked(true);
      incrementVotes(article_id, -1);
    }
  };

  useEffect(() => {
    const downvoteItem =localStorage.getItem("DownvoteClicked");
    const item = localStorage.getItem('UpvoteClicked');
    setLoading(true);
    
    getArticleById(article_id)
    .then(({ article }) => {
      setArticle(article);
      setCurrVote(article.votes);
      if(item){
        localStorage.removeItem("DownvoteClicked")
        setDownvote("downvote")
        setUpvote("upvoted")
      }
      if(downvoteItem){
        localStorage.removeItem("UpvoteClicked")
        setUpvote("upvote")
        setDownvote("downvoted")
      }
      setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [upVote, downVote]);

  if (isLoading === true) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <main className="article-comments">
      <article className="article" key={article.article_id}>
        <h4 className="title">{article.title}</h4>
        <aside className="votes">
          <span
            class={upVote}
            onClick={(event) => {
              handleUpvote(article.votes);
            }}
          >
            <svg width="36" height="36">
              <path d="M2 14h32L18 0 10z" fill="currentColor"></path>
            </svg>
          </span>
          <p>{currVote}</p>
          <span
            class={downVote}
            onClick={(event) => {
              handleDownvote(article.votes);
            }}
          >
            <svg width="36" height="36">
              <path d="M2 10h32L18 26 2 10z" fill="currentColor"></path>
            </svg>
          </span>
        </aside>
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
