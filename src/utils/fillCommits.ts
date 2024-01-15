export interface Commit {
    hash: string;
    date: string;
    message: string;
    authorName: string;
    authorEmail: string;
}

export interface Log {
    label: string;
    detail: string;
    description: string;
}

export const fillCommits = (listOfCommits: Commit[]) => {
    let logs: Log[] = [];
    listOfCommits.forEach(function (element) {
        if (!element.hasOwnProperty("hash")) {
            return;
        }
        logs.push({
            'label': element.message,
            'detail': timeSince(new Date(element.date)) + " by " + (element.authorName || element.authorEmail) + " | " + element.date,
            'description': element.hash.substring(0, 7)
        });
    }, this);
    return logs;

};