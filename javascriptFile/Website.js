const SITE_NAME = 'Information Technology';
const BASE_URL = 'http://it.tni.ac.th'
const COLOR_THEME = 'Blue';
const ALLOW_SIGNUP = true;

console.log('Welcome to ' + SITE_NAME);
let language = ['JavaScript', 'Python', 'Ruby', 'Java', 'PHP'];
for(let i in language){
    console.log(parseInt(i)+1);
    let url = BASE_URL + "lang/" + language[i].toLowerCase();
    console.log(`- ${language[i]} programming(${url})`);
}

console.log('Footer');

let footer = ['About', 'Privacy'];
for (let i in footer) {
    let url = BASE_URL + ' ' + footer[i].toLowerCase();
    console.log(`- ${footer[i]} (${url})`);
}

if (ALLOW_SIGNUP) {
    console.log('[Sign up for new settle');
}

console.log(`© ${new Date().getFullYear()} ${SITE_NAME}`);
console.log('test');