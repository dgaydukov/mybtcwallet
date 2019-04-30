'use strict';

/**
 *  WebApp layout component
 */

import * as React from "react";
import {Switch, Route} from 'react-router-dom'
import Header from "@modules/layout/header/header"
import Footer from "@modules/layout/footer/footer"
import Main from "@modules/main/main"
import NotFound from "@modules/404/notfound"

interface IProps {
    user: any;
    getUser: Function;
    getCatalog: Function;
}

const Content = (props: IProps) => {
    return(
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default class Layout extends React.Component<IProps, any>{
    componentDidMount(){
        this.props.getUser()
        this.props.getCatalog()
    }

    render(){
        return(
            <div className="wrapper">
                <Header {...this.props}/>
                <Content {...this.props}/>
                <Footer {...this.props}/>
            </div>
        )
    }
}