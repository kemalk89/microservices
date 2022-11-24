const { logInfo, execCmd, isProgramInstalled, logError } = require("./helpers");

const KNOWN_SERVICES = [
    'product-service',
    'product-service-mongodb',
    'web-ui'
];

function startService(service) {
    logInfo(`Handling service "${service}"`);

    execCmd();
}

function startAllServices() {
    KNOWN_SERVICES.forEach(s => startService(s));
}

async function main(selectedServices) {
    const isInstalled = await isProgramInstalled('minikube');
    if (!isInstalled) {
        logError('The command "minikube" is not installed on your system. Please install first.');
        process.exit(-1);
    }

    

    if (selectedServices === 'all') {
        startAllServices();
    } else {

    }

}

module.exports = main;