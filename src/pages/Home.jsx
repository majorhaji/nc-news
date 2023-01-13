import { useState } from "react";
import ArticleList from "../components/ArticleList";
import Header from "../components/Header";
import Sort from "../components/Sort";
import TopicNav from "../components/TopicNav";

const Home = () => {

  const [sort, setSort] = useState()
  const [order, setOrder] = useState()
  return (
    <div className="App">
      <Header/>
      <TopicNav/>
      <Sort setOrder={setOrder} setSort={setSort}/>
      <ArticleList order={order} sort={sort}/>
    </div>
  );
};

export default Home;
