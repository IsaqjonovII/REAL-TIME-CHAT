import './App.css';
import { useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Chat from "./router/chat/Chat.jsx"
import Login from './router/login/Login';

function App() {
  const auth = useSelector(s => s.auth)
  return (
    <div className="App">
      <Router>
        <Switch>
          {
            auth ? 
            <>
              <Route  path="/chat" component={Chat} />
              <Redirect to="/chat"/>
            </>
            :
            <>
              <Route path="/login" component={Login}/>
              <Redirect to="/login"/>
            </>
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
