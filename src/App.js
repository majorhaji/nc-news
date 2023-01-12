import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import TopicPage from "./pages/TopicPage";
import Header from "./components/Header";
import TopicNav from "./components/TopicNav";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <TopicNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/article/:article_id" element={<ArticlePage />}></Route>
        <Route path="/topics/:topic" element={<TopicPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
