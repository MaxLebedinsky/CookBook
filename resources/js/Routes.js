import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AddDishForm} from "./components/adddishform";
import {DishCardList} from "./components/dishcardlist";
import {Dish} from "./components/dish";

const routes = [
    {
        path: "/",
        component: DishCardList,
    },
    {
        path: "/dish/:dishId",
        component: Dish,
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
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} component={route.component} exact/>
                    ))}
                </Switch>
            </div>
        </Router>
    )
}