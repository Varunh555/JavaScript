function formatDate() {
    const now = new Date();
    
    // Case 1: dd/mm/yyyy
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const yyyy = now.getFullYear();
    const dateFormatted = `${dd}/${mm}/${yyyy}`;
    
    // Case 2: hh.mm.ss
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const timeFormatted = `${hh}.${min}.${ss}`;
    
    // Case 3: Time ago format
    function timeAgo(date) {
        const seconds = Math.floor((new Date() - date) / 1000);
        let interval = Math.floor(seconds / 31536000);
        if (interval >= 1) return interval === 1 ? "1 year ago" : `${interval} years ago`;
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) return interval === 1 ? "1 month ago" : `${interval} months ago`;
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) return interval === 1 ? "1 day ago" : `${interval} days ago`;
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) return interval === 1 ? "1 hour ago" : `${interval} hours ago`;
        interval = Math.floor(seconds / 60);
        if (interval >= 1) return interval === 1 ? "1 minute ago" : `${interval} minutes ago`;
        return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
    }

    // Example usage of timeAgo function
    const postDate = new Date('2024-10-01T10:00:00'); // Example post date
    const timeAgoFormatted = timeAgo(postDate);

    return {
        dateFormatted,
        timeFormatted,
        timeAgoFormatted
    };
}

const timestamps = formatDate();
console.log(timestamps.dateFormatted); // Output: dd/mm/yyyy
console.log(timestamps.timeFormatted); // Output: hh.mm.ss
console.log(timestamps.timeAgoFormatted); // Output: X time ago
