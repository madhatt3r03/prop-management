import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {

    onSubmit = (fields) => {
        // console.log(button)
        // if(button == 'submit') {
        //     console.log('trying to submit to backend');
        // }
        // this.props.history.push('/dashboard')
        console.log('trying to submit');
    }
    
    onCancel = () => {
        console.log('trying to cancel');
    }


    render () {
        return (
            <div className='new-newsletter'>
                <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default NewNewsletter;