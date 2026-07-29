/**
 * EDWARD RATUNIL - AI ASSISTANT MODULE ("Edward AI")
 * Intelligent interactive assistant providing resume insights, project details,
 * and live interactive Q&A for recruiters and visitors.
 * 
 * Includes drag-to-scroll prompt chips & draggable window positioning.
 */

// Configuration for API Integration (OpenAI, Gemini, custom proxy)
const AI_CONFIG = {
    useLiveAPI: false, // Set to true if linking to a backend LLM proxy or API endpoint
    apiEndpoint: 'https://api.example.com/v1/chat', 
    apiKey: '', // Never store raw keys in frontend production; use proxy if live API is enabled
    botName: 'Edward AI',
    welcomeMessage: `👋 Hi! I'm **Edward AI**, your interactive assistant. Ask me anything about Edward Ratunil's experience in **Full Stack Development**, **IoT Capstone Project (CORNMIST)**, **ISP & Fiber Optic Networking**, or technical skills!`
};

// Edward's Comprehensive Knowledge Base
const KNOWLEDGE_BASE = {
    profile: {
        name: "Edward S. Ratunil",
        location: "Iligan City, Lanao del Norte, Philippines",
        phone: "09976112845",
        email: "ratunil.edward@gmail.com",
        github: "https://github.com/edwardratunil",
        portfolio: "https://edwardratunil.github.io/",
        status: "Graduating BS IT student (Major in IoT) at USTP CdO, actively seeking Full Stack, IoT, and IT Support roles."
    },
    
    summary: `Edward is an IT Support Specialist and Full Stack Developer with hands-on expertise in networking (FTTH fiber optics, server setup), web development (Laravel, Vue.js, React.js, PHP, REST APIs), and IoT hardware integration (ESP32 microcontrollers).`,

    projects: [
        {
            name: "CORNMIST (Capstone Project)",
            tech: "ESP32, REST API over WiFi, MAC & API Key Authentication, Vue/Web & Mobile App",
            details: "IoT-based misting and pesticide application system engineered for agricultural crop protection. Features MAC address hardware authentication, role-based access control, server-side security validation, web monitoring dashboard, and farmer field operation mobile app."
        },
        {
            name: "PingGamer",
            url: "https://pinggamer.com",
            tech: "Vue.js, Electron Desktop Client, WireGuard VPN, PHP & MySQL Backend",
            details: "Full stack web and desktop gaming network optimization platform built to reduce gaming latency using secure tunneling, automated server routing, and REST API communication."
        },
        {
            name: "Government Inventory Management System (COPAD)",
            tech: "PHP, MySQL, Full Stack Web Architecture, CRUD Operations",
            details: "Web-based inventory and record tracking system built for administrative government use to improve document efficiency and asset reporting."
        },
        {
            name: "Python Payroll System",
            tech: "Python, Desktop GUI, SQLite/MySQL",
            details: "Desktop application built for managing employee payroll, salary calculation, and record management."
        },
        {
            name: "Laravel + ReactJS Social Media",
            tech: "Laravel, React.js, REST API, MySQL",
            details: "Full-stack social platform featuring user authentication, post feeds, interactive comments, and real-time user notification flows."
        },
        {
            name: "Laravel Multi Authentication System",
            tech: "Laravel, PHP, Blade/Vue, MySQL",
            details: "Secure role-based access control (RBAC) web application supporting multi-tier roles for admins, managers, and users."
        },
        {
            name: "Python ESP32 WiFi + GPS Trackable Vehicle",
            tech: "Python, ESP32, Neo6M GPS Module, WebSockets/REST",
            details: "IoT vehicle tracking project leveraging ESP32 and Python for real-time telemetry and GPS position mapping over WiFi."
        }
    ],

    experience: [
        {
            role: "Network Technician / IT Support (Self-Employed - ISP)",
            period: "2020 – 2022",
            highlights: [
                "Installed Fiber-to-the-Home (FTTH) internet connections for residential and office clients",
                "Configured fiber network equipment, routers, switches, and distribution boxes",
                "Performed precision fiber optic splicing and cabling troubleshooting",
                "Configured and maintained Linux/Ubuntu internet servers and network infrastructure",
                "Managed client deployments, field maintenance operations, and technical support"
            ]
        },
        {
            role: "Accounting & IT Support Assistant - GIP",
            company: "Municipality of Lugait",
            period: "2013 (6 months)",
            highlights: [
                "Assisted accounting office in encoding check numbers and financial records",
                "Supported inter-departmental document processing, routing, and office IT support",
                "Maintained organized technical records and administrative documentation"
            ]
        }
    ],

    education: [
        {
            degree: "BS in Information Technology (Major in Internet of Things)",
            institution: "University of Science and Technology of Southern Philippines (USTP - Cagayan de Oro)",
            year: "Expected Graduation: June 2026"
        },
        {
            degree: "Diploma in Electronics Technology (Major in Computer Technology)",
            institution: "Mindanao State University – Naawan",
            year: "2015 – 2017"
        },
        {
            degree: "Computer Hardware Servicing NC II",
            institution: "Technical Education and Skills Development Authority (TESDA)",
            year: "2012 – 2013"
        }
    ],

    skills: {
        itSupport: ["Hardware Troubleshooting", "Software Installation", "OS Setup (Windows/Linux)", "Printer Setup", "End-User Tech Support"],
        networking: ["LAN/WAN Configuration", "FTTH Deployment", "Fiber Optic Splicing", "Router & Switch Setup", "Network Troubleshooting"],
        systems: ["Ubuntu Server Administration", "Microsoft 365", "Git & GitHub", "Network Monitoring", "IT Equipment Maintenance"],
        development: ["JavaScript", "PHP", "Laravel", "Vue.js", "React.js", "Electron", "REST APIs", "MySQL", "Python"],
        iot: ["ESP32 Microcontrollers", "WiFi Telemetry", "Neo6M GPS", "Sensor Automation", "MAC Address Hardware Validation"]
    }
};

class EdwardAIAssistant {
    constructor() {
        this.chatMessagesEl = null;
        this.inputEl = null;
        this.windowEl = null;
        this.triggerEl = null;
        this.isTyping = false;
    }

    init() {
        this.chatMessagesEl = document.getElementById('aiChatMessages');
        this.inputEl = document.getElementById('aiInput');
        this.windowEl = document.getElementById('aiChatWindow');
        this.triggerEl = document.getElementById('aiWidgetTrigger');

        if (!this.chatMessagesEl || !this.windowEl) return;

        // Render Welcome Message if empty
        if (this.chatMessagesEl.children.length === 0) {
            this.addMessage(AI_CONFIG.welcomeMessage, 'bot');
        }

        // Attach listeners
        document.getElementById('aiCloseBtn')?.addEventListener('click', () => this.toggleWindow(false));
        this.triggerEl?.addEventListener('click', () => this.toggleWindow());
        
        document.getElementById('aiSendBtn')?.addEventListener('click', () => this.handleSendMessage());
        this.inputEl?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSendMessage();
        });

        // Delegate click for prompt suggestion chips
        document.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains('ai-chip')) {
                const promptText = e.target.dataset.prompt || e.target.textContent.trim();
                this.sendPrompt(promptText);
            }
            if (e.target && e.target.classList.contains('js-trigger-ai-project')) {
                const projName = e.target.dataset.project;
                this.toggleWindow(true);
                this.sendPrompt(`Tell me more about the ${projName} project.`);
            }
        });

        // Initialize drag features
        this.initDragToScrollSuggestions();
        this.initDraggableWindow();
    }

    toggleWindow(show = null) {
        if (!this.windowEl) return;
        const isActive = this.windowEl.classList.contains('active');
        const nextState = show !== null ? show : !isActive;

        if (nextState) {
            this.windowEl.classList.add('active');
            this.inputEl?.focus();
        } else {
            this.windowEl.classList.remove('active');
        }
    }

    sendPrompt(text) {
        if (!text || this.isTyping) return;
        this.addMessage(text, 'user');
        this.processQuery(text);
    }

    handleSendMessage() {
        const text = this.inputEl?.value.trim();
        if (!text || this.isTyping) return;

        this.inputEl.value = '';
        this.addMessage(text, 'user');
        this.processQuery(text);
    }

    addMessage(content, sender = 'bot') {
        const msgDiv = document.createElement('div');
        msgDiv.className = `ai-msg ${sender === 'bot' ? 'ai-msg-bot' : 'ai-msg-user'}`;
        
        // Simple Markdown parsing for bold, links, lists
        let formatted = content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
            .replace(/\n/g, '<br>');

        msgDiv.innerHTML = formatted;
        this.chatMessagesEl.appendChild(msgDiv);
        this.scrollToBottom();
        return msgDiv;
    }

    showTypingIndicator() {
        this.isTyping = true;
        const typingDiv = document.createElement('div');
        typingDiv.id = 'aiTypingIndicator';
        typingDiv.className = 'ai-msg ai-msg-bot';
        typingDiv.innerHTML = `
            <div class="typing-dots">
                <span></span><span></span><span></span>
            </div>
        `;
        this.chatMessagesEl.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        this.isTyping = false;
        const typingDiv = document.getElementById('aiTypingIndicator');
        if (typingDiv) typingDiv.remove();
    }

    scrollToBottom() {
        if (this.chatMessagesEl) {
            this.chatMessagesEl.scrollTop = this.chatMessagesEl.scrollHeight;
        }
    }

    async processQuery(queryText) {
        this.showTypingIndicator();

        // Check if external live API is enabled
        if (AI_CONFIG.useLiveAPI && AI_CONFIG.apiEndpoint) {
            try {
                const response = await this.callExternalLLM(queryText);
                this.hideTypingIndicator();
                this.addMessage(response, 'bot');
                return;
            } catch (err) {
                console.warn('External AI endpoint error, falling back to offline knowledge engine:', err);
            }
        }

        // Offline Knowledge Engine Delay Simulation
        setTimeout(() => {
            this.hideTypingIndicator();
            const responseText = this.generateOfflineResponse(queryText);
            this.addMessage(responseText, 'bot');
        }, 600 + Math.random() * 400);
    }

    generateOfflineResponse(q) {
        const query = q.toLowerCase();

        // 1. CORNMIST / Capstone Project
        if (query.includes('cornmist') || query.includes('capstone') || query.includes('misting') || query.includes('pesticide') || query.includes('crop')) {
            const c = KNOWLEDGE_BASE.projects[0];
            return `🌾 **${c.name}**\n\n${c.details}\n\n**Key Tech Stack:** ${c.tech}\n\nFeatures server-side MAC address validation, mobile farmer app, and automated REST API WiFi telemetry!`;
        }

        // 2. PingGamer
        if (query.includes('pinggamer') || query.includes('latency') || query.includes('vpn') || query.includes('tunnel') || query.includes('wireguard')) {
            const p = KNOWLEDGE_BASE.projects[1];
            return `⚡ **${p.name}** ([pinggamer.com](${p.url}))\n\n${p.details}\n\n**Tech Stack:** ${p.tech}`;
        }

        // 3. Network / Fiber / ISP / FTTH Experience
        if (query.includes('fiber') || query.includes('ftth') || query.includes('splicing') || query.includes('isp') || query.includes('network') || query.includes('router') || query.includes('troubleshoot')) {
            const exp = KNOWLEDGE_BASE.experience[0];
            return `📡 **${exp.role} (${exp.period})**\n\nEdward has 2+ years of hands-on fiber optic (FTTH) deployment & network administration experience:\n\n• Installed & configured FTTH fiber connections for residential & business clients\n• Performed precision fiber optic splicing and cabling\n• Configured routers, switches, and Linux/Ubuntu servers\n• Solved complex LAN/WAN connectivity issues in field environments.`;
        }

        // 4. Full Stack / Web Development / Tech Stack
        if (query.includes('developer') || query.includes('laravel') || query.includes('vue') || query.includes('react') || query.includes('php') || query.includes('stack') || query.includes('skill') || query.includes('code')) {
            return `💻 **Edward's Full Stack Capabilities:**\n\n• **Frontend:** Vue.js, React.js, Modern JavaScript (ES6+), HTML5, CSS3/Glassmorphism\n• **Backend:** PHP, Laravel, REST APIs, Python\n• **Desktop & Native:** Electron, WireGuard integration\n• **Databases:** MySQL, SQLite\n• **IoT & Hardware:** ESP32 Microcontrollers, WiFi telemetry, Neo6M GPS modules`;
        }

        // 5. Contact / Hire / Email / Phone
        if (query.includes('contact') || query.includes('hire') || query.includes('email') || query.includes('phone') || query.includes('reach') || query.includes('interview') || query.includes('availabl')) {
            return `📬 **Get in Touch with Edward:**\n\n• **Email:** [ratunil.edward@gmail.com](mailto:ratunil.edward@gmail.com)\n• **Phone:** 09976112845\n• **GitHub:** [github.com/edwardratunil](${KNOWLEDGE_BASE.profile.github})\n• **Location:** ${KNOWLEDGE_BASE.profile.location}\n\nEdward is ready for full-time IT, Full Stack, and IoT engineering opportunities!`;
        }

        // 6. Education / Degree / TESDA
        if (query.includes('education') || query.includes('degree') || query.includes('ustp') || query.includes('tesda') || query.includes('study') || query.includes('college')) {
            return `🎓 **Education & Certifications:**\n\n1. **BS in Information Technology (Major in IoT)** - USTP CdO (Expected Graduation: June 2026)\n2. **Diploma in Electronics Technology (Computer Tech)** - MSU Naawan (2015–2017)\n3. **Computer Hardware Servicing NC II** - TESDA (2012–2013)`;
        }

        // 7. Projects Overview
        if (query.includes('project') || query.includes('portfolio') || query.includes('built') || query.includes('work')) {
            return `🚀 **Edward's Major Projects:**\n\n1. **PingGamer** - Gaming Latency Tunneling Platform ([pinggamer.com](https://pinggamer.com))\n2. **CORNMIST Capstone** - ESP32 IoT Misting & Pesticide System\n3. **Government COPAD System** - Web Inventory & Document Manager\n4. **Python Payroll System** - Desktop Payroll App\n5. **Laravel + React Social Media** - Full Stack Social Network\n6. **Laravel Multi-Auth System** - Role-Based Security Portal\n7. **ESP32 GPS Vehicle Tracker** - Real-Time Python & IoT Telemetry`;
        }

        // Fallback default response
        return `🤖 I'm knowledgeable about Edward's entire background! You can ask me about:\n\n• **CORNMIST Capstone Project**\n• **PingGamer Optimization Platform**\n• **FTTH & Network Infrastructure experience**\n• **Laravel, Vue.js, & React skills**\n• **Education & TESDA Certification**\n• **Contact & Hiring Information**`;
    }

    async callExternalLLM(userPrompt) {
        const response = await fetch(AI_CONFIG.apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(AI_CONFIG.apiKey ? { 'Authorization': `Bearer ${AI_CONFIG.apiKey}` } : {})
            },
            body: JSON.stringify({
                messages: [
                    { role: 'system', content: `You are Edward AI, a representative for Edward S. Ratunil. Here is his resume context: ${JSON.stringify(KNOWLEDGE_BASE)}` },
                    { role: 'user', content: userPrompt }
                ]
            })
        });

        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        const data = await response.json();
        return data.choices?.[0]?.message?.content || data.reply || "Sorry, I couldn't get a response from the live endpoint.";
    }

    // Drag-to-Scroll functionality for prompt suggestion chips
    initDragToScrollSuggestions() {
        const slider = document.querySelector('.ai-suggestions');
        if (!slider) return;

        let isDown = false;
        let startX;
        let scrollLeft;
        let hasMoved = false;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            hasMoved = false;
            slider.classList.add('dragging');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('dragging');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('dragging');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.8;
            if (Math.abs(walk) > 4) {
                hasMoved = true;
            }
            slider.scrollLeft = scrollLeft - walk;
        });

        // Prevent chip click trigger if dragging occurred
        slider.addEventListener('click', (e) => {
            if (hasMoved) {
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        }, true);
    }

    // Draggable Window positioning via Header Grab
    initDraggableWindow() {
        const header = document.querySelector('.ai-chat-header');
        const win = this.windowEl;
        if (!header || !win) return;

        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;

        const onStart = (e) => {
            if (e.target.closest('.ai-close-btn')) return;
            
            isDragging = true;
            header.style.cursor = 'grabbing';

            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;

            const rect = win.getBoundingClientRect();
            offsetX = clientX - rect.left;
            offsetY = clientY - rect.top;

            win.style.right = 'auto';
            win.style.bottom = 'auto';
            win.style.left = `${rect.left}px`;
            win.style.top = `${rect.top}px`;
        };

        const onMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();

            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;

            let newLeft = clientX - offsetX;
            let newTop = clientY - offsetY;

            const maxLeft = window.innerWidth - win.offsetWidth;
            const maxTop = window.innerHeight - win.offsetHeight;

            newLeft = Math.max(10, Math.min(newLeft, maxLeft - 10));
            newTop = Math.max(10, Math.min(newTop, maxTop - 10));

            win.style.left = `${newLeft}px`;
            win.style.top = `${newTop}px`;
        };

        const onEnd = () => {
            isDragging = false;
            header.style.cursor = 'grab';
        };

        header.addEventListener('mousedown', onStart);
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onEnd);

        header.addEventListener('touchstart', onStart, { passive: false });
        document.addEventListener('touchmove', onMove, { passive: false });
        document.addEventListener('touchend', onEnd);
    }
}

// Global initialization
window.EdwardAI = new EdwardAIAssistant();
document.addEventListener('DOMContentLoaded', () => {
    window.EdwardAI.init();
});
