import React, {lazy, Suspense} from 'react';
import './App.css'; 
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import * as ROUTES from "./constants/routes"
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';


const Dashboard = lazy(() => import ("./pages/dashboard"));
const Login = lazy(()=> import ("./pages/login"));
const SignUp=lazy(()=> import ("./pages/signup"));
const Profile = lazy(() => import ("./pages/profile"));
const NotFound = lazy(() => import ("./pages/not-found"));


 function App() {
  const {user} = useAuthListener()
  return (
   <UserContext.Provider value= {user}  >
    <Router>
      <Suspense fallback={<h1>loading</h1>}>
        <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.PROFILE} component={Profile} />         
            <Route path={ROUTES.DASHBOARD} component={Dashboard}exact/>
            <Route component={NotFound} />
        </Switch>
      </Suspense>
      </Router>
    </UserContext.Provider>
  )
}

export default App;
