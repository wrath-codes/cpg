import { OutputChannel } from "vscode";

export function appendOutput(outputChanel: OutputChannel, text: string) {
    outputChanel.show();
    outputChanel.append(text);
}