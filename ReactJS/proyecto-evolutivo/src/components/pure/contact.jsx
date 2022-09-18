import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({contact}) => {
    return (
        <div style={{width: "400px", backgroundColor: "#348", borderRadius: "5%", padding: "4px"}}>
            <p>{contact.name}</p>
            <p>{contact.surname}</p>
            <p>{contact.email}</p>
            {contact.isConnected ? <p>Contacto En Línea</p> : <p>Contacto No Disponible</p>}
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
