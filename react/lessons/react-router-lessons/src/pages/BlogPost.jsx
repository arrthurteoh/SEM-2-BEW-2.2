import { Link, Outlet, useNavigate, useParams } from "react-router";

const BlogPost = () => {
  const { id } = useParams();

  let navigate = useNavigate()

  const goback = () => {
  navigate("/blog");
};
  return (
    <div>
      <h1>Blog Post</h1>
      <p>This is the content for blog post ID: {id}</p>
      <Link to={`/blog/${id}/comments`}>View Comments</Link>
      <Outlet />
      <button onClick={goback}>
         Back to Blog
      </button>
    </div>
  );
};

export default BlogPost;