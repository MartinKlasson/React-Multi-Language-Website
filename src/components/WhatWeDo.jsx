import React, {Fragment} from "react";
import ReactHtmlParser from "react-html-parser";

function WhatWeDo(props) {
    let content = {
        English: {
            title: "What We Do",
            whatWeDo:
            `<p>We work with publishers and Internet based publishing of literature. Both listenable and readable.</p>
            <p>Earselect is the company to listen for.</p>`
        },
        Swedish: {
            title: "Vad vi sysslar med",
            whatWeDo:
            `<p>Vi arbetar med förlag och Internetbaserad publicering av litteratur. Både att lyssna till och läsa.</p>
            <p>Earselect är företaget att lyssna på</p>`
        }

    };

    props.language === "Swedish" ? (content = content.Swedish) : content = (content.English);

    return (
        <Fragment>
            <h2>{content.title}</h2>
            <hr /> {ReactHtmlParser(content.whatWeDo)}
        </Fragment>
    );

}

export default WhatWeDo;