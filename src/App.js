import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import Igs from './pages/igs'
import Pc from './pages/pc'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/igs' component={Igs} exact />
        <Route path='/pc' component={Pc} exact />
      </Switch>
    </Router>
  );
}

export default App;
