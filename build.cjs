// Uses the repository's existing Marked distribution. No npm install is needed.
const fs = require('node:fs');
const path = require('node:path');
const marked = require('./static/js/marked.min.js');

marked.use({ mangle: false, headerIds: false });
const root = __dirname;
let html = fs.readFileSync(path.join(root, 'index.template.html'), 'utf8');
for (const name of ['home', 'publications', 'ongoing', 'awards']) {
  const markdown = fs.readFileSync(path.join(root, 'contents', `${name}.md`), 'utf8');
  html = html.replace(`{{${name}}}`, marked.parse(markdown));
}
if (/\{\{\w+\}\}/.test(html)) throw new Error('Unresolved template placeholder');
html = html.replace(/[\t ]+$/gm, '');
fs.writeFileSync(path.join(root, 'index.html'), html, 'utf8');
console.log('Built index.html: research, ongoing work, and competition honors.');
