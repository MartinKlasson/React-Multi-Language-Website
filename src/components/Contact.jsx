import React, { Fragment } from "react";

function Contact(props) {
    let content = {
        English: {
            title: "Contact Us",
            address: "Bremergatan 11, 392 33 Kalmar, Sweden",
            phone: {
                label: "Phone",
                value: "0730961275"
            },
            email: {
                label: "Email",
                value: "tillmartin2000@yahoo.se"
            }
        },
        Swedish: {
            title: "Kontakt",
            address: "Bremergatan 11, 392 33 Kalmar, Sverige",
            phone: {
                label: "Telefon",
                value: "0730961275"
            },
            email: {
                label: "Epost",
                value: "tillmartin2000@yahoo.se"
            }
        }
    };

    props.language === "Swedish" ? (content = content.Swedish) : (content = content.English);
    
    return (
        <Fragment>
            <h2>{content.title}</h2>
            <hr />
            <address>{content.address}</address>
            <address>
                <abbr title="Phone">{content.phone.label}: </abbr>
                {content.phone.value}
                <br />
                <abbr title="Email">{content.email.label}: </abbr>
                <a href={`mailto:${content.email.value}`}>{content.email.value}</a>
            </address>
        </Fragment>
    );
}

export default Contact;