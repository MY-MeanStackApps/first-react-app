import React from "react";
import Navbar from "./components/shared/Navbar/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import UsersComponent from "./components/Users/users"
import FormComponent from "./components/Form/form"
import SingleUserComponent from "./components/Users/SingleUser/single-user"

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <UsersComponent />
        </Route>

        <Route path="/create-record">
          <FormComponent />
        </Route>

        <Route path="/user/:id" component={SingleUserComponent} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;

