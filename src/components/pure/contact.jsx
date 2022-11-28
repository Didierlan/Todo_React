import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/contact.scss'
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact, remove }) => {

    function contactConect() {
        if (contact.connected) {
            return (<h6 className='mb-0'>
                <span className='badge text-bg-success'>online</span>
            </h6>)
        } else {
           return( <h6 className='mb-0'>
                <span className='badge text-bg-danger'>not online</span>
            </h6>)
        }
    }



    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.lastname}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.email}</span>
            </td>
            <td className='align-middle'>
                {contactConect()}

                <i onClick={() => {remove(contact)}} className='bi-trash task-action' style={{ color: 'gray' }}></i>
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    remove: PropTypes.func.isRequired,

};


export default ContactComponent;
