import React from 'react';

import MarkdownIt from 'markdown-it';

import './Term.css';

const md = new MarkdownIt();

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
        <dd className="Term__define" dangerouslySetInnerHTML={{ __html: md.render(term.define_ru) }} />
    </>;
}
