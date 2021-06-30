import React from 'react';
import {Router,Route,Switch,Redirect} from 'react-router-dom';
import { createHashHistory } from "history";
import Home from '../pages/Home'
import Detail from '../pages/Detail'
const history = createHashHistory();

class RouterConfig extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path='/' exact render={()=>(
                        <Redirect to='/Home'/>
                    )}/>
                    <Route path='/Home' component={Home}/>
                    <Route path='/Detail' component={Detail}/>
                </Switch>
            </Router>
        )
    }
}
export default RouterConfig;