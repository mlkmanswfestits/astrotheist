// Authentication System for AstroTheist Forum
// Uses localStorage for demo purposes

class ForumAuth {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    init() {
        // Check if user is logged in
        const session = localStorage.getItem('forum_session');
        if (session) {
            this.currentUser = JSON.parse(session);
            this.updateUI();
        }

        // Set up event listeners
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Login/Signup buttons
        document.addEventListener('click', (e) => {
            if (e.target.id === 'showLogin') {
                e.preventDefault();
                this.showLoginModal();
            }
            if (e.target.id === 'showSignup') {
                e.preventDefault();
                this.showSignupModal();
            }
            if (e.target.id === 'logoutBtn') {
                e.preventDefault();
                this.logout();
            }
            if (e.target.classList.contains('modal-close') || e.target.classList.contains('modal-overlay')) {
                this.closeModals();
            }

            // User dropdown toggle
            if (e.target.closest('.user-menu-btn')) {
                e.preventDefault();
                const dropdown = document.querySelector(-dropdown-menu');
                if (dropdown) {
                    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
                }
            }

            // Close dropdown when clicking outside
            if (!e.target.closest(-dropdown')) {
                const dropdown = document.querySelector(-dropdown-menu');
                if (dropdown) {
                    dropdown.style.display = 'none';
                }
            }
        });

        // Form submissions
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        const signupForm = document.getElementById('signupForm');
        if (signupForm) {
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSignup();
            });
        }
    }

    showLoginModal() {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    showSignupModal() {
        const modal = document.getElementById('signupModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    closeModals() {
        document.querySelectorAll('.auth-modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }

    handleLogin() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (!email || !password) {
            this.showError('loginError', 'Please fill in all fields');
            return;
        }

        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('forum_users') || '[]');
        const user = users.find(u => u.email === email);

        if (!user) {
            this.showError('loginError', 'User not found. Please sign up first.');
            return;
        }

        // Simple password check (in production, use proper hashing)
        if (user.password !== this.simpleHash(password)) {
            this.showError('loginError', 'Incorrect password');
            return;
        }

        // Create session
        this.currentUser = {
            username: user.username,
            email: user.email,
            joinDate: user.joinDate,
            posts: user.posts || 0
        };

        localStorage.setItem('forum_session', JSON.stringify(this.currentUser));
        this.updateUI();
        this.closeModals();
        this.showNotification('Welcome back, ' + user.username + '!');
    }

    handleSignup() {
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;

        // Validation
        if (!username || !email || !password || !confirmPassword) {
            this.showError('signupError', 'Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            this.showError('signupError', 'Passwords do not match');
            return;
        }

        if (password.length < 6) {
            this.showError('signupError', 'Password must be at least 6 characters');
            return;
        }

        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('forum_users') || '[]');
        if (users.find(u => u.email === email)) {
            this.showError('signupError', 'Email already registered');
            return;
        }

        if (users.find(u => u.username === username)) {
            this.showError('signupError', 'Username already taken');
            return;
        }

        // Create new user
        const newUser = {
            username: username,
            email: email,
            password: this.simpleHash(password),
            joinDate: new Date().toISOString(),
            posts: 0
        };

        users.push(newUser);
        localStorage.setItem('forum_users', JSON.stringify(users));

        // Auto-login
        this.currentUser = {
            username: newUser.username,
            email: newUser.email,
            joinDate: newUser.joinDate,
            posts: 0
        };

        localStorage.setItem('forum_session', JSON.stringify(this.currentUser));
        this.updateUI();
        this.closeModals();
        this.showNotification('Welcome to AstroTheist, ' + username + '!');
    }

    logout() {
        localStorage.removeItem('forum_session');
        this.currentUser = null;
        this.updateUI();
        this.showNotification('Logged out successfully');
    }

    updateUI() {
        const userSection = document.getElementById('userSection');
        const guestSection = document.getElementById('guestSection');

        if (this.currentUser) {
            // Show logged-in state
            if (userSection) {
                userSection.style.display = 'flex';
                document.getElementById('usernameDisplay').textContent = this.currentUser.username;
            }
            if (guestSection) {
                guestSection.style.display = 'none';
            }

            // Enable posting features
            const postButtons = document.querySelectorAll('.requires-auth');
            postButtons.forEach(btn => {
                btn.style.display = '';
                btn.disabled = false;
            });
        } else {
            // Show guest state
            if (userSection) {
                userSection.style.display = 'none';
            }
            if (guestSection) {
                guestSection.style.display = 'flex';
            }

            // Disable posting features
            const postButtons = document.querySelectorAll('.requires-auth');
            postButtons.forEach(btn => {
                btn.onclick = (e) => {
                    e.preventDefault();
                    this.showNotification('Please log in to post');
                    this.showLoginModal();
                };
            });
        }
    }

    showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
            setTimeout(() => {
                errorElement.style.display = 'none';
            }, 5000);
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
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

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    simpleHash(str) {
        // Simple hash for demo purposes - DO NOT use in production!
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString();
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }
}

// Initialize auth system
const forumAuth = new ForumAuth();








