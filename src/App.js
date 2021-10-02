import './App.css';
import Home from './Componenets/Home';
import Friends from './Componenets/Friends/Friends';
import About from './Componenets/About/About';
import NotFound from './Componenets/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Componenets/Header/Header';
import FriendDetail from './Componenets/FriendDetail.js/FriendDetail';
import Culture from './Componenets/Culture/Culture';


function App() {
  return (
    <div className="App">
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home>
          </Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/friends">
           <Friends></Friends>
        </Route>
       <Route path="/friend/:friendId">  {/* // eta holo router parameter */}
          <FriendDetail></FriendDetail>
        </Route>
        <Route exact path="/about">
         <About></About>
        </Route>
        <Route exact path="/about/culture">
          <Culture></Culture>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
