import { BrowserRouter, Routes, Route } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Comments from "./components/Comments";
import "./App.css";

/* 1. BrowserRouter: Uses the HTML5 history API to keep your UI in sync with the URL.
   2. Routes: A component that allows us to define multiple routes.
   3. Route: Used to define a single route.
*/

const App = () => {
  return (
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />}>
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;