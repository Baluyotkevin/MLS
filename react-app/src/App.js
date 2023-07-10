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
import GetAllCurrComments from "./components/Comments/AllCurrComments";
import PostPage from "./components/PostPage/PostPage";
import PostsCommentsPage from "./components/PostPage/PostsCommentsPage";
import Footer from "./components/Footer";
import Forbidden from "./components/Forbidden/Forbidden";
import FavoritesPage from "./components/ProfilePage/FavoritesPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <div className='bodyCont'>
      {isLoaded && (
        <Switch>
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/profilePage' component= {ProfilePage} />
          <Route exact path='/favorites' component={FavoritesPage} />
          <Route exact path='/postPage/:postId' component={PostPage} />
          <Route exact path='/comments/current' component={GetAllCurrComments} />
          <Route exact path='/:postId/new' component={CreatePostOnPost} />
          <Route exact path='/' component={GetAllPosts} />
          <Route path='*' component={Forbidden} />
        </Switch>
      )}
      </div>
      <Footer isLoaded={isLoaded} />
    </>
  );
}

export default App;
