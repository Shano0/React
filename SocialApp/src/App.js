import './App.css';
import './Reset.css';
import Header from './Components/Header';
import Login from './Components/Login/Login'
import Register from './Components/Login/Register'
import Addpost from './Components/Addpost';
import Posts from './Components/Posts';
import Profile from './Components/Profile'
import People from './Components/People'
import Searchresults from './Components/Searchresults'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App(props) {
  return ( 
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/Login' render={()=><Login/>}/>
          <Route exact path='/Register' render={()=><Register/>}/>
          <Route path='/Search/:keyword' render={(props)=><Searchresults {...props}/>}/>
          <Route path='/Profile/:id' render={(props)=><Profile {...props}/>}/>
          <Route exact path='/' render={()=><div><Addpost/>, <Posts/></div>}/>
          <Route path='/People' render={()=><People userNameFilter={null} />}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;




