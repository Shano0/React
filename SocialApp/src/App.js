import './App.css';
import './Reset.css';
import Header from './Components/Header';
import Addpost from './Components/Addpost';
import Posts from './Components/Posts';
import Profile from './Components/Profile'
import People from './Components/People'
import Searchresults from './Components/Searchresults'
import {addPost} from './Actions/PostActions';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App({posts, user, allusers}) {
  return (
    <Router>
      <div className="App">
        <Header user={user}/>
        <Switch>
          <Route path='/Profile/:id' render={(props)=><Profile {...props} posts={posts} allusers={allusers} user={user}/>}/>
          <Route exact path='/' render={(props)=><div><Addpost {...props} user={user} addPost={addPost}/>, 
            <Posts {...props} posts={posts} user={user} profileuserid={null}/></div>}/>
          <Route path='/People' render={(props)=><People {...props} allusers={allusers}/>}/>
          <Route path='/Search/:searchText' render={(props)=><Searchresults {...props} allusers={allusers}/>}/>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps=(state)=>(
  // console.log(state.allusers, 'app'),
  {
  posts: state.posts,
  user: state.loggeduser,
  allusers: state.allusers,
})



export default connect(mapStateToProps)(App);
