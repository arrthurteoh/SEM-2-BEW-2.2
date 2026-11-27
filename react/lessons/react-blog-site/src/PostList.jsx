import Post from "./Post.jsx"
export default function PostList({posts}){
    return (
       <div>
        {posts.map((post,index) => (
            <Post key={index} {...post}/>
         ))}
       </div>
    )
}