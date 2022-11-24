const { exec } = require("child_process");

const absolutePathOfThisScript = process.argv[1];
const params = process.argv.splice(2);
console.log(params);

let selectedServices = 'all';
const hasSelected = params.filter(p => p.startsWith('--services')).length > 0;



function main(selectedServices) {

}

main(selectedServices);

console.log('\033[0;36mHallo\033[0m');
console.log("Was gehts")