import React, { useState } from "react";
import Button from "./UI/button/Button";
import Input  from "./UI/input/Input";
import Select from "./UI/select/Select"

function PostForm({posts, setPosts,sortPosts}) {
  let [newPost, setNewPost] = useState({title:"", body:""})
  let [sort, setSort] = useState("")


  function addPost(e) {
    e.preventDefault()
    let {title,body} = newPost
    if(!title && ! body){
      alert("Inputs shouldn't be emty")
      return
    }
    setPosts([...posts, {id: Date.now(), title, body}])
    setNewPost({title:"", body:""})
  }

  const onChangeSelect = (e) => {
    setSort(e.target.value)
    sortPosts(e.target.value)
  }

  return (
    <form>
      <Input
        value={newPost.title}
        onChange={(e)=>setNewPost({...newPost, title: e.target.value})}
        placeholder="Title"
      />
      <Input
        value={newPost.body}
        onChange={(e)=>setNewPost({...newPost, body: e.target.value})}
        placeholder="Body"
      />
      <Button onClick={addPost}>Create Post</Button>
      <Select 
        value={sort} 
        onchange={onChangeSelect}
        defaultValue="Sort by:"
      >
          <option value="title">By title</option>
          <option value="body">By body</option>
      </Select>
  </form>
  )
}

export default PostForm