import * as mr from 'azure-pipelines-task-lib/mock-run';
import * as fs from 'fs';
import * as path from 'path';

const taskPath = path.join(__dirname, "../index.js");
var runner = new mr.TaskMockRunner(taskPath);

function assertDirectory(path: string) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

// ENV
const tempPath = path.join(__dirname, "..", "..", "..", "temp");
const agentPath = path.join(tempPath, "agent");
process.env["BUILD_BUILDNUMBER"] = "1";
assertDirectory(tempPath);
assertDirectory(agentPath);
assertDirectory(process.env["AGENT_HOMEDIRECTORY"] = path.join(agentPath, "home"));
assertDirectory(process.env["AGENT_TOOLSDIRECTORY"] = path.join(agentPath, "tools"));
assertDirectory(process.env["AGENT_TEMPDIRECTORY"] = path.join(agentPath, "temp"));
assertDirectory(process.env["AGENT_BUILDDIRECTORY"] = path.join(agentPath, "build"));

//let tmr = require('vsts-task-lib/mock-toolrunner');
//runner.registerMock('vsts-task-lib/toolrunner', tmr);

runner.setInput("envKvp", "si.data=doc=system, flutterToolPath=cacheFolder/flutter, isProd=true, flavor=prod-internal, arg1=something");

console.log("#DEBUG#: Variable set to");
console.log(process.env["envKvp"]);

runner.run(true);