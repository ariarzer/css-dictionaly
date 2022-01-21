import React from 'react';

import './Term.css';

export function Term(props) {
    const { term } = props;
    return <>
        <dt>
            <span className="Term__mainName">{term.name_ru}</span>
            {' '}
            <span className="Term__sideName">
                {'(англ. '}
                <a href={term.link} target="_blank" rel="noreferrer">
                    {term.name_eng}
                </a>
                )
            </span>
        </dt>
        <dd className="Term__define">{term.define_ru}</dd>
    </>;
}
