// Order Form System for AstroTheist
// Handles report orders and consultation bookings

class OrderForm {
    constructor() {
        this.init();
    }

    init() {
        // Set up event listeners for order buttons
        document.addEventListener('click', (e) => {
            // Natal Report
            if (e.target.closest('[data-order="natal-report"]')) {
                e.preventDefault();
                this.showNatalReportForm();
            }

            // Synastry Report
            if (e.target.closest('[data-order="synastry-report"]')) {
                e.preventDefault();
                this.showSynastryReportForm();
            }

            // Consultation
            if (e.target.closest('[data-order="consultation"]')) {
                e.preventDefault();
                this.showConsultationForm();
            }

            // Birthday Interpretation
            if (e.target.closest('[data-order="birthday"]')) {
                e.preventDefault();
                this.showBirthdayForm();
            }

            // Healing Session
            if (e.target.closest('[data-order="healing"]')) {
                e.preventDefault();
                this.showHealingForm();
            }

            // Close modal
            if (e.target.classList.contains('order-modal-close') || e.target.classList.contains('order-modal-overlay')) {
                this.closeModal();
            }
        });
    }

    showNatalReportForm() {
        const html = `
            <div class="order-modal-overlay"></div>
            <div class="order-modal-content">
                <button class="order-modal-close">&times;</button>
                <h2 style="font-family: var(--font-heading); color: var(--gold-primary); margin-bottom: 1.5rem;">Order Natal Chart Report</h2>
                
                <form id="natalReportForm" class="order-form">
                    <div class="form-section">
                        <h3>Your Information</h3>
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">Phone Number (optional)</label>
                            <input type="tel" id="phone" name="phone">
                        </div>
                    </div>
                    
                    <div class="form-section">
                        <h3>Birth Information</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="birthDate">Birth Date *</label>
                                <input type="date" id="birthDate" name="birthDate" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="birthTime">Birth Time *</label>
                                <input type="time" id="birthTime" name="birthTime" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="birthPlace">Birth Place (City, State/Province, Country) *</label>
                            <input type="text" id="birthPlace" name="birthPlace" placeholder="e.g., Los Angeles, CA, USA" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="timeUncertain">
                                <input type="checkbox" id="timeUncertain" name="timeUncertain">
                                I'm uncertain about my exact birth time
                            </label>
                        </div>
                    </div>
                    
                    <div class="form-section">
                        <h3>Report Options</h3>
                        <div class="form-group">
                            <label for="reportType">Report Type *</label>
                            <select id="reportType" name="reportType" required>
                                <option value="">Select a report type</option>
                                <option value="basic-47">Basic Report - $47</option>
                                <option value="standard-67">Standard Report - $67</option>
                                <option value="comprehensive-97">Comprehensive Report - $97</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="specificQuestions">Specific Questions or Areas of Focus (optional)</label>
                            <textarea id="specificQuestions" name="specificQuestions" rows="4" placeholder="Any specific areas you'd like me to focus on in your reading..."></textarea>
                        </div>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">Submit Order</button>
                    </div>
                </form>
            </div>
        `;

        this.showModal(html);
        this.attachFormHandler('natalReportForm', 'Natal Chart Report');
    }

    showSynastryReportForm() {
        const html = `
            <div class="order-modal-overlay"></div>
            <div class="order-modal-content">
                <button class="order-modal-close">&times;</button>
                <h2 style="font-family: var(--font-heading); color: var(--gold-primary); margin-bottom: 1.5rem;">Order Synastry Report</h2>
                
                <form id="synastryReportForm" class="order-form">
                    <div class="form-section">
                        <h3>Your Information</h3>
                        <div class="form-group">
                            <label for="name">Your Full Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                    </div>
                    
                    <div class="form-section">
                        <h3>Person 1 Birth Information</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="person1Date">Birth Date *</label>
                                <input type="date" id="person1Date" name="person1Date" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="person1Time">Birth Time *</label>
                                <input type="time" id="person1Time" name="person1Time" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="person1Place">Birth Place *</label>
                            <input type="text" id="person1Place" name="person1Place" placeholder="City, State/Province, Country" required>
                        </div>
                    </div>
                    
                    <div class="form-section">
                        <h3>Person 2 Birth Information</h3>
                        <div class="form-group">
                            <label for="person2Name">Full Name *</label>
                            <input type="text" id="person2Name" name="person2Name" required>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="person2Date">Birth Date *</label>
                                <input type="date" id="person2Date" name="person2Date" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="person2Time">Birth Time *</label>
                                <input type="time" id="person2Time" name="person2Time" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="person2Place">Birth Place *</label>
                            <input type="text" id="person2Place" name="person2Place" placeholder="City, State/Province, Country" required>
                        </div>
                    </div>
                    
                    <div class="form-section">
                        <h3>Report Options</h3>
                        <div class="form-group">
                            <label for="reportType">Report Type *</label>
                            <select id="reportType" name="reportType" required>
                                <option value="">Select a report type</option>
                                <option value="standard-97">Standard Synastry - $97</option>
                                <option value="comprehensive-147">Comprehensive with Composite - $147</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="relationshipType">Relationship Type</label>
                            <select id="relationshipType" name="relationshipType">
                                <option value="romantic">Romantic Partnership</option>
                                <option value="marriage">Marriage</option>
                                <option value="friendship">Friendship</option>
                                <option value="business">Business Partnership</option>
                                <option value="family">Family</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="specificQuestions">Specific Questions (optional)</label>
                            <textarea id="specificQuestions" name="specificQuestions" rows="4"></textarea>
                        </div>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">Submit Order</button>
                    </div>
                </form>
            </div>
        `;

        this.showModal(html);
        this.attachFormHandler('synastryReportForm', 'Synastry Report');
    }

    showConsultationForm() {
        const html = `
            <div class="order-modal-overlay"></div>
            <div class="order-modal-content">
                <button class="order-modal-close">&times;</button>
                <h2 style="font-family: var(--font-heading); color: var(--gold-primary); margin-bottom: 1.5rem;">Book Consultation</h2>
                
                <form id="consultationForm" class="order-form">
                    <div class="form-section">
                        <h3>Your Information</h3>
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">Phone Number *</label>
                            <input type="tel" id="phone" name="phone" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="timezone">Your Timezone *</label>
                            <input type="text" id="timezone" name="timezone" placeholder="e.g., EST, PST, GMT+1" required>
                        </div>
                    </div>
                    
                    <div class="form-section">
                        <h3>Birth Information</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="birthDate">Birth Date *</label>
                                <input type="date" id="birthDate" name="birthDate" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="birthTime">Birth Time *</label>
                                <input type="time" id="birthTime" name="birthTime" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="birthPlace">Birth Place *</label>
                            <input type="text" id="birthPlace" name="birthPlace" required>
                        </div>
                    </div>
                    
                    <div class="form-section">
                        <h3>Consultation Details</h3>
                        <div class="form-group">
                            <label for="consultationType">Session Type *</label>
                            <select id="consultationType" name="consultationType" required>
                                <option value="">Select session type</option>
                                <option value="60min-147">60 Minutes - $147</option>
                                <option value="90min-197">90 Minutes - $197</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="preferredDates">Preferred Dates/Times</label>
                            <textarea id="preferredDates" name="preferredDates" rows="3" placeholder="Please provide 2-3 date/time options that work for you..."></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label for="topics">Topics You'd Like to Discuss *</label>
                            <textarea id="topics" name="topics" rows="4" placeholder="What would you like to focus on in this consultation?" required></textarea>
                        </div>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">Submit Booking Request</button>
                    </div>
                </form>
            </div>
        `;

        this.showModal(html);
        this.attachFormHandler('consultationForm', '1-on-1 Consultation');
    }

    showBirthdayForm() {
        const html = `
            <div class="order-modal-overlay"></div>
            <div class="order-modal-content">
                <button class="order-modal-close">&times;</button>
                <h2 style="font-family: var(--font-heading); color: var(--gold-primary); margin-bottom: 1.5rem;">Order Birthday Interpretation</h2>
                
                <form id="birthdayForm" class="order-form">
                    <div class="form-section">
                        <h3>Your Information</h3>
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                    </div>
                    
                    <div class="form-section">
                        <h3>Birth Information</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="birthDate">Birth Date *</label>
                                <input type="date" id="birthDate" name="birthDate" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="birthTime">Birth Time *</label>
                                <input type="time" id="birthTime" name="birthTime" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="birthPlace">Birth Place *</label>
                            <input type="text" id="birthPlace" name="birthPlace" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="upcomingBirthday">Upcoming Birthday Date *</label>
                            <input type="date" id="upcomingBirthday" name="upcomingBirthday" required>
                        </div>
                    </div>
                    
                    <div class="form-section">
                        <h3>Additional Information</h3>
                        <div class="form-group">
                            <label for="specificQuestions">Areas of Focus for the Year Ahead (optional)</label>
                            <textarea id="specificQuestions" name="specificQuestions" rows="4"></textarea>
                        </div>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">Submit Order - $77</button>
                    </div>
                </form>
            </div>
        `;

        this.showModal(html);
        this.attachFormHandler('birthdayForm', 'Birthday Interpretation');
    }

    showHealingForm() {
        const html = `
            <div class="order-modal-overlay"></div>
            <div class="order-modal-content">
                <button class="order-modal-close">&times;</button>
                <h2 style="font-family: var(--font-heading); color: var(--gold-primary); margin-bottom: 1.5rem;">Book Healing Session</h2>
                
                <form id="healingForm" class="order-form">
                    <div class="form-section">
                        <h3>Your Information</h3>
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">Phone Number *</label>
                            <input type="tel" id="phone" name="phone" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="timezone">Your Timezone *</label>
                            <input type="text" id="timezone" name="timezone" required>
                        </div>
                    </div>
                    
                    <div class="form-section">
                        <h3>Birth Information</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="birthDate">Birth Date *</label>
                                <input type="date" id="birthDate" name="birthDate" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="birthTime">Birth Time</label>
                                <input type="time" id="birthTime" name="birthTime">
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="birthPlace">Birth Place *</label>
                            <input type="text" id="birthPlace" name="birthPlace" required>
                        </div>
                    </div>
                    
                    <div class="form-section">
                        <h3>Session Details</h3>
                        <div class="form-group">
                            <label for="preferredDates">Preferred Dates/Times</label>
                            <textarea id="preferredDates" name="preferredDates" rows="3"></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label for="healingGoals">What would you like to work on? *</label>
                            <textarea id="healingGoals" name="healingGoals" rows="4" placeholder="Describe what you're hoping to heal or transform..." required></textarea>
                        </div>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">Submit Booking Request - $127</button>
                    </div>
                </form>
            </div>
        `;

        this.showModal(html);
        this.attachFormHandler('healingForm', 'Healing Session');
    }

    showModal(html) {
        const modal = document.createElement('div');
        modal.className = 'order-modal';
        modal.innerHTML = html;
        document.body.appendChild(modal);

        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.querySelector('.order-modal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = '';
        }
    }

    attachFormHandler(formId, serviceType) {
        setTimeout(() => {
            const form = document.getElementById(formId);
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleFormSubmit(form, serviceType);
                });
            }
        }, 100);
    }

    handleFormSubmit(form, serviceType) {
        const formData = new FormData(form);
        const data = {
            serviceType: serviceType,
            orderDate: new Date().toLocaleString(),
            orderId: 'ASTRO-' + Math.random().toString(36).substr(2, 9).toUpperCase()
        };

        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        // Add price based on selection if applicable
        if (data.reportType) {
            const priceMatch = data.reportType.match(/\$(\d+)/);
            if (priceMatch) data.priceString = '$' + priceMatch[1];
        } else if (data.consultationType) {
            const priceMatch = data.consultationType.match(/\$(\d+)/);
            if (priceMatch) data.priceString = '$' + priceMatch[1];
        } else if (serviceType === 'Birthday Interpretation') {
            data.priceString = '$77';
        } else if (serviceType === 'Healing Session') {
            data.priceString = '$127';
        }

        // Save to localStorage
        localStorage.setItem('pendingOrder', JSON.stringify(data));

        // Show a brief loading/redirecting message
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Redirecting to Checkout...';
        }

        // Redirect to checkout page
        setTimeout(() => {
            // Find base path prefix for subdirectories
            const pathDepth = window.location.pathname.split('/').length - 1;
            const rootPrefix = window.location.pathname.includes('/astrotheist/') ? 2 : 1;
            // Better way: find the root by looking for index.html or count dots
            // For now, let's assume checkout.html is at the root
            const depth = (window.location.pathname.match(/\//g) || []).length;
            let prefix = '';
            if (window.location.pathname.includes('learn/') || window.location.pathname.includes('services/') || window.location.pathname.includes('store/') || window.location.pathname.includes('tools/')) {
                prefix = '../';
                if (window.location.pathname.includes('/in-signs/') || window.location.pathname.includes('/in-houses/')) {
                    prefix = '../../../../';
                } else if (window.location.pathname.split('/').length > 3) {
                    prefix = '../../';
                }
            }

            // If we are in a deep subpage like learn/planets/in-signs/sun/aries.html
            // The logic above needs to be robust. 
            // Let's use a simpler heuristic or just find the home link.
            const homeLink = document.querySelector('.astro-logo')?.getAttribute('href') || 'index.html';
            const checkoutUrl = homeLink.replace('index.html', 'checkout.html');

            window.location.href = checkoutUrl;
        }, 1000);
    }

    showSuccessMessage(serviceType) {
        const message = document.createElement('div');
        message.className = 'success-notification';
        message.innerHTML = `
            <div style="background: var(--gold-primary); color: var(--black-deep); padding: 1.5rem 2rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); max-width: 400px; text-align: center;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">✓</div>
                <div style="font-weight: 600; margin-bottom: 0.5rem;">Order Submitted!</div>
                <div style="font-size: 0.9rem;">Your email client should open. If not, please email channingcreager777@gmail.com with your order details.</div>
            </div>
        `;
        message.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10001;';

        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 5000);
    }
}

// Initialize order form system
document.addEventListener('DOMContentLoaded', () => {
    new OrderForm();
});








