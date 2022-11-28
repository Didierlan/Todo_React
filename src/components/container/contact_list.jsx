import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';


const ContactList = () => {

    const contact1 = new Contact('Karol', 'Niño', 'karo@gmail.com', false);
    const contact2 = new Contact('Misael', 'Otalora', 'misa@gmail.com', true);

    const [contacts, setContacts] = useState([contact1, contact2]);

    function addContact(contact){
        console.log(`Add this contact ${contact.name}`);
        const temporalContacts = [...contacts];
        temporalContacts.push(contact);
        setContacts(temporalContacts);

    }


    function deleteContact(contact){
        console.log(`Delete this contact ${contact.name}`);
        const index = contacts.indexOf(contact);
        const temporalContacts = [...contacts]; 
        temporalContacts.splice(index,1); 
        setContacts(temporalContacts)
    }

    return (
        <div className='col-12'>
        
            <div className='card'>
                <div className='card-header p-3'>
                    <h5>Your Contacts:</h5>
                </div>

                <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }} >

                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Nombre</th>
                                <th scope='col'>Apellido</th>
                                <th scope='col'>email</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {contacts.map((contact, index) => {
                                return <ContactComponent key={index} contact={contact} remove={deleteContact}></ContactComponent>
                            })}
                            
                        </tbody>
                    </table>
                </div>

            </div>
            <ContactForm add={addContact}></ContactForm>

        </div>
    );
};




export default ContactList;
