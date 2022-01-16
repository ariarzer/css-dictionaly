import fs from 'fs';
import path from 'path';

import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;

const termsList = {};

fs.readdirSync(path.join(__dirname, '../terms')).forEach((fileName) => {
    const term = JSON.parse(fs.readFileSync(path.join(__dirname, '../terms', fileName)).toString());
    termsList[fileName.slice(0, -5)] = term;
})

fs.writeFileSync(path.join(__dirname, '../dist/terms_list.json'), JSON.stringify(termsList));
