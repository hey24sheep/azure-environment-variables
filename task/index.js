"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const task = require("azure-pipelines-task-lib/task");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const inputString = task.getInput('envKvp', true);
            const delimitedString = inputString === null || inputString === void 0 ? void 0 : inputString.split(',');
            if (delimitedString && delimitedString.length > 0) {
                delimitedString.forEach((str) => {
                    var kvp = str.split('=');
                    var key = kvp[0].trim();
                    var val = kvp[1].trim();
                    console.log(`Set $(${key}) with '${val}'`);
                    task.setVariable(key, val);
                });
                task.setResult(task.TaskResult.Succeeded, 'Environment Variables are set');
                return;
            }
            else {
                task.setResult(task.TaskResult.Failed, 'Invalid input string!!');
            }
        }
        catch (err) {
            task.setResult(task.TaskResult.Failed, err.message);
        }
    });
}
run();
