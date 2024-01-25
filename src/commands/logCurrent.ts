import { ExtensionContext, OutputChannel, commands, window } from "vscode";

import { fillCommits } from "../utils/fillCommits";
import { git } from "../options/gitOptions";
import { showOutput } from "../utils/showOutput";
import { showSidebarDiff } from "../utils/showSideBarDiff";

export function logCurrent(outputChanel: OutputChannel, context: ExtensionContext) {
    const doLogCurrent = commands.registerCommand('cpg.logCurrent', () => {

        git.log({ 'file': window.activeTextEditor!.document.fileName }, function (err, log) {
            if (err) {
                showOutput(err.message, outputChanel);
                return;
            }
            const logs = fillCommits(log.all);
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
                    showSidebarDiff(result);
                });
            });
        });
    });

    context.subscriptions.push(doLogCurrent);
}   
