import { window, workspace } from "vscode";

import { writeFile } from "fs/promises";

export function showSidebarDiff(text: string) {
    writeFile('/tmp/cpg.diff', text).then(() => {
        workspace.openTextDocument('/tmp/cpg.diff').then(doc => {
            window.showTextDocument(doc);
        });
    }).catch(err => {
        throw err;
    });
}