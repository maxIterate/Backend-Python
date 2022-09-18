import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactState = () => {

    const user1 = new Contact('Maxi', 'Palavecino', 'maxipp042@gmail.com', true)
    console.log(user1)
    return (
        <div>
            <ContactComponent contact={user1}></ContactComponent>
        </div>
    );
};


export default ContactState;
