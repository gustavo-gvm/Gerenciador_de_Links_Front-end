import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './screens/Home';
import SignIn from './screens/Signin';
import SignUp from './screens/Signup';
import ManageLinks from './screens/Manage/Links';
import ManageLinksCreate from './screens/Manage/Links/Create';
import ManageLinksCreateEdit from './screens/Manage/Links/Edit';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item">
              <Link to="/sign-in">
                Sign In
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/sign-up">
                Sign Up
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/manage/links/create">
                Criar Link
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/manage/links/edit">
                Editar Link
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/manage/links/links">
                Links
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/sign-in">
            <SignIn/>
          </Route>
          <Route path="/sign-up">
            <SignUp/>
          </Route>
          <Route path="/manage/links/create">
            <ManageLinksCreate/>
          </Route>
          <Route path="/manage/links/edit">
            <ManageLinksCreateEdit />
          </Route>
          <Route path="/manage/links">
            <ManageLinks/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;