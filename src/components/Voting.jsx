import { useEffect, useState } from "react";
import { incrementVotes} from "../api";
const Voting = ({votes, article_id}) => {
    const [upVote, setUpvote] = useState("upvote");
  const [downVote, setDownvote] = useState("downvote");
  const [currVote, setCurrVote] = useState(votes);
  const [upVoteClicked, setUpClicked] = useState();
  const [downVoteClicked, setDownClicked] = useState();


  useEffect(() => {
}, [currVote])
const handleUpvote = () => {
  if (!upVoteClicked) {
    setDownClicked(false);
    setDownvote("downvote");
    
    setUpvote("upvoted");
    setCurrVote(currVote + 1);
  
    setUpClicked(true);

    incrementVotes(article_id, 1).catch(err => {
        console.log(err)
        setCurrVote(currVote-1)
    })
  }
};

const handleDownvote = () => {
  if (!downVoteClicked) {
    setUpClicked(false);
    setUpvote("upvote");

    setDownvote("downvoted");
    setCurrVote(currVote - 1);
  
    setDownClicked(true);
    incrementVotes(article_id, -1).catch(err => {
        console.log(err)
        setCurrVote(currVote+1)
    })
  }
};

    return (
        <aside className="votes">
        <span
          class={upVote}
          onClick={() => {
            handleUpvote();
          }}
        >
          <svg width="36" height="36">
            <path d="M2 14h32L18 0 10z" fill="currentColor"></path>
          </svg>
        </span>
        <p>{currVote}</p>
        <span
          class={downVote}
          onClick={() => {
            handleDownvote();
          }}
        >
          <svg width="36" height="36">
            <path d="M2 10h32L18 26 2 10z" fill="currentColor"></path>
          </svg>
        </span>
      </aside>
    )
}

export default Voting