// Forum JavaScript - Demo functionality using localStorage
// Note: This is a client-side demo. For production, integrate with a backend API.

document.addEventListener('DOMContentLoaded', function () {
    initializeForum();
});

function initializeForum() {
    // Initialize search functionality
    const searchBox = document.getElementById('forumSearch');
    if (searchBox) {
        searchBox.addEventListener('input', handleSearch);
    }

    // Initialize reply form
    const replyForm = document.getElementById('replyForm');
    if (replyForm) {
        replyForm.addEventListener('submit', handleReplySubmit);
    }

    // Initialize new thread form
    const threadForm = document.getElementById('newThreadForm');
    if (threadForm) {
        threadForm.addEventListener('submit', handleThreadSubmit);
    }

    // Load stored data
    loadForumData();
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const threadItems = document.querySelectorAll('.thread-item');

    threadItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const meta = item.querySelector('.thread-meta').textContent.toLowerCase();

        if (title.includes(searchTerm) || meta.includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function handleReplySubmit(e) {
    e.preventDefault();

    const content = document.getElementById('replyContent').value;

    if (!content.trim()) {
        alert('Please enter a reply');
        return;
    }

    // Create new reply element
    const replyHTML = createReplyHTML(content);

    // Insert before reply form
    const replyForm = document.querySelector('.reply-form');
    replyForm.insertAdjacentHTML('beforebegin', replyHTML);

    // Clear form
    document.getElementById('replyContent').value = '';

    // Save to localStorage (demo)
    saveReply(content);

    // Show success message
    showNotification('Reply posted successfully!');
}

function createReplyHTML(content) {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    // Get current post count
    const posts = document.querySelectorAll('.post');
    const postNumber = posts.length + 1;

    return `
        <article class="post">
            <div class="post-author">
                <div class="author-avatar">YU</div>
                <div class="author-name">You</div>
                <div class="author-role">Member</div>
                <div class="author-stats">
                    <div>Posts: 1</div>
                    <div>Joined: ${now.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</div>
                </div>
            </div>
            <div class="post-content">
                <div class="post-meta">
                    <span class="post-date">${dateStr}</span>
                    <span class="post-number">#${postNumber}</span>
                </div>
                <div class="post-body">
                    <p>${escapeHtml(content)}</p>
                </div>
                <div class="post-actions">
                    <a href="#" class="post-action">👍 Like (0)</a>
                    <a href="#reply" class="post-action">💬 Reply</a>
                    <a href="#" class="post-action">🔗 Share</a>
                </div>
            </div>
        </article>
    `;
}

function handleThreadSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('threadTitle').value;
    const category = document.getElementById('threadCategory').value;
    const content = document.getElementById('threadContent').value;

    if (!title.trim() || !content.trim()) {
        alert('Please fill in all fields');
        return;
    }

    // Save thread (demo)
    const thread = {
        id: Date.now(),
        title: title,
        category: category,
        content: content,
        author: 'You',
        date: new Date().toISOString(),
        replies: 0,
        views: 0
    };

    saveThread(thread);

    // Show success and redirect
    showNotification('Thread created successfully!');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

function saveReply(content) {
    const threadId = getThreadIdFromURL();
    const replies = JSON.parse(localStorage.getItem('forum_replies') || '{}');

    if (!replies[threadId]) {
        replies[threadId] = [];
    }

    replies[threadId].push({
        content: content,
        author: 'You',
        date: new Date().toISOString()
    });

    localStorage.setItem('forum_replies', JSON.stringify(replies));
}

function saveThread(thread) {
    const threads = JSON.parse(localStorage.getItem('forum_threads') || '[]');
    threads.unshift(thread);
    localStorage.setItem('forum_threads', JSON.stringify(threads));
}

function loadForumData() {
    // Load any saved threads or replies
    const threads = JSON.parse(localStorage.getItem('forum_threads') || '[]');
    const replies = JSON.parse(localStorage.getItem('forum_replies') || '{}');

    // This would be used to populate the forum with saved data
    console.log('Loaded forum data:', { threads, replies });
}

function getThreadIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || '1';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--gold-primary);
        color: var(--black-deep);
        padding: 1rem 2rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);








