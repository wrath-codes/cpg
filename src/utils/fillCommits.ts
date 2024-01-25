import { Commit } from "../interfaces/Commit";
import { Log } from "../interfaces/Log";
import { timeSince } from "./timeSince";

// TODO: Get correct type for listOfCommits
export const fillCommits = (listOfCommits: Commit[]) => {
    let logs: Log[] = [];
    listOfCommits.forEach(function (element: any) {
        if (!element.hasOwnProperty("hash")) {
            return;
        }
        logs.push({
            'label': element.message,
            'detail': timeSince(element.date) + " by "
                + (element.author_name || element.author_email) + " | " + element.date,
            'description': element.hash.substring(0, 10)
        });
    }, this);
    return logs;

};