import { useEffect, useState } from "react"
import { getTopics } from "../api"
import { Link } from "react-router-dom"

const TopicNav = () => {
        const [topics, setTopics] = useState([]);
        useEffect(() => {
            getTopics().then(({topics}) => {
                setTopics(topics)
            })
        }, [])
        return(
            <nav className="topic-nav">
                {topics.map((topic) => {
                    return(
                        <Link to={`/topics/${topic.slug}`} key={topic.slug} className="nav-link">#{topic.slug}</Link>
                    )
                })
                }
                
            </nav>
        )
}

export default TopicNav