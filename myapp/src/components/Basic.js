import React from 'react';
import { connect } from 'react-redux';

import { fetchStatus } from '../store/actions';


class Basic extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    getStatus = () => {
        this.props.fetchStatus();
    }

    componentDidMount() {
        this.getStatus();
    }

    render(){
        return (
            <div>
                <h1>Hello</h1>
                <h1>{this.props.user.status != null ? this.props.user.status.status : 'Loading' }</h1>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
      user: user,
    }
}

export default connect(mapStateToProps, { fetchStatus })(Basic);