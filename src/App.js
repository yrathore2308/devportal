import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import Home from './components/features/Home';
import Footer from './components/footer/Footer';
import ForgotPassword from './components/Authentication/ForgotPassword';
import ApiManagement from './components/features/ApiManagement';
import { useState } from 'react';
import Alert from './components/Alert/Alert';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
    <Router>
    <Navbar />
    <Alert alert={alert}/>
    <div>
      <Switch>
        <Route exact path="/">
          <Home/>
         </Route>
        
        <Route exact path="/login">
          <Login showAlert={showAlert}  />
        </Route>
        <Route exact path="/login/reset">
          <ForgotPassword  />
        </Route>
        <Route exact path="/signup">
          <SignUp showAlert={showAlert}  />
        </Route>
        <Route exact path="/home/apiManagement">
          <ApiManagement  />
        </Route>
      </Switch>
    </div>
    <Footer/>
  </Router>
  );
}

export default App;
