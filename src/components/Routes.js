import React from 'react';
import { BrowserRouter as Routess, Route, Switch } from 'react-router-dom';
import Disc from './body/Disc/Disc';
import NotFound from './NotFound/NotFound';
import Parent from './Parent/Parent';

const Routes = () => {
    return (
        <div>
            <Routess>
                <Switch>
                    <Route exact path="/">
                        <Parent></Parent>
                    </Route>
                    <Route exact path="/discription/:id">
                        <Disc></Disc>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Routess>
        </div>
    );
};

export default Routes;