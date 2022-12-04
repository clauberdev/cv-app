

import React from "react";

const Overview = (props) => {
    const { contacts } = props;

    return (
        <ul>
            {contacts.map((contact) => {
                return <li>{contact.name} {contact.email} {contact.phone}</li>;
            })}
        </ul>
    );
};

export default Overview;