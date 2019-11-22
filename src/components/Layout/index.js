import React from 'react';
import Header from '../Header';
import { Route, Switch} from 'react-router-dom';
import Login from '../../Login'

class Layout extends React.Component {
    render (){
        return (
            <>
                <Header />
                <Switch>
                    <Route path="/home" component={Login}/>
                    <Route path="/about" component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Login}/>
                </Switch>
            </>
        )
    }
}

export default Layout;