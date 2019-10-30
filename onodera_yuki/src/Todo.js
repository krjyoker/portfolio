import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import posed from 'react-native-pose';
import About from './component/About';
import Work from './component/Work';
import Contact from './component/Contact';

const props = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}
const Nav = posed.div(props)

class ToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[],
            nextId: 0
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isVisible: !this.state.isVisible });
        }, 1500);
    }

    render() {
        return (
            <div>
                <Nav pose={this.state.isVisible ? 'visible' : 'hidden'} >
                    <ul>
                        <li><link to="/">home</link></li>
                        <li><link to="/about">about</link></li>
                        <li><link to="/work">work</link></li>
                        <li><link to="/contact">contact</link></li>
                    </ul>
                </Nav>
            </div>
        );
    }
}

export default ToDo;