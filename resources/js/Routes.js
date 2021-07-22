import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/layout";
import Header from "./components/header";
import { DishCardList } from "./components/dishcardlist";
import { Dish } from "./components/dish";

export const Routes = () => {
   return (
      <Router>
         <Layout>
            <Header />
            <Switch>
               <Route path="/" exact>
                  <DishCardList />
               </Route>
               <Route path="/dish">
                  <Dish />
               </Route>
            </Switch>
         </Layout>
      </Router>
   )
}