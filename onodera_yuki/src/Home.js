import React from 'react';
import posed from 'react-native-pose';

const props = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}
const Box = posed.div(props)

class Home extends React.Component {
    state = { isVisible: false };

    componentDidMount() {
        return(
            <div>
                <div>
                    <Box pose={this.state.isVisible ? 'visible' : 'hidden'}>ONODERA YUKI</Box>
                </div>
            </div>
        )
    }
}

export default Home;