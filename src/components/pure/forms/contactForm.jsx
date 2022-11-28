import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const ContactForm = ({ add }) => {

    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');
    //const conectRef = useRef(false);

    function addConatc(e) {
        e.preventDefault()

        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        )

        add(newContact)
    }


    return (

        <form onSubmit={addConatc} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill mt-1'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-md' required autoFocus placeholder='Nombre' />
                <input ref={lastNameRef} id='inputDescription' type='text' className='form-control form-control-md' required placeholder='Apellido' />
                <input ref={emailRef} id='inputDescription' type='email' className='form-control form-control-md' required placeholder='example@gmail.com' />

            </div>
            <button type='submit' className='btn btn-primary btn-lg ms-2'>Add</button>

        </form>

    );
};


ContactForm.propTypes = {

};


export default ContactForm;
