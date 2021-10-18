import Post from "./Post";
import "./PostList.css"
import {CSSTransition,TransitionGroup} from 'react-transition-group';

function PostList({posts, remove}) {
  if(!posts.length)return <h1 style={{textAlign:"center"}}>No posts</h1>

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Post List</h1>
      <TransitionGroup>
        {posts.map((post) =>
        <CSSTransition key={post.id} timeout={400} classNames="post">
            <Post  post={post} remove={remove}/>
        </CSSTransition>      
            )
        }
      </TransitionGroup>
    </div>
  )
}

export default PostList