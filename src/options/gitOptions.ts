import * as vscode from 'vscode';

import simpleGit, { SimpleGitOptions } from "simple-git";

const projectRoot = vscode.workspace.rootPath;

const abortController = new AbortController();

const gitOptions: Partial<SimpleGitOptions> = {
    baseDir: projectRoot,
    binary: 'git',
    maxConcurrentProcesses: 6,
    abort: abortController.signal,
};

const git = simpleGit(gitOptions);

export { gitOptions, git, abortController };