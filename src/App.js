import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import TopicPage from "./pages/TopicPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/article/:article_id" element={<ArticlePage />}></Route>
        <Route path="/topics/:topic" element={<TopicPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
