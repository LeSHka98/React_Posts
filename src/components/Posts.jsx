import React, { useState,useEffect } from "react";
import Fetch from "../API/Fetch";
import "../App.css"
import PostForm from "./PostForm";
import PostList from "./PostList";
import Button from "./UI/button/Button";
import Input  from "./UI/input/Input";
import Loader from "./UI/loader/Loader";

function Posts() {


  let [posts, setPosts] = useState([])
  let [search, setSearch] = useState("")
  let [isLoading, setIsLoading] = useState(false)
  let [totalCount,setTotalCount] = useState(0)
  let [page,setPage] = useState(1)

  let limit = 10;
  let totalPages = Math.ceil(totalCount/limit)
  let pagebuttons = []
  for (let i = 0; i < totalPages; i++) {
    pagebuttons.push(i+1)
  }

  useEffect( () => {
    async function fetchPosts(){
      setIsLoading(true)
        let response = await Fetch.getAll(limit,page)
        let data = await response.json()
        setPosts(data)
        setTotalCount(response.headers.get('x-total-count') )
      setIsLoading(false)
    }
    fetchPosts()
  }, [page]);
  
let searchPosts = posts.filter((post)=>post.title.includes(search) || post.body.includes(search))  || [];

function removePost(id) {
  setPosts(posts.filter(post => post.id !== id))
}
function sortPosts(sort) {
  setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
}

  return (
    <div className="App">
      <div className="form">
        <PostForm posts={posts} setPosts={setPosts} sortPosts={sortPosts}/>
        <Input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Find Posts"
        />
      </div>
      <div>
        {isLoading
        ? <Loader/>
        : <PostList remove={removePost} posts={searchPosts}/>
        }
          <div style={{display: "flex", justifyContent: "center"}}>
              {
                pagebuttons.map((p)=>
                <Button style={{margin: 3, fontSize: 20}} key={p} onClick={()=>setPage(p)}>{p}</Button>
                )
              }
          </div>
      </div>
    </div>
  )
}

export default Posts