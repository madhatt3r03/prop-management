import React, { Component } from 'react';

import Signinform from '../auth/signinForm';

class NewNewsletter extends Component {

    onSubmit = (fields) => {
        console.log('trying to handle submit')
    }


    render () {
        return (
            <div className='new-newsletter'>
                <Signinform onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default NewNewsletter;