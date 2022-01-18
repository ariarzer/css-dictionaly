import React from 'react';

export function Term(props) {
    const { term } = props;
    return <>
        <dt>{term.name}</dt>
        <dd>{term.define}</dd>
    </>;
}
