import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import Signinform from './signinForm';

class Signin extends Component {

    onSubmit = (fields) => {
        this.props.signIn(fields, () => {
            this.props.history.push('./dashboard');
        })
    }



    render() {
        return (
            <div className='sign-in'>
                <Signinform onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default connect(null, actions)(Signin);