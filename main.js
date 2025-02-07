const dom = require('dom-utils');

const div = dom.createElement('div');
div.textContent = 'Hello from my framework!';
dom.appendChild(div, document.body);