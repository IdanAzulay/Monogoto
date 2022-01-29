import  {useState}  from 'react';
import './App.css';
import Login from './pages/Login'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import DataTable from './components/DataTable';
import ProtectedRoute from './components/ProtectedRoute';





function App() {

  const [isAuth , setIsAuth] = useState(true);


  return (
    <div className="App">
      <Router>
<Switch>
<Route path="/" exact component={Login}/>
<ProtectedRoute  path="/symbols" component={DataTable} isAuth={isAuth} />
   {/* <ProtectedRoute pat /> */}

    </Switch>

    </Router> 
    </div>

  );
}

export default App;
 