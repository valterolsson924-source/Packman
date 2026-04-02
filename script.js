const timezones = {
    'clock-utc': 'UTC',
    'clock-est': 'America/New_York',
    'clock-pst': 'America/Los_Angeles',
    'clock-gmt': 'Europe/London',
    'clock-ist': 'Asia/Kolkata',
    'clock-jst': 'Asia/Tokyo'
};

const labels = {
    'clock-utc': 'UTC',
    'clock-est': 'EST (New York)',
    'clock-pst': 'PST (Los Angeles)',
    'clock-gmt': 'GMT (London)',
    'clock-ist': 'IST (India)',
    'clock-jst': 'JST (Tokyo)'
};

function updateClocks() {
    const now = new Date();

    for (const [id, timezone] of Object.entries(timezones)) {
        const time = now.toLocaleTimeString('en-US', { timeZone: timezone });
        const label = labels[id];
        document.getElementById(id).innerHTML = `<div style="font-size: 0.5em; color: #667eea; margin-bottom: 10px;">${label}</div>${time}`;
    }
}

updateClocks();
setInterval(updateClocks, 1000);