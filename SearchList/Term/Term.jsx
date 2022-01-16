import React from "react";

export function Term(props) {
    return <>
        <dt>{props.term['name']}</dt>
        <dd>{props.term['define']}</dd>
    </>;
}