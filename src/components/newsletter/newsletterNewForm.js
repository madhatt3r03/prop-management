import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton, FormTextArea, FormImage} from '../formFields';
import TextLink from '../textLink';

class NewNewsletterForm extends Component {

    render() {

        const { handleSubmit, formTitle, newsletterToEdit } = this.props;

        var title = null;
        var body = null;
        var imageUrl = null;
        if(newsletterToEdit) {
            title = newsletterToEdit.title;
            body = newsletterToEdit.body;
            imageUrl = newsletterToEdit.imageUrl;

        }

        return (
            <form onSubmit={ handleSubmit} className='new-newsletter-form'>
                <FormTitle className='new-newsletter-form__title' text='New Newsletter' text={formTitle}/>
                <Field 
                    className="new-newsletter-form__newsletter-title" 
                    placeholder="Service Request Title Here"  
                    name="title"
                    type="text"
                    title="Newsletter Title"
                    component={FormInput}
                    editValue={title ? title : null}
                />
                <Field 
                    className="new-newsletter-form__body" 
                    placeholder="Service Request Description (Here)"  
                    name="body"
                    type="text"
                    title="Body"
                    component={FormTextArea}
                    editValue={body ? body : null}
                />
                <Field 
                    className="new-newsletter-form__submit"
                    small={true}   
                    danger={true}
                    name="submit"
                    type="submit"
                    title="Submit"
                    component={FormButton}
                />

                <Field 
                    className="new-newsletter-form__cancel"
                    small={true}   
                    name="cancel"
                    type="button"
                    title="Cancel"
                    component={FormButton}
                    onClick={this.props.onCancel}
                />

                <Field 
                    className="new-newsletter-form__image"
                    small={true}   
                    name="image"
                    type="file"
                    title="Image"
                    component={FormImage}
                    imageUrl={imageUrl}
                />


                {/* <div className='sign-in-form__text-links'>
                <TextLink to='/forgot' text='Forgot Password'/>
                <TextLink to='/signup' text='Not a member? Register here'/>
                </div> */}


            </form>
        );
    }
}

NewNewsletterForm = reduxForm({
    form: "newnewsletter"
})(NewNewsletterForm);

export default NewNewsletterForm;