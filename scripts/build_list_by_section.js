import fs from 'fs';
import path from 'path';

import { URL } from 'url';

/* eslint-disable no-underscore-dangle */
const __dirname = new URL('.', import.meta.url).pathname;

const termsList = {};

fs.readdirSync(path.join(__dirname, '../terms')).forEach((dirName) => {
    if (!path.extname(dirName)) {
        fs.readdirSync(path.join(__dirname, '../terms', dirName)).forEach((fileName) => {
            const term = JSON.parse(fs.readFileSync(path.join(__dirname, '../terms', dirName, fileName)).toString());
            if (termsList[dirName]) {
                termsList[dirName].push(term);
            } else {
                termsList[dirName] = [term];
            }
        });
    }
});

fs.writeFileSync(path.join(__dirname, '../dist/terms_list_by_section.json'), JSON.stringify(termsList));
