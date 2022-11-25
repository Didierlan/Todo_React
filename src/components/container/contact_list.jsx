import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactList = () => {

    const defaultContact = new Contact('Karol','Niño','karo@gmail.com',false);
    return (
        <div>
            <h1>Tus Contactos</h1>
            <ContactComponent contact={ defaultContact }></ContactComponent>

        </div>
    );
};




export default ContactList;
