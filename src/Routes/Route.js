import React from 'react'
import { Switch, Route } from "react-router-dom"
import Login from "../Pages/Login"
import Homepage from "../Pages/Homepage"
import Register from "../Pages/Register"

export default function routes() {
    return (
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/" exact component={Homepage} />
        </Switch>
    )
}



