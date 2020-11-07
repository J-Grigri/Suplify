import React from 'react'
import { Switch, Route } from "react-router-dom"
import Login from "./Login"
import Homepage from "./Homepage"
import Register from "./Register"
import LabelGenerator from "./LabelGenerator"

export default function routes() {
    return (
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/" exact component={Homepage} />
            <Route path="/label-generator" exact component={LabelGenerator} />
        </Switch>
    )
}
