import { useHistory } from "react-router-dom"
import "./Post.css"
import Button from "./UI/button/Button"

function Post({remove, post}) {
const router = useHistory()
  return (
    <div className="Post">
      <span className="Post_index">{post.id}</span>
      <div className="Post_content">
        <div className="Post_block">
          <div>
            <h2 className="Post_head">{post.title}</h2>
            <p style={{textAlign: "justify"}}>{post.body}</p>
          </div>
        </div>
        <div className="controls">
          <Button type="regular" onClick={()=>router.push(`/posts/${post.id}`)}>
              Open
          </Button>
          <Button type="danger" onClick={()=>remove(post.id)}>
              Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Post