import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

import { Commit } from "../interfaces/Commit";
import { Log } from "../interfaces/Log";

dayjs.extend(relativeTime); // Extend dayjs with the relativeTime plugin

export const fillCommits = (listOfCommits: Commit[]) => {
    let logs: Log[] = [];
    listOfCommits.forEach(function (element) {
        if (!element.hasOwnProperty("hash")) {
            return;
        }
        logs.push({
            'label': element.message,
            'detail': dayjs(new Date(element.date)).fromNow() + " by "
                + (element.author_name || element.author_email) + " | " + element.date,
            'description': element.hash.substring(0, 10)
        });
    }, this);
    return logs;

};