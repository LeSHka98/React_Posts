import { BrowserRouter,Redirect,Route,Switch } from "react-router-dom";
import PostItem from "./components/PostItem";
import Posts from "./components/Posts";

function App() {
  return ( 
    <div>
      <BrowserRouter>
        <Switch>
        <Route exact path="/posts">
            <Posts/>
          </Route>
          <Route exact path="/posts/:id">
            <PostItem/>
          </Route>
          <Redirect to="/posts"/>
        </Switch>
      </BrowserRouter>
    </div>
   );
}

export default App;