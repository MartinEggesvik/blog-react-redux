import React from 'react';
// import {Router, Route, browserHistory, IndexRoute, IndexRedirect} from 'react-router';
import {BrowserRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {axios} from 'axios';
import store from './store';

// import containers
// import AppContainer from './containers/AppContainer';
// import IntroPostContainer from './containers/IntroPostContainer';
// import PostContainer from './containers/PostContainer';
import AdminContainer from './containers/AdminContainer';
import PostsContainer from './containers/PostsContainer';

// import components
// import CreatePost from './components/CreatePost';

// import action creators for onEnter(s)
import {retrievePosts, retrievePost} from './reducers/post';
import {retrieveComments} from './reducers/comment';
import {whoAmI} from './reducers/user';

// on enters
// const onAppEnter = () => {
//   store.dispatch(whoAmI());
//   store.dispatch(retrievePosts())
// }

// const onPostEnter = (nextState) => {
//   store.dispatch(retrievePost(nextState.params.postId));
//   store.dispatch(retrieveComments(nextState.params.postId));
// }

const onAdminPostsEnter = () => {
  store.dispatch(retrievePosts());
};

export default () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/admin' component={AdminContainer} />
        <Route exact path='/admin/posts' component={PostsContainer} onEnter={onAdminPostsEnter} />
        <Route path='/admin/posts/:title' />
      </BrowserRouter>
    </Provider>
  )
}
