const main = require('./main');
const { logInfo } = require('./helpers');

logInfo('Starting CLI to manage minikube resources.');

let selectedServices = 'all';

const params = process.argv.splice(2);
if (params) {
    const paramServices = params.filter(p => p.startsWith('--services'));
    if (paramServices.length > 0) {
        const [, value] = paramServices[0].split('=');
        selectedServices = value.split(',').map(s => s.trim());
    }
}

main(selectedServices);