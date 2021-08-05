import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddDishForm } from "./components/adddishform";
import Layout from "./components/layout";

const routes = [
   {
      path: "/",
      component: Layout,
   },
   {
      path: "/dish/:dishId",
      component: Layout,
   },
   {
      path: "/add-dish",
      component: AddDishForm
   },
];

export const Routes = () => {
   return (
      <Router>
         <div>
            <Switch>
               { routes.map((route) => (
                  <Route key={ route.path } path={ route.path } component={ route.component } exact />
               )) }
            </Switch>
         </div>
      </Router>
   )
}