import { ExtensionContext, OutputChannel, commands, window } from "vscode";

import { fillCommits } from "../utils/fillCommits";
import { git } from '../options/gitOptions';
import { showOutput } from "../utils/showOutput";

export function logAll(outputChanel: OutputChannel, context: ExtensionContext) {
    const doLogAll = commands.registerCommand('cpg.logAll', () => {
        git.log({}, function (err, log) {
            if (err) {
                showOutput(err.message, outputChanel);
                return;
            }
            const last100 = log.all.slice(0, 100);
            const logs = fillCommits(last100);

            window.showQuickPick(logs, {
                matchOnDescription: true,
                matchOnDetail: true,
                placeHolder: "Select a commit to see more details"
            }).then(function (commit) {
                if (!commit) {
                    return;
                }
                git.show([commit.description], function (err, result) {
                    if (err) {
                        showOutput(err.message, outputChanel);
                        return;
                    }
                    showOutput(result, outputChanel);
                });
            });
        });
    });

    context.subscriptions.push(doLogAll);
}










