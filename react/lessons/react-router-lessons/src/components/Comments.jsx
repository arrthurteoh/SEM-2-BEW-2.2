import { useParams } from "react-router";

const Comments = () => {
  let { id } = useParams();

  return (
    <div>
      <h2>Comments for Blog Post {id}</h2>
      <p>Comment 1 for post {id}</p>
      <p>Comment 2 for post {id}</p>
    </div>
  );
};

export default Comments;