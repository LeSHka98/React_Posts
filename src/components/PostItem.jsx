import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Fetch from "../API/Fetch";
import "./PostItem.css"
import Loader from "./UI/loader/Loader";

function PostItem() {
  const params = useParams()
  let [postItem, setPostItem] = useState({})
  let [comments, setComments] = useState([])
  let [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    let fetchPost = async () => {
      setIsLoading(true)
      let data = await Fetch.getOne(params.id)
      setPostItem(data)
      let info = await Fetch.getComments(params.id)
      setComments(info)
      setIsLoading(false)
    }
    fetchPost()
  }, []);

  return ( 
    <div className="postitem">
      <h1>PostItem {params.id}</h1>
        <h2>{postItem.title}</h2> 
        <div>{postItem.body}</div>
      <h1>Comments</h1>
      <div>

        {
          isLoading
          ? <Loader/>
          : comments.map((comment)=>{
            return <div key={comment.id}>
                <span style={{color: "teal", fontWeight:"bold"}}>{comment.email} : </span>
                <p style={{fontStyle:"italic"}}>
                  {comment.body}
                </p> 
              </div>
          })
        }
      </div>
    </div> 
    );
}

export default PostItem;