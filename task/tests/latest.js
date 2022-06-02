"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mr = __importStar(require("azure-pipelines-task-lib/mock-run"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const taskPath = path.join(__dirname, "../index.js");
var runner = new mr.TaskMockRunner(taskPath);
function assertDirectory(path) {
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
