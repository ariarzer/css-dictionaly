import React, { useState } from 'react';

import Term from './Term';

import { PrefixTree } from '../libs/prefix_tree';

import './SearchList.css';

export function SearchList(props) {
    const { termsList, searhPrace: initialSearhPrace } = props;
    const termsNamesList = Object.keys(termsList).reduce((acc, termKey) => {
        const curTerm = termsList[termKey];
        acc[termKey] = [curTerm.name_ru, curTerm.name_eng];
        return acc;
    }, {});
    const prefixTree = new PrefixTree(termsNamesList);

    const [searhPrace, setSearhPrace] = useState(initialSearhPrace || '');

    const handleChange = (event) => {
        setSearhPrace(event.target.value);
    };

    const searchedTermsIdsList = prefixTree.find(searhPrace);
    const searchedTermsList = searchedTermsIdsList.map((termId) => {
        const term = termsList[termId];
        return <Term key={termId} term={term} />;
    });

    return <main>
        <input onChange={handleChange} className="SearchList__input" placeholder="что ищем?..." />
        <dl>
            {searchedTermsList}
        </dl>
    </main>;
}
