import { OutputChannel, window, commands } from "vscode";

import { git, abortController } from '../options/gitOptions';
import { simpleGit } from 'simple-git';
import { showOutput } from "../utils/showOutput";

export function logAll(outputChanel: OutputChannel) {
    commands.registerCommand('cpg.logAll', () => {
        git.log({}, function (err) 
            }











