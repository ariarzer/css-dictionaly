import React, {useState, useEffect} from "react";

import Term from './Term';

import {PrefixTree} from "../libs/prefix_tree/index.js";


export function SearchList(props) {
    let prefixTree;
    const termsNamesList = Object.keys(props.termsList).reduce((acc, termKey) => {
        const curTerm = props.termsList[termKey];
        acc[termKey] = [curTerm["name"], curTerm["name_eng"]];
        return acc;
    }, {});
    prefixTree = new PrefixTree(termsNamesList)

    const [searhPrace, setSearhPrace] = useState(props.searhPrace || '');

    const handleChange = (event) => {
        setSearhPrace(event.target.value);
    };

    const searchedTermsIdsList = prefixTree.find(searhPrace);
    const searchedTermsList = searchedTermsIdsList.map((termId) => {
        const term = props.termsList[termId];
        return <Term key={termId} term={term}/>;
    })

    return <main>
        <input onChange={handleChange}/>
        <dl>
            {searchedTermsList}
        </dl>
    </main>;
}
