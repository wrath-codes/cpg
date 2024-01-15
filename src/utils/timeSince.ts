import * as dayjs from 'dayjs';
export function timeSince(date: string) {
    const now = dayjs();
    const then = dayjs(date);
    const seconds = now.diff(then, 'second');
    const minutes = now.diff(then, 'minute');
    const hours = now.diff(then, 'hour');
    const days = now.diff(then, 'day');
    const weeks = now.diff(then, 'week');
    const months = now.diff(then, 'month');
    const years = now.diff(then, 'year');

    if (seconds < 60) {
        return `${seconds} seconds ago`;
    }
    if (minutes < 60) {
        return `${minutes} minutes ago`;
    }
    if (hours < 24) {
        return `${hours} hours ago`;
    }
    if (days < 7) {
        return `${days} days ago`;
    }
    if (weeks < 4) {
        return `${weeks} weeks ago`;
    }
    if (months < 12) {
        return `${months} months ago`;
    }
    return `${years} years ago`;
}

