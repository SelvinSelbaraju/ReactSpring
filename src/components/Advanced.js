import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { navbarItems } from './NavbarItems';


function Advanced() {
    let { path } = useRouteMatch();
    console.log(path);
    return (
        <>
        <h1>Advanced</h1>
        <Switch>
            {
                navbarItems[1].branch.map(item => {
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

export default Advanced
