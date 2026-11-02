// Sample data - replace with your actual content
const articlesData = [
    {
        title: "Coach W Chasing History: 4 Straight Natty Bids After USF-Carolina Dominance",
        date: "November 2, 2030",
        category: "Breaking News",
        excerpt: "After winning back-to-back national championships at USF and one more at South Carolina, Coach Dub is on an unprecedented dynasty run. The 24-17 ring ceremony against Ole Miss proves the defense is still elite.",
        emoji: "👑"
    },
    {
        title: "Jake Paulson's Comeback: Will Defensive Mastermind Return to Sidelines?",
        date: "November 1, 2030",
        category: "Analysis",
        excerpt: "The man who couldn't handle South Carolina's intensity is back on the market. After early retirement, Paulson is eyeing North Texas and Oregon State. Is the itch too strong to ignore?",
        emoji: "🔙"
    },
    {
        title: "'The Number 9 Experiment is DEAD' - Coach Natty G After Heartbreaking Tulane Loss",
        date: "October 31, 2030",
        category: "Quotes",
        excerpt: "East Carolina's Coach Natty G pulls the plug on his 6'6\" white boy swag running back experiment following a crushing defeat to Tulane. The Pirates are back to the drawing board.",
        emoji: "💔"
    },
    {
        title: "Jared Berkovsky's Dilemma: Is Tulane Building a Force or Chasing the Next Job?",
        date: "October 29, 2030",
        category: "Deep Dive",
        excerpt: "After getting splattered in the national championship rematch against South Carolina, Tulane bounced back strong against red-hot East Carolina. Is Berkovsky tooling up to dominate, or is he interviewing for bigger programs?",
        emoji: "🤔"
    },
    {
        title: "Week 10 Predictions & Picks",
        date: "October 28, 2030",
        category: "Predictions",
        excerpt: "Our expert takes on this week's biggest matchups and how they affect dynasty value.",
        emoji: "🎯"
    },
    {
        title: "Injury Report: Impact on Rosters",
        date: "October 25, 2030",
        category: "News",
        excerpt: "Key injuries reported this week and their potential dynasty league implications.",
        emoji: "🏥"
    },
];

const matchupsData = [
    {
        title: "South Carolina vs. East Carolina - Championship Rematch Vibes",
        date: "This Week",
        team1: "South Carolina",
        team2: "East Carolina",
        impact: "High Impact",
        excerpt: "Can East Carolina's bounce-back performance translate into a statement win? South Carolina's defense looks unstoppable under Coach W.",
        emoji: "🏈"
    },
    {
        title: "Tulane vs. Memphis - Building Momentum",
        date: "Next Week",
        team1: "Tulane",
        team2: "Memphis",
        impact: "Medium Impact",
        excerpt: "Jared Berkovsky's squad is clicking after the East Carolina win. This is a chance to prove last year's championship loss was just a blip.",
        emoji: "⚔️"
    },
    {
        title: "North Texas vs. Oregon State - The Paulson Effect?",
        date: "Week 12",
        team1: "North Texas",
        team2: "Oregon State",
        impact: "Medium Impact",
        excerpt: "Will Jake Paulson emerge from retirement? Both programs are quietly hoping. This matchup could dictate the coaching carousel.",
        emoji: "👀"
    },
    {
        title: "USF vs. South Carolina - Coach W's Former Stomping Grounds",
        date: "Week 13",
        team1: "USF",
        team2: "South Carolina",
        impact: "High Impact",
        excerpt: "A trip down memory lane for the man chasing his 4th straight natty. South Carolina's defense will remind USF why they couldn't keep up.",
        emoji: "🔥"
    },
];

const interviewsData = [
    {
        title: "Exclusive: Coach W on the Ring Ceremony & Chasing History",
        date: "November 2, 2030",
        subject: "Coach W",
        excerpt: "The dynasty king sits down after his third straight natty win. How does he keep the machine rolling? What's next after 4 in a row?",
        emoji: "🎤"
    },
    {
        title: "Coach Natty G: The 'Number 9' Experiment Post-Mortem",
        date: "October 31, 2030",
        subject: "Coach Natty G (East Carolina)",
        excerpt: "A candid conversation about the 6'6\" white boy swag running back and why the experiment failed. What's the new game plan for the Pirates?",
        emoji: "💬"
    },
    {
        title: "Jared Berkovsky: Championship Rematch Loss & Bouncing Back",
        date: "October 29, 2030",
        subject: "Jared Berkovsky (Tulane)",
        excerpt: "Tulane's head coach reflects on getting splattered in the natty rematch, but then demolishing East Carolina. Is this team elite or just hot right now?",
        emoji: "👥"
    },
    {
        title: "Jake Paulson's Comeback Story: The Itch is Real",
        date: "October 27, 2030",
        subject: "Jake Paulson (Former Defensive Coordinator)",
        excerpt: "The man who stepped away from the intensity talks about retirement, why he's feeling the itch again, and which job could bring him back.",
        emoji: "🎙️"
    },
];

const videosData = [
    {
        title: "Coach W's Ring Ceremony Highlights: The 24-17 Masterclass",
        date: "November 2, 2030",
        videoId: "dQw4w9WgXcQ",
        excerpt: "Relive the defensive clinic that won Coach W his 3rd straight natty. Ole Miss couldn't answer South Carolina's elite defense.",
        emoji: "🎬"
    },
    {
        title: "East Carolina vs. Tulane: The Bounce-Back Game",
        date: "October 30, 2030",
        videoId: "dQw4w9WgXcQ",
        excerpt: "Jared Berkovsky's squad showed resilience after the championship loss. Full highlights of Tulane's statement win.",
        emoji: "📺"
    },
    {
        title: "Coach Natty G's Post-Game Rant: 'The Number 9 is DEAD'",
        date: "October 31, 2030",
        videoId: "dQw4w9WgXcQ",
        excerpt: "Raw footage of East Carolina's coach pulling the plug on his running back experiment after the Tulane loss.",
        emoji: "😤"
    },
    {
        title: "Dynasty Coaching Carousel: Who's Going Where in 2031?",
        date: "October 28, 2030",
        videoId: "dQw4w9WgXcQ",
        excerpt: "Breaking down Jake Paulson's potential return, Berkovsky's job market value, and Coach W's legacy run.",
        emoji: "📹"
    },
];

const standingsData = [
    { rank: 1, team: "South Carolina", owner: "Coach W", wins: 9, losses: 0, pointsFor: 1420, pointsAgainst: 810 },
    { rank: 2, team: "Tulane", owner: "Jared Berkovsky", wins: 8, losses: 1, pointsFor: 1350, pointsAgainst: 920 },
    { rank: 3, team: "East Carolina", owner: "Coach Natty G", wins: 7, losses: 2, pointsFor: 1280, pointsAgainst: 1050 },
    { rank: 4, team: "Ole Miss", owner: "Coach B", wins: 6, losses: 3, pointsFor: 1180, pointsAgainst: 1150 },
    { rank: 5, team: "USF", owner: "Coach Legacy", wins: 5, losses: 4, pointsFor: 1050, pointsAgainst: 1200 },
    { rank: 6, team: "North Texas", owner: "Hopeful", wins: 3, losses: 6, pointsFor: 950, pointsAgainst: 1350 },
];

// Function to populate articles
function populateArticles() {
    const container = document.getElementById('articlesContainer');
    if (!container) return;

    container.innerHTML = articlesData.map(article => `
        <div class="article-card">
            <div class="card-image">${article.emoji}</div>
            <div class="card-content">
                <span class="card-meta">${article.category} • ${article.date}</span>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <a href="#" class="read-more">Read More →</a>
            </div>
        </div>
    `).join('');
}

// Function to populate matchups
function populateMatchups() {
    const container = document.getElementById('matchupsContainer');
    if (!container) return;

    container.innerHTML = matchupsData.map(matchup => `
        <div class="matchup-card">
            <div class="card-image">${matchup.emoji}</div>
            <div class="card-content">
                <span class="card-meta">${matchup.date} • ${matchup.impact}</span>
                <h3>${matchup.title}</h3>
                <p><strong>${matchup.team1} vs ${matchup.team2}</strong></p>
                <p>${matchup.excerpt}</p>
                <a href="#" class="read-more">View Matchup →</a>
            </div>
        </div>
    `).join('');
}

// Function to populate interviews
function populateInterviews() {
    const container = document.getElementById('interviewsContainer');
    if (!container) return;

    container.innerHTML = interviewsData.map(interview => `
        <div class="interview-card">
            <div class="card-image">${interview.emoji}</div>
            <div class="card-content">
                <span class="card-meta">${interview.subject} • ${interview.date}</span>
                <h3>${interview.title}</h3>
                <p>${interview.excerpt}</p>
                <a href="#" class="read-more">Read Interview →</a>
            </div>
        </div>
    `).join('');
}

// Function to populate videos
function populateVideos() {
    const container = document.getElementById('videosContainer');
    if (!container) return;

    container.innerHTML = videosData.map(video => `
        <div class="video-card">
            <div class="video-embed">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.videoId}" 
                    title="${video.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
            </div>
            <div class="card-content">
                <span class="card-meta">${video.date}</span>
                <h3>${video.title}</h3>
                <p>${video.excerpt}</p>
            </div>
        </div>
    `).join('');
}

// Function to populate standings
function populateStandings() {
    const container = document.getElementById('standingsContainer');
    if (!container) return;

    container.innerHTML = standingsData.map(team => `
        <tr>
            <td><strong>#${team.rank}</strong></td>
            <td>${team.team}</td>
            <td>${team.owner}</td>
            <td>${team.wins}</td>
            <td>${team.losses}</td>
            <td>${team.pointsFor}</td>
            <td>${team.pointsAgainst}</td>
        </tr>
    `).join('');
}

// Handle contact form submission
function handleContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
}

// Initialize all functions when page loads
document.addEventListener('DOMContentLoaded', function() {
    populateArticles();
    populateMatchups();
    populateInterviews();
    populateVideos();
    populateStandings();
    handleContactForm();
});