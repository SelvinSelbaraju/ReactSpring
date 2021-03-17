import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { navbarItems } from './NavbarItems';


function Basic() {
    let { path } = useRouteMatch();
    return (
        <>
        <h1>Basic</h1>
        <Switch>
            {
                navbarItems[0].branch.map(item => {
                    const { path, component } = item;
                    return (
                        <Route path={path} component={component} />
                    )
                })
            }
            <Route exact path={path} />
        </Switch>
        <div>
        </div>
        </>
    )
}

export default Basic
