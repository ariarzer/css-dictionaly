import React from 'react';

import './Term.css';

export function Term(props) {
    const { term } = props;
    const engTerm = `(анг. ${term.name_eng} )`;
    return <>
        <dt>
            <span className="Term__mainName">{term.name}</span>
            {' '}
            <span className="Term__sideName">{engTerm}</span>

        </dt>
        <dd className="Term__define">{term.define}</dd>
    </>;
}
