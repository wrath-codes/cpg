import { OutputChannel, window } from "vscode";
export function showOutput(message: string, outputChanel?: OutputChannel,) {
    if (!outputChanel) {
        outputChanel = window.createOutputChannel("Command Palette Git");
    }
    outputChanel.appendLine(message);
    outputChanel.show();
}
