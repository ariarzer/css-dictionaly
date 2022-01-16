import ReactDOM from 'react-dom';
import React from "react";

import SearchList from './SearchList';

import list from "./dist/terms_list.json";

const elem = document.getElementById('root');

ReactDOM.render( <SearchList termsList={list}/>, elem);
