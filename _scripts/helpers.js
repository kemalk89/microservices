const { exec } = require("child_process");

function execCmd(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                logError(err.message);
                reject(err.message);
            }
            if (stderr) {
                logError(stderr);
                reject(stderr);
            }

            resolve(stdout);
        });
    });
}

function logError(msg) {
    console.log("\033[0;31m" + "[ERROR] " + msg + "\033[0m");
}

function logInfo(msg) {
    console.log("\033[0;36m" + "[INFO] " + msg + "\033[0m");
}

async function isProgramInstalled(programName) {
    const isWindows = process.platform === 'win32';
    const isMac = process.platform === 'darwin';

    if (isMac) {
        try {
            await execCmd(`command -v ${programName}`);
            return true;
        } catch (e) {
            return false;
        }
    }
}

async function isProgramRunning(programName) {
    
}

module.exports = {
    execCmd,
    logInfo,
    logError,
    isProgramInstalled
};