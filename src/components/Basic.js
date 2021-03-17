import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import FlipPage from './basic/FlipPage';
import SimpleSpring from './basic/SimpleSpring';


function Basic() {
    let { path } = useRouteMatch();
    console.log(path);
    return (
        <>
        <h1>Basic</h1>
        <Switch>
            <Route path={`${path}/simplespring`}>
                <SimpleSpring />
            </Route>
            <Route path={`${path}/flip-page`}>
                <FlipPage />
            </Route>
            <Route exact path={path} />
        </Switch>
        <div>
        </div>
        </>
    )
}

export default Basic
