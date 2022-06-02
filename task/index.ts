import task = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        const inputString = task.getInput('envKvp', true);
        const delimitedString = inputString?.split(',');
        if (delimitedString && delimitedString.length > 0) {
            delimitedString.forEach((str) => {
                var kvp = str.split('=');
                var key = kvp[0].trim();
                var val = str.substring(str.indexOf('=')+1)
                console.log(`Set key: $(${key}) with value : '${val}'`);
                task.setVariable(key, val);
            });
            task.setResult(task.TaskResult.Succeeded, 'Environment Variables are set');
            return;
        } else {
            task.setResult(task.TaskResult.Failed, 'Invalid input string!!');
        }
    }
    catch (err) {
        task.setResult(task.TaskResult.Failed, err.message);
    }
}

run();