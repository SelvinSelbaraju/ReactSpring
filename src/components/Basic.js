import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import SimpleSpring from './basic/SimpleSpring';


function Basic() {
    let { path } = useRouteMatch();
    console.log(path);
    return (
        <>
        <h1>Basic</h1>
        <Switch>
            <Route path={`${path}/:simplespring`}>
                <SimpleSpring />
            </Route>
            <Route exact path={path} />
        </Switch>
        <div>
        </div>
        </>
    )
}

export default Basic
