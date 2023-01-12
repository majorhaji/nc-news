import ArticleList from "../components/ArticleList";
import Header from "../components/Header";
import TopicNav from "../components/TopicNav";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <TopicNav/>
      <ArticleList />
    </div>
  );
};

export default Home;
