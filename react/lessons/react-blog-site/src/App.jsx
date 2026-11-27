import './App.css'
import Header from './Header'
import Post from './Post'
import PostList from './PostList';

function App() {
  const posts = [
    {
      title: "My First Blog Post",
      author: "John Doe",
      content: "This is my first blog post!",
      comments: ["Great post!", "Thanks for sharing."],
    },
    {
      title: "My Second Blog Post",
      author: "Jane Doe",
      content: "This is my second blog post!",
      comments: ["Excellent post!", "Keep it up.", "You are amazing"],
    },
  ];

  return (
    <div className='App'>
     <Header />
     <PostList posts={posts} />
    </div>
  )
}

export default App
