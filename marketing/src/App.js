
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles"

import React from "react";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export const App = () => {
    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Landing} />
                        <Route path="/pricing" exact component={Pricing} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>


        </div>
    )
}
