import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import GetAllPosts from "./components/Posts/AllPosts";
import PostForm from "./components/Posts/PostOneForm"
import CreatePostOnPost from "./components/Posts/CreatePostOnPost";
import DeletePost from "./components/Posts/DeletePost";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/post/:postId/delete' component={DeletePost} />
          <Route path='/posts' component={GetAllPosts} />
          <Route path='/:postId/new' component={CreatePostOnPost} />
          <Route path='/post' component={PostForm} />
          <Route path='/current' component={ProfilePage} />
        </Switch>
      )}
    </>
  );
}

export default App;
