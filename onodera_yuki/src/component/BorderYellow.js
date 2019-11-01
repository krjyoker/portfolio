import React, { Component } from 'react';
import posed from 'react-dom';
import './BorderYellow.css';

const props = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const Border = posed.div(props)

class BorderYellow extends Component {
    constructor(props) {
        super(props);
    }

    state = { isUnVIsible: false };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isUnVIsible: !this.state.isUnVIsible });
        }, 1000);
    }

    render() {
        return (
            <Border className={this.props.display ? "border border-visible" : "border"} pose={this.state.isUnVIsible ? 'hidden' : 'visible'} />
        );
    }
}

export default BorderYellow;