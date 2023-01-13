import Topic from "../components/Topic";
import Header from "../components/Header"
import TopicNav from "../components/TopicNav";
import Sort from "../components/Sort";
import { useState } from "react";

const TopicPage = () => {
    const [sort, setSort] = useState()
  const [order, setOrder] = useState()
  
    return (
        <div className="App">

        <Header/>
        <TopicNav/>
        <Sort setOrder={setOrder} setSort={setSort}/>
        <Topic order={order} sort={sort}/>
        </div>
    )
}

export default TopicPage;