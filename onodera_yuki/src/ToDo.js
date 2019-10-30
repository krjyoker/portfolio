import React, { Component } from 'react';
import './ToDo.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import posed from 'react-pose';
import About from './Component/About';
import Work from './Component/Work';
import Contact from './Component/Contact';
import './ToDo.css';

const props = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}
const Nav = posed.div(props)

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
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
                <Nav className="nav" pose={this.state.isVisible ? 'visible' : 'hidden'}>
                    <ul className="navbar">
                        <li className="navbar__item"><Link className="navbar__link" to="/">Home</Link></li>
                        <li className="navbar__item"><Link className="navbar__link" to="/about">About</Link></li>
                        <li className="navbar__item"><Link className="navbar__link" to="/work">Work</Link></li>
                        <li className="navbar__item"><Link className="navbar__link" to="/contact">Contact</Link></li>
                    </ul>
                </Nav>
            </div>
        );
    }
}

export default ToDo;