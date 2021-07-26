import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import { DishCardList } from "./components/dishcardlist";
import { Dish } from "./components/dish";

const routes = [
   {
      path: "/",
      component: DishCardList,
   },
   {
      path: "/dish",
      component: Dish,

   }
];

export const Routes = () => {
   return (
      <Router>
         <div>
            <Header />
            <Switch>
               { routes.map((route) => (
                  <Route key={ route.path } path={ route.path } component={ route.component } exact />
               )) }
            </Switch>
         </div>
      </Router>
   )
}