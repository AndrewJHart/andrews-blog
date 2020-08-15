import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

/**
 * Insert routes and map them to components using Route directive
 *
 * These routes are injected into the app container component
 */
export const routes = (
    <Switch>
        {/* open routes to the public */}
        <Route path='/' exact={true} component={} />

        {/* catch all that re-routes back to home if any other unknown routes entered */}
        <Redirect from='**' to='/not-found' />
    </Switch>
)
