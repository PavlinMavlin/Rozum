import React from "react";
import {Employees} from "../Employees/Employees";
import {Worklog} from "../Worklog/Worklog";
import {Route, Switch, Redirect} from 'react-router-dom'
import NotFound from "../NotFound/NotFound";


export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={()=><Redirect to={'/employees'}/>}/>
                <Route path={'/employees'} render={()=><Employees/>}/>
                <Route path={'/worklog/:id'} render={()=><Worklog/>}/>
                <Route render={() => <NotFound/>}/>
            </Switch>
        </div>
    )

}