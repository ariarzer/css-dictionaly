import ReactDOM from 'react-dom';
import React from 'react';

import SearchList from './SearchList';

import list from './dist/terms_list.json';
import listBySection from './dist/terms_list_by_section.json';

console.log(list);

/* eslint-disable no-undef */
const elem = document.getElementById('root');

let renderList = list;

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('section')) {
    renderList = listBySection[urlParams.get('section')];
}

ReactDOM.render(<SearchList termsList={renderList} />, elem);
