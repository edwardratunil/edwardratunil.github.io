/**
 * EDWARD RATUNIL AI ASSISTANT - QUERY & KNOWLEDGE BASE ENGINE
 * Dynamic, context-aware AI portfolio agent with living Bloub mascot
 * integration, 16 emotional expressions, speech synthesis, and Material UI styling.
 */

const KNOWLEDGE_BASE = {
    profile: {
        name: "Edward S. Ratunil",
        title: "IT Support Specialist • Network Technician • Full Stack & IoT Developer",
        location: "Iligan City, Lanao del Norte, Philippines",
        email: "ratunil.edward@gmail.com",
        phone: "09976112845",
        github: "https://github.com/edwardratunil",
        portfolio: "https://edwardratunil.github.io/",
        website: "https://pinggamer.com",
        status: "Information Technology graduate from USTP Cagayan de Oro (Major in IoT). Actively applying for IT Support, Network Technician, and Full Stack Development roles."
    },
    
    summary: `Information Technology graduate with hands-on experience in IT support, computer hardware and software troubleshooting, network infrastructure, server administration, and systems development. Experienced in configuring and troubleshooting routers, network equipment, Linux servers, and FTTH fiber installations. Also experienced in developing and deploying web-based and IoT applications using PHP, Laravel, JavaScript, Vue.js, React.js, MySQL, and REST APIs. Completed Cisco Networking Academy training in CyberOps, Ethical Hacking, Cybersecurity, IoT, Python, and JavaScript.`,

    projects: [
        {
            id: "pinggamer",
            name: "PingGamer – Gaming Network Optimization Platform",
            tag: "Live Platform (Jan 2026 – Present)",
            img: "laravel.png",
            tech: ["Vue.js", "Electron", "WireGuard VPN", "PHP", "MySQL", "REST API", "Linux VPS"],
            summary: "Full-stack web and desktop gaming network optimization platform built to minimize multiplayer latency using automated server routing and secure tunneling.",
            highlights: [
                "Developed and deployed full-stack web and desktop platform for gaming network optimization.",
                "Built backend services using PHP and MySQL for authentication, server management, and system configuration.",
                "Developed responsive frontend interfaces using Vue.js and created desktop client with Electron.",
                "Integrated WireGuard VPN protocol for low-latency network tunneling.",
                "Configured and managed Linux-based VPS servers for application and network services."
            ],
            links: [
                { text: "pinggamer.com", icon: "open_in_new", url: "https://pinggamer.com" },
                { text: "View Details", icon: "info", action: "modal", modalId: "pinggamer" }
            ]
        },
        {
            id: "cornmist",
            name: "CORNMIST – IoT-Based Misting & Pesticide Application System",
            tag: "Capstone Project (Aug – Dec 2025)",
            img: "esp32.png",
            tech: ["ESP32", "REST API over Wi-Fi", "MAC Authentication", "API Key Validation", "Vue.js", "PHP"],
            summary: "IoT automation system using ESP32 microcontrollers for agricultural crop protection with server-side validation and hardware security.",
            highlights: [
                "Designed and developed IoT automation system using ESP32 microcontrollers.",
                "Implemented REST API over Wi-Fi for communication between IoT devices, mobile applications, and backend systems.",
                "Developed device authentication using MAC address identification and API key validation.",
                "Implemented device registration, authorization workflows, and server-side validation to prevent unauthorized access.",
                "Constructed web-based monitoring dashboard and mobile application functionality for field operations."
            ],
            links: [
                { text: "Verified Capstone", icon: "verified", type: "badge" },
                { text: "View Details", icon: "info", action: "modal", modalId: "cornmist" }
            ]
        },
        {
            id: "copad",
            name: "Government Inventory Management System – COPAD",
            tag: "Live Cloud System (Jan 2026 – Present)",
            img: "laravel+reactjs.png",
            tech: ["PHP", "MySQL", "Full Stack CRUD", "Cloud Deployment (Railway)", "HTML/CSS"],
            summary: "Web-based inventory and record management system built for municipal government administration, deployed live on Railway cloud platform.",
            highlights: [
                "Developed web-based inventory and record management system for government administration.",
                "Implemented full-stack architecture using structured database design and complete CRUD operations.",
                "Developed data management, asset tracking, and audit reporting functionality.",
                "Deployed application live on Railway cloud hosting platform.",
                "Improved organization and accessibility of municipal records through a centralized web portal."
            ],
            links: [
                { text: "Live on Railway", icon: "open_in_new", url: "https://copad-production.up.railway.app/" },
                { text: "View Details", icon: "info", action: "modal", modalId: "copad" }
            ]
        },
        {
            id: "payroll",
            name: "Python Payroll Management System",
            tag: "Desktop Software",
            img: "python.png",
            tech: ["Python", "Tkinter GUI", "SQLite / MySQL", "Reporting"],
            summary: "Desktop application built in Python for automated employee salary processing, tax deductions, and payroll reporting.",
            highlights: [
                "Built intuitive desktop graphical user interface (GUI) with robust data validation.",
                "Implemented dynamic wage, tax bracket, and deduction calculations.",
                "Engineered database persistence and printable receipt / statement generation."
            ],
            links: [
                { text: "GitHub Repository", icon: "code", url: "https://github.com/edwardratunil/Payroll_System" }
            ]
        },
        {
            id: "socmed",
            name: "Laravel + ReactJS Social Media Platform",
            tag: "Full Stack Web",
            img: "laravel+reactjs.png",
            tech: ["Laravel", "React.js", "RESTful API", "MySQL", "Authentication"],
            summary: "Full-stack modern social network platform featuring token authentication, dynamic newsfeeds, interactive comments, and profile management.",
            highlights: [
                "Developed decoupled architecture: Laravel backend REST API with reactive React.js frontend.",
                "Implemented user authentication, post creation, live comment threads, and likes.",
                "Optimized database queries with eager loading to ensure fast feed rendering."
            ],
            links: [
                { text: "GitHub Repository", icon: "code", url: "https://github.com/ibanezellafaye/SocMed-PIT" }
            ]
        },
        {
            id: "gpstracker",
            name: "Python ESP32 GPS Vehicle Tracker",
            tag: "IoT Telemetry",
            img: "esp32.png",
            tech: ["ESP32", "Python", "Neo6M GPS", "WebSockets/REST", "Mapping"],
            summary: "Real-time vehicle location mapping and telemetry system powered by ESP32 microcontrollers and Python backend.",
            highlights: [
                "Interfaced Neo6M GPS module with ESP32 UART serial communication for precision coordinates.",
                "Streamed live telemetry coordinates to Python server for map visualization.",
                "Engineered low-power transmission logic suitable for vehicle battery integration."
            ],
            links: [
                { text: "GitHub Repository", icon: "code", url: "https://github.com/edwardratunil/ESP32_Neo6mWeb" }
            ]
        }
    ],

    experience: [
        {
            role: "Network Technician / IT Support",
            company: "Self-Employed – Local Internet Service Provider (ISP)",
            period: "2020 – 2022 (2+ Years)",
            type: "Networking & IT Support",
            highlights: [
                "Installed and maintained Fiber-to-the-Home (FTTH) internet connections for residential and business/office clients.",
                "Performed fiber-optic fusion splicing, cabling, network troubleshooting, and connectivity diagnostics.",
                "Configured and maintained routers, switches, fiber network equipment, internet distribution boxes, and network infrastructure.",
                "Configured and maintained internet servers and Linux-based network infrastructure.",
                "Troubleshot customer connectivity, LAN/WAN issues, router configurations, and service-related tickets.",
                "Provided on-site and remote technical support, explaining issues and solutions clearly to users.",
                "Managed network installations, service deployments, and technical field maintenance."
            ]
        },
        {
            role: "IT Support Assistant / Accounting Office Assistant",
            company: "Municipality of Lugait (Government Internship Program - GIP)",
            period: "2013 (6 Months)",
            type: "IT Support & Administration",
            highlights: [
                "Encoded and maintained financial records and administrative documentation using Microsoft Excel.",
                "Assisted with document processing, routing, and distribution across municipal departments.",
                "Coordinated with personnel for required document signing, verification, and authorized approvals.",
                "Maintained accurate, organized records and technical office documentation.",
                "Provided computer-based office support, workstation maintenance, OS setup, printer networking, and peripheral troubleshooting."
            ]
        }
    ],

    education: [
        {
            degree: "Bachelor of Science in Information Technology (Major in Internet of Things)",
            institution: "University of Science and Technology of Southern Philippines (USTP - Cagayan de Oro)",
            year: "2022 – 2026 (Graduated)",
            description: "Specialized in IoT automation, microcontroller integration (ESP32), network protocols, web development, and systems deployment."
        },
        {
            degree: "Diploma in Electronics Technology (Major in Computer Technology)",
            institution: "Mindanao State University – Naawan (Naawan, Misamis Oriental)",
            year: "2015 – 2017",
            description: "Hands-on foundation in computer hardware assembly, electronic circuits, digital logic, and hardware troubleshooting."
        },
        {
            degree: "Computer Hardware Servicing NC II",
            institution: "Technical Education and Skills Development Authority (TESDA)",
            year: "2012 – 2013",
            description: "National Certification in PC assembly, hardware diagnostics, operating system installation, and structured network cabling."
        }
    ],

    certifications: [
        { 
            name: "Introduction to Cybersecurity", 
            org: "Cisco Networking Academy", 
            icon: "shield", 
            badgeImg: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/linkedin_thumb_I2CS__1_.png",
            credlyUrl: "https://www.credly.com/badges/284b433e-d049-40d6-bc0e-cc02733e0038" 
        },
        { 
            name: "CyberOps Associate", 
            org: "Cisco Networking Academy", 
            icon: "security", 
            badgeImg: "https://images.credly.com/images/53f37f83-04a1-4935-9b1e-21a99cc6e1b2/linkedin_thumb_CyberOpsAssoc.png",
            credlyUrl: "https://www.credly.com/badges/fd432579-e442-4424-95dc-430b33d618cf" 
        },
        { 
            name: "Ethical Hacker", 
            org: "Cisco Networking Academy", 
            icon: "lock_open", 
            badgeImg: "https://images.credly.com/images/242902b5-f527-42ad-865e-977c9e1b5b58/linkedin_thumb_image.png",
            credlyUrl: "https://www.credly.com/badges/3d5b2814-1afe-4e4e-9519-652753ab6d08" 
        },
        { 
            name: "Introduction to IoT", 
            org: "Cisco Networking Academy", 
            icon: "sensors", 
            badgeImg: "https://images.credly.com/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/linkedin_thumb_Intro2IoT.png",
            credlyUrl: "https://www.credly.com/badges/31872ab6-bfe6-4ed7-8dc4-9d8fe7e54b0c" 
        },
        { 
            name: "Python Essentials 1", 
            org: "Cisco Networking Academy", 
            icon: "terminal", 
            badgeImg: "https://images.credly.com/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/linkedin_thumb_image.png",
            credlyUrl: "https://www.credly.com/badges/a307c8a8-abf4-43d9-bee3-86b0ce6fb65f" 
        },
        { 
            name: "JavaScript Essentials 1", 
            org: "Cisco Networking Academy", 
            icon: "code", 
            badgeImg: "https://images.credly.com/images/b93bf373-3da6-4ada-9879-a0c39d6a11f8/linkedin_thumb_image.png",
            credlyUrl: "https://www.credly.com/badges/60004227-677d-40b4-9e34-c18866b095bd" 
        }
    ],

    skills: {
        itSupport: {
            title: "IT Support & Troubleshooting",
            icon: "home_repair_service",
            items: ["Hardware Troubleshooting", "Software Installation", "OS Setup (Windows/Linux)", "Printer Setup", "End-User Support", "Technical Diagnosis", "IT Equipment Maintenance"]
        },
        networking: {
            title: "Networking & Infrastructure",
            icon: "lan",
            items: ["LAN/WAN Configuration", "TCP/IP & Subnetting", "Fiber Optic Installation", "FTTH Deployment", "Fiber Splicing", "Router Configuration", "Network Troubleshooting", "Wireless Setup", "VPN / WireGuard"]
        },
        development: {
            title: "Programming & Full Stack",
            icon: "code",
            items: ["PHP", "JavaScript", "Laravel", "Vue.js", "React.js", "Node.js", "HTML5 & CSS3", "RESTful APIs", "Electron Desktop Client"]
        },
        systems: {
            title: "Systems & Administration",
            icon: "terminal",
            items: ["Ubuntu Server", "Linux Administration", "Windows Server / Desktop", "VPS Management", "Cloud Deployment (Railway)", "Microsoft 365", "Network Monitoring"]
        },
        databaseSecurity: {
            title: "Database & Security",
            icon: "shield",
            items: ["MySQL", "SQLite", "Database Design & CRUD", "Network Security", "API Authentication", "Device MAC Validation", "API Keys"]
        }
    }
};

/**
 * AI Assistant Chat Controller Class
 */
class EdwardAIChatEngine {
    constructor() {
        this.messagesContainer = null;
        this.messagesList = null;
        this.zeroState = null;
        this.inputEl = null;
        this.formEl = null;
        this.sendBtn = null;
        this.isTyping = false;
        this.perspective = 'all'; // 'all', 'dev', 'it'
        this.heroBloub = null;
        this.topbarBloub = null;
        this.currentSpeakingBtn = null;
        this.naturalVoice = null;
    }

    init() {
        this.messagesContainer = document.getElementById('chatMessagesContainer');
        this.messagesList = document.getElementById('chatMessagesList');
        this.zeroState = document.getElementById('chatZeroState');
        this.inputEl = document.getElementById('chatInput');
        this.formEl = document.getElementById('chatInputForm');
        this.sendBtn = document.getElementById('sendBtn');

        // Initialize high-fidelity natural voices
        this.initVoices();

        // Initialize living SVG Bloub avatars
        if (window.BloubAvatar) {
            const heroEl = document.getElementById('heroBloubContainer');
            if (heroEl) {
                this.heroBloub = new BloubAvatar(heroEl, { size: 220, interactive: true });
            }
            const topbarEl = document.getElementById('topbarBloubContainer');
            if (topbarEl) {
                topbarEl.innerHTML = '';
                this.topbarBloub = new BloubAvatar(topbarEl, { size: 28, isMini: true, interactive: false });
            }
        }

        if (!this.messagesList || !this.inputEl) return;

        this.bindEvents();
    }

    initVoices() {
        if (!('speechSynthesis' in window)) return;
        
        const updateVoice = () => {
            const voices = window.speechSynthesis.getVoices();
            if (!voices || !voices.length) return;

            // 1. High-fidelity Microsoft Natural / Neural Voices (Edge / Windows 11)
            let selected = voices.find(v => (v.name.includes('Natural') || v.name.includes('Neural') || v.name.includes('Online (Natural)')) && v.lang.startsWith('en'));
            
            // 2. Google US/UK English Neural Voices (Chrome)
            if (!selected) {
                selected = voices.find(v => v.name.includes('Google') && (v.name.includes('US') || v.name.includes('UK') || v.lang === 'en-US'));
            }

            // 3. Apple Enhanced / Siri Voices (Safari / macOS / iOS)
            if (!selected) {
                selected = voices.find(v => (v.name.includes('Enhanced') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('Karen') || v.name.includes('Serena')) && v.lang.startsWith('en'));
            }

            // 4. Any clear native English voice
            if (!selected) {
                selected = voices.find(v => v.lang === 'en-US' || v.lang === 'en-GB' || v.lang.startsWith('en'));
            }

            this.naturalVoice = selected || voices[0];
        };

        updateVoice();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = updateVoice;
        }
    }

    bindEvents() {
        // Form Submit
        this.formEl?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleUserSubmit();
        });

        // Enter key in Textarea (Shift+Enter for new line)
        this.inputEl?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleUserSubmit();
            }
        });

        // Textarea Auto-expand
        this.inputEl?.addEventListener('input', () => {
            this.autoExpandTextarea();
            if (this.inputEl.value.trim().length > 0) {
                this.sendBtn?.classList.add('active');
            } else {
                this.sendBtn?.classList.remove('active');
            }
        });

        // Global delegate for prompt buttons, chips, and cards
        document.addEventListener('click', (e) => {
            // Prompt Cards / Buttons / Chips
            const trigger = e.target.closest('[data-prompt]');
            if (trigger) {
                const prompt = trigger.getAttribute('data-prompt');
                if (prompt) {
                    this.stopSpeech();
                    this.sendUserPrompt(prompt);
                }
            }

            // Project Modal Triggers inside chat cards
            const modalTrigger = e.target.closest('[data-modal-project]');
            if (modalTrigger) {
                const projId = modalTrigger.getAttribute('data-modal-project');
                this.openProjectModal(projId);
            }

            // Copy Button on Message
            const copyBtn = e.target.closest('.js-copy-msg');
            if (copyBtn) {
                const msgBody = copyBtn.closest('.chat-message')?.querySelector('.message-content') 
                    || copyBtn.closest('.chat-message')?.querySelector('.message-bubble');
                if (msgBody) {
                    const textToCopy = msgBody.innerText || msgBody.textContent;
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        const icon = copyBtn.querySelector('.material-symbols-rounded');
                        const span = copyBtn.querySelector('span:not(.material-symbols-rounded)');
                        if (icon) icon.textContent = 'check';
                        if (span) span.textContent = 'Copied!';
                        setTimeout(() => {
                            if (icon) icon.textContent = 'content_copy';
                            if (span) span.textContent = 'Copy';
                        }, 2000);
                    });
                }
            }

            // Text-to-Speech Toggle (Play / Stop)
            const speakBtn = e.target.closest('.js-speak-msg');
            if (speakBtn) {
                if (speakBtn.classList.contains('btn-speaking') || (this.currentSpeakingBtn === speakBtn && window.speechSynthesis?.speaking)) {
                    this.stopSpeech();
                } else {
                    const msgContent = speakBtn.closest('.chat-message')?.querySelector('.message-content') 
                        || speakBtn.closest('.chat-message')?.querySelector('.message-bubble');
                    if (msgContent) {
                        this.speakText(msgContent, speakBtn);
                    }
                }
            }
        });

        // Clear Chat Button
        document.getElementById('clearChatBtn')?.addEventListener('click', () => {
            this.clearConversation();
        });

        // New Chat Button
        document.getElementById('newChatBtn')?.addEventListener('click', () => {
            this.clearConversation();
            if (window.innerWidth <= 768) {
                document.getElementById('chatSidebar')?.classList.remove('active');
                document.getElementById('sidebarBackdrop')?.classList.remove('active');
            }
        });

        // Suggest Prompt Button (Lightbulb)
        document.getElementById('suggestPromptBtn')?.addEventListener('click', () => {
            const suggestions = [
                "Tell me about the CORNMIST Capstone project",
                "What is PingGamer and how does WireGuard VPN work?",
                "What is Edward's experience with Fiber Optic Splicing?",
                "List all programming languages and tech stacks",
                "What degree is Edward studying at USTP?",
                "How do I reach Edward for a job interview?"
            ];
            const randomPrompt = suggestions[Math.floor(Math.random() * suggestions.length)];
            this.inputEl.value = randomPrompt;
            this.inputEl.focus();
            this.sendBtn?.classList.add('active');
            this.autoExpandTextarea();
        });
    }

    autoExpandTextarea() {
        if (!this.inputEl) return;
        this.inputEl.style.height = 'auto';
        this.inputEl.style.height = Math.min(this.inputEl.scrollHeight, 160) + 'px';
    }

    handleUserSubmit() {
        if (!this.inputEl) return;
        const text = this.inputEl.value.trim();
        if (!text || this.isTyping) return;

        this.inputEl.value = '';
        this.inputEl.style.height = 'auto';
        this.sendBtn?.classList.remove('active');

        this.sendUserPrompt(text);
    }

    sendUserPrompt(promptText) {
        if (this.isTyping) return;
        this.hideZeroState();
        this.renderUserMessage(promptText);
        this.processQuery(promptText);
    }

    hideZeroState() {
        if (this.zeroState && !this.zeroState.classList.contains('hidden')) {
            this.zeroState.classList.add('hidden');
        }
    }

    renderUserMessage(text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chat-message user-message';
        msgDiv.innerHTML = `
            <div class="message-body">
                <div class="message-bubble">${this.escapeHtml(text)}</div>
            </div>
        `;
        this.messagesList.appendChild(msgDiv);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        this.isTyping = true;
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot-message typing-message';
        typingDiv.id = 'botTypingIndicator';
        
        const avatarHtml = window.BloubAvatar ? window.BloubAvatar.getMiniSvgHtml(36) : '<span class="material-symbols-rounded">smart_toy</span>';
        typingDiv.innerHTML = `
            <div class="message-avatar">${avatarHtml}</div>
            <div class="message-body">
                <div class="message-bubble typing-bubble">
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                </div>
            </div>
        `;
        this.messagesList.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        this.isTyping = false;
        const indicator = document.getElementById('botTypingIndicator');
        if (indicator) {
            indicator.remove();
        }
    }

    scrollToBottom() {
        if (this.messagesContainer) {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }
    }

    clearConversation() {
        this.stopSpeech();
        if (this.messagesList) {
            this.messagesList.innerHTML = '';
        }
        if (this.zeroState) {
            this.zeroState.classList.remove('hidden');
        }
    }

    /**
     * Converts years (e.g. 2026, 2020) into natural conversational words ("twenty twenty-six")
     */
    convertYearToSpeech(yearStr) {
        const y = parseInt(yearStr, 10);
        if (isNaN(y) || y < 1900 || y > 2100) return yearStr;
        const century = Math.floor(y / 100);
        const remainder = y % 100;
        
        const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        let remStr = '';
        if (remainder === 0) {
            remStr = 'hundred';
        } else if (remainder < 20) {
            remStr = ones[remainder];
        } else {
            const t = Math.floor(remainder / 10);
            const o = remainder % 10;
            remStr = tens[t] + (o > 0 ? ' ' + ones[o] : '');
        }

        const centStr = century === 20 ? 'twenty' : (century === 19 ? 'nineteen' : String(century));
        return `${centStr} ${remStr}`;
    }

    /**
     * Formats raw text into fluent, human-sounding conversational English
     * with proper acronym pacing, number phrasing, and year pronunciations.
     */
    cleanSpeechText(elementOrText) {
        let rawText = '';
        if (typeof elementOrText === 'string') {
            rawText = elementOrText;
        } else if (elementOrText instanceof HTMLElement) {
            const clone = elementOrText.cloneNode(true);
            clone.querySelectorAll('.followup-chips-container, .chat-card-btn, .contact-arrow, .contact-tile-icon, i, svg, button, .material-symbols-rounded').forEach(el => el.remove());
            rawText = clone.innerText || clone.textContent || '';
        }

        let text = rawText
            .replace(/<[^>]*>/g, ' ')
            // Strip all Unicode emojis and pictographs
            .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}]/gu, '')
            // Year ranges: "2020 – 2022" -> "2020 to 2022"
            .replace(/(\b(19|20)\d{2}\b)\s*[-–—]\s*(\b(19|20)\d{2}\b)/g, (match, y1, c1, y2) => {
                return `${this.convertYearToSpeech(y1)} to ${this.convertYearToSpeech(y2)}`;
            })
            // Standalone 4-digit years: 2026 -> twenty twenty-six
            .replace(/\b(19|20)\d{2}\b/g, (match) => {
                return this.convertYearToSpeech(match);
            })
            // Quantities: "2+ years" -> "over two years", "6+ projects" -> "over six projects"
            .replace(/2\+\s*years?/gi, 'over two years')
            .replace(/6\+\s*projects?/gi, 'over six projects')
            .replace(/(\d+)\+/g, 'over $1')
            // Roman Numerals & Certs: "NC II" -> "N C two"
            .replace(/NC\s*II\b/gi, 'N-C two')
            .replace(/NC\s*I\b/gi, 'N-C one')
            // Technical Acronyms for smooth natural pronunciation
            .replace(/\bESP32\b/gi, 'E S P thirty-two')
            .replace(/\bBS\s*IT\b/gi, 'Bachelor of Science in I-T')
            .replace(/\bIoT\b/g, 'I-O-T')
            .replace(/\bFTTH\b/g, 'F-T-T-H')
            .replace(/\bVue\.js\b/gi, 'Vue J S')
            .replace(/\bReact\.js\b/gi, 'React J S')
            .replace(/\bPHP\b/g, 'P-H-P')
            .replace(/\bRESTful\b/gi, 'REST-ful')
            .replace(/\bREST\s*API\b/gi, 'REST A-P-I')
            .replace(/\bAPI\b/g, 'A-P-I')
            .replace(/\bWireGuard\b/gi, 'Wire Guard')
            .replace(/\bUSTP\b/g, 'U-S-T-P')
            .replace(/\bTESDA\b/gi, 'Tesda')
            .replace(/\bOTDR\b/g, 'O-T-D-R')
            .replace(/\bONT\b/g, 'O-N-T')
            .replace(/\bOLT\b/g, 'O-L-T')
            .replace(/\bISP\b/g, 'I-S-P')
            .replace(/\bVPN\b/g, 'V-P-N')
            .replace(/\bMAC\b/g, 'Mac')
            // Clean phone numbers: "09976112845" -> natural cadence
            .replace(/\b09976112845\b/g, 'zero nine nine seven, six one one, two eight four five')
            // Strip bullets, asterisks, brackets, formatting symbols
            .replace(/[•*#_~`[\]()|]/g, ' ')
            // Normalize whitespace and punctuation spacing
            .replace(/\s+/g, ' ')
            .replace(/\s+([.,!?;:])/g, '$1')
            .trim();

        return text;
    }

    speakText(content, btn = null) {
        if (!('speechSynthesis' in window)) return;
        this.stopSpeech();

        const cleanText = this.cleanSpeechText(content);
        if (!cleanText) return;

        const utterance = new SpeechSynthesisUtterance(cleanText);
        if (this.naturalVoice) {
            utterance.voice = this.naturalVoice;
        }
        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        this.currentSpeakingBtn = btn;
        if (btn) {
            btn.classList.add('btn-speaking');
            btn.innerHTML = `<span class="material-symbols-rounded">stop_circle</span> <span>Stop</span>`;
        }

        this.heroBloub?.setExpression('excited');
        this.topbarBloub?.setState('speaking');

        utterance.onend = () => {
            this.resetSpeechBtn(btn);
            this.heroBloub?.setExpression('attentive');
            this.topbarBloub?.setState('idle');
            this.currentSpeakingBtn = null;
        };

        utterance.onerror = () => {
            this.resetSpeechBtn(btn);
            this.heroBloub?.setExpression('neutral');
            this.topbarBloub?.setState('idle');
            this.currentSpeakingBtn = null;
        };

        window.speechSynthesis.speak(utterance);
    }

    stopSpeech() {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
        if (this.currentSpeakingBtn) {
            this.resetSpeechBtn(this.currentSpeakingBtn);
            this.currentSpeakingBtn = null;
        }
        document.querySelectorAll('.js-speak-msg').forEach(b => {
            this.resetSpeechBtn(b);
        });
        this.heroBloub?.setExpression('neutral');
        this.topbarBloub?.setState('idle');
    }

    resetSpeechBtn(btn) {
        if (btn) {
            btn.classList.remove('btn-speaking');
            btn.innerHTML = `<span class="material-symbols-rounded">volume_up</span> <span>Listen</span>`;
        }
    }

    escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    /**
     * Query Engine: Analyzes user prompt and generates rich structured HTML responses
     */
    async processQuery(promptText) {
        this.stopSpeech();
        // Look curious and attentive during thinking phase
        this.heroBloub?.setExpression('curious');
        this.topbarBloub?.setState('thinking');
        this.showTypingIndicator();

        // Simulated thinking delay (350ms - 600ms for natural responsiveness)
        setTimeout(() => {
            this.hideTypingIndicator();
            const responseData = this.generateResponse(promptText);
            this.renderBotMessage(responseData);

            // Apply specific emotional expression according to response context
            const targetExpr = responseData.expression || 'happy';
            this.heroBloub?.setExpression(targetExpr);
            this.heroBloub?.jiggle();
            this.topbarBloub?.setState('speaking');

            // Settle into attentive expression after reading time
            setTimeout(() => {
                if (this.heroBloub && this.heroBloub.expression === targetExpr) {
                    this.heroBloub.setExpression('attentive');
                }
                this.topbarBloub?.setState('idle');
            }, 3500);
        }, 400 + Math.random() * 200);
    }

    renderBotMessage(data) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chat-message bot-message';

        let followupsHtml = '';
        if (data.followups && data.followups.length > 0) {
            followupsHtml = `
                <div class="followup-chips-container">
                    ${data.followups.map(chip => `
                        <button class="followup-chip" data-prompt="${chip.prompt}">
                            <span class="material-symbols-rounded">${chip.icon || 'arrow_forward'}</span>
                            <span>${chip.label}</span>
                        </button>
                    `).join('')}
                </div>
            `;
        }

        const avatarHtml = window.BloubAvatar ? window.BloubAvatar.getMiniSvgHtml(36) : '<span class="material-symbols-rounded">smart_toy</span>';
        msgDiv.innerHTML = `
            <div class="message-avatar">${avatarHtml}</div>
            <div class="message-body">
                <div class="message-bubble">
                    <div class="message-content">
                        ${data.html}
                    </div>
                    ${followupsHtml}
                </div>
                <div class="message-actions">
                    <button class="msg-action-btn js-copy-msg" title="Copy response">
                        <span class="material-symbols-rounded">content_copy</span>
                        <span>Copy</span>
                    </button>
                    <button class="msg-action-btn js-speak-msg" title="Read response aloud">
                        <span class="material-symbols-rounded">volume_up</span>
                        <span>Listen</span>
                    </button>
                </div>
            </div>
        `;

        this.messagesList.appendChild(msgDiv);
        this.scrollToBottom();
    }

    /**
     * Knowledge Routing Logic with Response Expressions
     */
    generateResponse(rawQuery) {
        const q = rawQuery.toLowerCase();

        // 1. CORNMIST / Capstone Project -> PROUD
        if (q.includes('cornmist') || q.includes('capstone') || q.includes('misting') || q.includes('pesticide') || q.includes('crop') || q.includes('agricultural')) {
            const proj = KNOWLEDGE_BASE.projects[0];
            return {
                expression: 'proud',
                html: `
                    <p><strong>${proj.name}</strong> is Edward's flagship IoT Capstone Project at USTP Cagayan de Oro.</p>
                    <p>${proj.summary}</p>
                    
                    ${this.renderProjectCardHtml(proj)}

                    <p><strong>Key Engineering Highlights:</strong></p>
                    <ul>
                        ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                `,
                followups: [
                    { label: "How about PingGamer VPN?", prompt: "Tell me about PingGamer", icon: "speed" },
                    { label: "What IoT skills does Edward have?", prompt: "What are his IoT skills?", icon: "sensors" },
                    { label: "What is his USTP degree?", prompt: "Tell me about his education and USTP", icon: "school" }
                ]
            };
        }

        // 2. PingGamer Project -> EXCITED
        if (q.includes('pinggamer') || q.includes('vpn') || q.includes('wireguard') || q.includes('gaming') || q.includes('tunnel') || q.includes('latency')) {
            const proj = KNOWLEDGE_BASE.projects[1];
            return {
                expression: 'excited',
                html: `
                    <p><strong>${proj.name}</strong> is a high-performance network optimization and gaming latency reduction platform built by Edward.</p>
                    <p>${proj.summary}</p>

                    ${this.renderProjectCardHtml(proj)}

                    <p><strong>Technical Architecture:</strong></p>
                    <ul>
                        ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                `,
                followups: [
                    { label: "Tell me about CORNMIST Capstone", prompt: "Tell me about CORNMIST", icon: "sensors" },
                    { label: "Show all projects", prompt: "Show all featured projects", icon: "folder_open" },
                    { label: "FTTH & Network Experience", prompt: "What is his FTTH and fiber experience?", icon: "lan" }
                ]
            };
        }

        // 3. Work Experience / FTTH / Fiber Splicing / ISP / Lugait -> ATTENTIVE
        if (q.includes('experience') || q.includes('fiber') || q.includes('ftth') || q.includes('splicing') || q.includes('isp') || q.includes('lugait') || q.includes('technician') || q.includes('history') || q.includes('career')) {
            return {
                expression: 'attentive',
                html: `
                    <p><strong>Edward Ratunil's Professional Career & Field Experience:</strong></p>
                    <p>Edward brings extensive real-world experience across ISP fiber network deployments and office IT administration:</p>
                    
                    <div class="chat-timeline">
                        ${KNOWLEDGE_BASE.experience.map(exp => `
                            <div class="chat-timeline-item">
                                <div class="chat-timeline-title">${exp.role}</div>
                                <div class="chat-timeline-meta">${exp.company} • <strong>${exp.period}</strong></div>
                                <ul>
                                    ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                `,
                followups: [
                    { label: "View Technical Skills Matrix", prompt: "Show me Edward's technical skills matrix", icon: "stacks" },
                    { label: "Ask about CORNMIST IoT Capstone", prompt: "Tell me about CORNMIST Capstone", icon: "sensors" },
                    { label: "How do I hire Edward?", prompt: "How can I contact and hire Edward?", icon: "mail" }
                ]
            };
        }

        // 4. All Projects / Portfolio List -> HAPPY
        if (q.includes('all project') || q.includes('projects') || q.includes('portfolio') || q.includes('built') || q.includes('systems') || q.includes('repos')) {
            return {
                expression: 'happy',
                html: `
                    <p><strong>Featured Projects & Engineering Systems by Edward:</strong></p>
                    <p>Here are Edward's 6 verified projects spanning IoT hardware, gaming VPN networks, full-stack web portals, and desktop applications:</p>
                    
                    ${KNOWLEDGE_BASE.projects.map(p => this.renderProjectCardHtml(p)).join('')}
                `,
                followups: [
                    { label: "Deep dive into CORNMIST Capstone", prompt: "Tell me more about CORNMIST Capstone", icon: "sensors" },
                    { label: "Deep dive into PingGamer VPN", prompt: "Tell me more about PingGamer", icon: "speed" },
                    { label: "Contact Edward for Collaboration", prompt: "How can I contact Edward?", icon: "mail" }
                ]
            };
        }

        // 5. Skills & Tech Stack Matrix -> HAPPY
        if (q.includes('skill') || q.includes('stack') || q.includes('tech') || q.includes('languages') || q.includes('tools') || q.includes('laravel') || q.includes('vue') || q.includes('react') || q.includes('php') || q.includes('python') || q.includes('hardware')) {
            const s = KNOWLEDGE_BASE.skills;
            return {
                expression: 'happy',
                html: `
                    <p><strong>Edward Ratunil's Comprehensive Skills & Competency Matrix:</strong></p>
                    <p>A balanced breakdown bridging IT infrastructure, physical fiber networking, full stack web development, and embedded IoT:</p>

                    <div class="chat-skills-grid">
                        <div class="chat-skill-box">
                            <div class="chat-skill-box-title"><span class="material-symbols-rounded">${s.itSupport.icon}</span> ${s.itSupport.title}</div>
                            <div class="chat-skill-tags">
                                ${s.itSupport.items.map(i => `<span class="chat-skill-tag">${i}</span>`).join('')}
                            </div>
                        </div>

                        <div class="chat-skill-box">
                            <div class="chat-skill-box-title"><span class="material-symbols-rounded">${s.networking.icon}</span> ${s.networking.title}</div>
                            <div class="chat-skill-tags">
                                ${s.networking.items.map(i => `<span class="chat-skill-tag">${i}</span>`).join('')}
                            </div>
                        </div>

                        <div class="chat-skill-box">
                            <div class="chat-skill-box-title"><span class="material-symbols-rounded">${s.development.icon}</span> ${s.development.title}</div>
                            <div class="chat-skill-tags">
                                ${s.development.items.map(i => `<span class="chat-skill-tag">${i}</span>`).join('')}
                            </div>
                        </div>

                        <div class="chat-skill-box">
                            <div class="chat-skill-box-title"><span class="material-symbols-rounded">${s.systems.icon}</span> ${s.systems.title}</div>
                            <div class="chat-skill-tags">
                                ${s.systems.items.map(i => `<span class="chat-skill-tag">${i}</span>`).join('')}
                            </div>
                        </div>

                        <div class="chat-skill-box" style="grid-column: 1 / -1;">
                            <div class="chat-skill-box-title"><span class="material-symbols-rounded">${s.databaseSecurity.icon}</span> ${s.databaseSecurity.title}</div>
                            <div class="chat-skill-tags">
                                ${s.databaseSecurity.items.map(i => `<span class="chat-skill-tag">${i}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `,
                followups: [
                    { label: "View Cisco IT Certifications", prompt: "What Cisco certifications does Edward have?", icon: "security" },
                    { label: "View Work & FTTH Experience", prompt: "What is his work experience?", icon: "work" },
                    { label: "Download Complete Resume", prompt: "Where can I get Edward's resume?", icon: "description" }
                ]
            };
        }

        // 6. Education, TESDA & Cisco Certifications -> PROUD
        if (q.includes('education') || q.includes('degree') || q.includes('ustp') || q.includes('tesda') || q.includes('cert') || q.includes('cisco') || q.includes('cyber') || q.includes('college') || q.includes('school') || q.includes('naawan') || q.includes('graduate')) {
            return {
                expression: 'proud',
                html: `
                    <p><strong>Academic Degrees & Cisco Networking Academy Certifications:</strong></p>
                    
                    <div class="chat-timeline">
                        ${KNOWLEDGE_BASE.education.map(edu => `
                            <div class="chat-timeline-item">
                                <div class="chat-timeline-title">${edu.degree}</div>
                                <div class="chat-timeline-meta">${edu.institution} • <strong>${edu.year}</strong></div>
                                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">${edu.description}</p>
                            </div>
                        `).join('')}
                    </div>

                    <p style="margin-top: 1rem;"><strong>Verified Cisco Networking Academy Digital Badges (Credly):</strong></p>
                    <div class="credly-badges-grid">
                        ${KNOWLEDGE_BASE.certifications.map(c => `
                            <div class="credly-badge-card">
                                <img src="${c.badgeImg}" alt="${c.name} Badge" class="credly-badge-img" loading="lazy">
                                <div class="credly-badge-info">
                                    <div class="credly-badge-title">${c.name}</div>
                                    <div class="credly-badge-org">${c.org} • Verified Badge</div>
                                    <a href="${c.credlyUrl}" target="_blank" rel="noopener" class="chat-card-btn" style="padding: 0.25rem 0.55rem; font-size: 0.72rem; width: fit-content; text-decoration: none;">
                                        <span class="material-symbols-rounded" style="font-size: 0.85rem;">verified</span>
                                        <span>Verify on Credly</span>
                                        <span class="material-symbols-rounded" style="font-size: 0.75rem;">open_in_new</span>
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `,
                followups: [
                    { label: "Tell me about his IoT Capstone", prompt: "Tell me about CORNMIST Capstone", icon: "sensors" },
                    { label: "Check FTTH work experience", prompt: "What is his work experience?", icon: "work" },
                    { label: "Contact & Hire Edward", prompt: "How do I contact Edward?", icon: "mail" }
                ]
            };
        }

        // 7. Contact / Hire / Email / Phone / Location / Resume -> SHY
        if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('interview') || q.includes('reach') || q.includes('location') || q.includes('resume') || q.includes('cv') || q.includes('github')) {
            const p = KNOWLEDGE_BASE.profile;
            return {
                expression: 'shy',
                html: `
                    <p><strong>Get in Touch with Edward Ratunil:</strong></p>
                    <p>Edward is open for full-time roles, contract work, and technical collaborations in <strong>Full Stack Web Development</strong>, <strong>IoT Engineering</strong>, and <strong>IT / Network Support</strong>.</p>

                    <div class="contact-methods-grid" style="margin: 0.85rem 0;">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${p.email}&su=Job%20Opportunity%20-%20Edward%20Ratunil" target="_blank" rel="noopener" class="contact-tile">
                            <div class="contact-tile-icon mail"><span class="material-symbols-rounded">mail</span></div>
                            <div class="contact-tile-info">
                                <span class="contact-tile-label">Direct Email</span>
                                <span class="contact-tile-value">${p.email}</span>
                            </div>
                            <span class="material-symbols-rounded contact-arrow">open_in_new</span>
                        </a>

                        <a href="tel:${p.phone}" class="contact-tile">
                            <div class="contact-tile-icon phone"><span class="material-symbols-rounded">call</span></div>
                            <div class="contact-tile-info">
                                <span class="contact-tile-label">Phone / Mobile</span>
                                <span class="contact-tile-value">${p.phone}</span>
                            </div>
                            <span class="material-symbols-rounded contact-arrow">call_made</span>
                        </a>

                        <a href="${p.github}" target="_blank" rel="noopener" class="contact-tile">
                            <div class="contact-tile-icon github"><span class="material-symbols-rounded">code</span></div>
                            <div class="contact-tile-info">
                                <span class="contact-tile-label">GitHub Profile</span>
                                <span class="contact-tile-value">github.com/edwardratunil</span>
                            </div>
                            <span class="material-symbols-rounded contact-arrow">open_in_new</span>
                        </a>

                        <div class="contact-tile location-tile">
                            <div class="contact-tile-icon location"><span class="material-symbols-rounded">location_on</span></div>
                            <div class="contact-tile-info">
                                <span class="contact-tile-label">Current Location</span>
                                <span class="contact-tile-value">${p.location}</span>
                            </div>
                        </div>
                    </div>
                `,
                followups: [
                    { label: "View all featured projects", prompt: "Show me all projects", icon: "folder_open" },
                    { label: "Explore technical skills", prompt: "What are his technical skills?", icon: "stacks" },
                    { label: "Read work experience", prompt: "What is his work experience?", icon: "work" }
                ]
            };
        }

        // 8. Mascot Inquiries ("Who are you", "What is Bloub", "Cloud", "Mascot", "Are you AI")
        if (q.includes('who are you') || q.includes('what are you') || q.includes('bloub') || q.includes('cloud') || q.includes('mascot') || q.includes('avatar') || q.includes('your name')) {
            return {
                expression: 'excited',
                html: `
                    <p><strong>I'm Bloub!</strong> I'm Edward's living, morphing cloud AI mascot and interactive portfolio assistant.</p>
                    <p>I'm built with dynamic SVG path morphing, real-time eye tracking, and <strong>16 emotional expressions</strong>. My mission is to help recruiters, engineers, and visitors learn everything about Edward Ratunil's background, capstone projects, and technical skills!</p>
                `,
                followups: [
                    { label: "Tell me about Edward's Capstone", prompt: "Tell me about CORNMIST Capstone", icon: "sensors" },
                    { label: "What skills does Edward have?", prompt: "What are his technical skills?", icon: "stacks" },
                    { label: "How do I contact Edward?", prompt: "How do I contact Edward?", icon: "mail" }
                ]
            };
        }

        // 9. Small Talk / Chit-Chat ("How are you", "Joke", "Thanks", "Good morning", "Cool")
        if (q.includes('how are you') || q.includes('how r u') || q.includes('joke') || q.includes('thank') || q.includes('awesome') || q.includes('cool') || q.includes('nice') || q.includes('good morning') || q.includes('good evening')) {
            if (q.includes('joke')) {
                return {
                    expression: 'laughing',
                    html: `
                        <p><strong>Here's a developer joke for you:</strong></p>
                        <p><em>Why did the IoT microcontroller go to therapy?</em></p>
                        <p><strong>Because it had too many unresolved sensor issues and couldn't handle the baud rate!</strong></p>
                        <p>Speaking of IoT, Edward built a full automated pesticide misting system for his BS IT capstone!</p>
                    `,
                    followups: [
                        { label: "Tell me about CORNMIST Capstone", prompt: "Tell me about CORNMIST Capstone", icon: "sensors" },
                        { label: "How about PingGamer VPN?", prompt: "Tell me about PingGamer", icon: "speed" }
                    ]
                };
            }
            return {
                expression: 'happy',
                html: `
                    <p>I'm feeling great and ready to help! What would you like to explore about Edward's work today?</p>
                `,
                followups: [
                    { label: "Show featured projects", prompt: "Show all projects", icon: "folder_open" },
                    { label: "View work experience", prompt: "What is his work experience?", icon: "work" },
                    { label: "View technical skills", prompt: "What are his skills?", icon: "stacks" }
                ]
            };
        }

        // 10. Questions About Other People ("Who is Elon Musk", "Who is John", "Do you know Mark")
        if ((q.includes('who is') || q.includes("who's") || q.includes('do you know') || q.includes('tell me about')) && 
            !q.includes('edward') && !q.includes('ratunil') && !q.includes('you') && !q.includes('yourself') && !q.includes('cornmist') && !q.includes('pinggamer') && !q.includes('capstone')) {
            // Extract the queried name or subject if possible
            const cleanQuery = rawQuery.replace(/who is|who's|do you know|tell me about/gi, '').replace(/[?.,!]/g, '').trim();
            const subject = cleanQuery.length > 0 ? `<strong>"${this.escapeHtml(cleanQuery)}"</strong>` : 'that person';

            return {
                expression: 'suspicious',
                html: `
                    <p><strong>I only have career records for Edward S. Ratunil!</strong></p>
                    <p>I don't have information on ${subject}. As a specialized portfolio AI assistant, my knowledge base is dedicated entirely to Edward's engineering background, projects, and work experience.</p>
                    <p>Would you like to explore Edward's profile instead?</p>
                `,
                followups: [
                    { label: "Who is Edward Ratunil?", prompt: "Who is Edward Ratunil?", icon: "person" },
                    { label: "View CORNMIST Capstone", prompt: "Tell me about CORNMIST Capstone", icon: "sensors" },
                    { label: "View PingGamer VPN", prompt: "Tell me about PingGamer", icon: "speed" },
                    { label: "View Work Experience", prompt: "What is his work experience?", icon: "work" }
                ]
            };
        }

        // 11. General About Edward / Bio Summary ("Who is Edward", "Tell me about yourself", "Hi", "Hello")
        if (q.includes('about edward') || q.includes('who is edward') || (q.includes('edward') && (q.includes('who') || q.includes('about') || q.includes('bio') || q.includes('summary') || q.includes('background'))) || q.includes('introduce') || q.includes('hello') || q.includes('hi') || q.includes('hey')) {
            const p = KNOWLEDGE_BASE.profile;
            return {
                expression: 'happy',
                html: `
                    <p>Hello! I'm <strong>Edward AI</strong>, the interactive assistant for <strong>${p.name}</strong>.</p>
                    <p>${KNOWLEDGE_BASE.summary}</p>
                    <p><strong>Quick Summary:</strong></p>
                    <ul>
                        <li><strong>Education:</strong> BS IT Graduate (Major in IoT) at USTP Cagayan de Oro (2026)</li>
                        <li><strong>Field Experience:</strong> 2+ Years FTTH Fiber Optic Splicing & ISP Network Technician</li>
                        <li><strong>Key Projects:</strong> CORNMIST (IoT Capstone), PingGamer (Gaming VPN), & COPAD (Government Inventory)</li>
                        <li><strong>Primary Tech:</strong> Vue.js, React.js, PHP/Laravel, Python, ESP32 Microcontrollers, MySQL, WireGuard</li>
                        <li><strong>Certifications:</strong> 6x Cisco Networking Academy (CyberOps, Ethical Hacker, Cybersecurity, IoT, Python, JavaScript)</li>
                        <li><strong>Status:</strong> ${p.status}</li>
                    </ul>
                `,
                followups: [
                    { label: "Explore CORNMIST Capstone", prompt: "Tell me about CORNMIST Capstone", icon: "sensors" },
                    { label: "Learn about PingGamer VPN", prompt: "Tell me about PingGamer", icon: "speed" },
                    { label: "View Work Experience", prompt: "What is his work experience?", icon: "work" },
                    { label: "Contact Edward", prompt: "How do I contact Edward?", icon: "mail" }
                ]
            };
        }

        // 12. General Technical / Programming Questions (e.g. "What is Python?", "What is IoT?", "How does WireGuard work?")
        if (q.includes('what is python') || q.includes('what is react') || q.includes('what is vue') || q.includes('what is laravel') || q.includes('what is iot') || q.includes('what is esp32') || q.includes('what is wireguard') || q.includes('what is fiber') || q.includes('what is ftth')) {
            let topicName = 'this technology';
            let edwardContext = 'Edward utilizes this extensively across his engineering projects and field deployments.';
            
            if (q.includes('iot') || q.includes('esp32')) {
                topicName = 'Internet of Things (IoT) & Embedded Hardware';
                edwardContext = 'Edward is majoring in IoT at USTP and engineered the automated sensor-driven <strong>CORNMIST Capstone</strong> using ESP32 microcontrollers!';
            } else if (q.includes('wireguard') || q.includes('vpn')) {
                topicName = 'WireGuard & Network Tunneling';
                edwardContext = 'Edward built <strong>PingGamer</strong>, a custom WireGuard VPN routing platform that slashes packet latency for online gamers!';
            } else if (q.includes('fiber') || q.includes('ftth')) {
                topicName = 'Fiber to the Home (FTTH) & Optical Networks';
                edwardContext = 'Edward has over 2 years of on-the-ground experience splicing fiber optics, troubleshooting OTDRs, and configuring OLT/ONT networks for Converge ICT & Lugait Cable TV!';
            } else if (q.includes('laravel') || q.includes('react') || q.includes('vue') || q.includes('php') || q.includes('python')) {
                topicName = 'Full-Stack Web Development';
                edwardContext = 'Edward uses Vue.js, React.js, PHP/Laravel, and Python to architect robust cloud dashboards and modern responsive interfaces!';
            }

            return {
                expression: 'attentive',
                html: `
                    <p><strong>${topicName}:</strong></p>
                    <p>${edwardContext}</p>
                    <p>Would you like to see how Edward implemented this in his live projects?</p>
                `,
                followups: [
                    { label: "View CORNMIST IoT Project", prompt: "Tell me about CORNMIST Capstone", icon: "sensors" },
                    { label: "View PingGamer VPN Project", prompt: "Tell me about PingGamer", icon: "speed" },
                    { label: "Check Technical Skills Matrix", prompt: "What are his technical skills?", icon: "stacks" }
                ]
            };
        }

        // 13. Completely Unrelated / Off-Topic Queries -> CONFUSED (?)
        return {
            expression: 'confused',
            html: `
                <p><strong>Hmm, that's outside my portfolio knowledge base!</strong></p>
                <p>I am specialized exclusively as <strong>Edward Ratunil's Career & Engineering Assistant</strong>. While I can't answer general trivia, cook recipes, or explain topics unrelated to Edward, I can give you deep insights into Edward's:</p>
                <ul>
                    <li><strong>IoT Capstone Project (CORNMIST)</strong></li>
                    <li><strong>Gaming VPN Platform (PingGamer)</strong></li>
                    <li><strong>FTTH Fiber Optics & Network Engineering Experience</strong></li>
                    <li><strong>Full Stack Web Development (Vue, React, PHP/Laravel, Python)</strong></li>
                    <li><strong>Education at USTP & TESDA NC II Certification</strong></li>
                </ul>
            `,
            followups: [
                { label: "CORNMIST IoT Capstone", prompt: "Tell me about CORNMIST Capstone", icon: "sensors" },
                { label: "PingGamer Gaming VPN", prompt: "Tell me about PingGamer", icon: "speed" },
                { label: "FTTH & Fiber Experience", prompt: "What is his work experience?", icon: "lan" },
                { label: "Technical Skills Matrix", prompt: "What are his technical skills?", icon: "stacks" },
                { label: "Contact & Hire Edward", prompt: "How do I contact Edward?", icon: "mail" }
            ]
        };
    }

    renderProjectCardHtml(proj) {
        let linksHtml = '';
        if (proj.links) {
            linksHtml = proj.links.map(l => {
                if (l.url) {
                    return `
                        <a href="${l.url}" target="_blank" rel="noopener" class="chat-card-btn">
                            <span class="material-symbols-rounded">${l.icon}</span> <span>${l.text}</span>
                        </a>
                    `;
                } else if (l.action === 'modal') {
                    return `
                        <button class="chat-card-btn" data-modal-project="${proj.id}">
                            <span class="material-symbols-rounded">${l.icon}</span> <span>${l.text}</span>
                        </button>
                    `;
                } else {
                    return `
                        <span class="chat-card-btn" style="pointer-events: none; opacity: 0.85;">
                            <span class="material-symbols-rounded">${l.icon}</span> <span>${l.text}</span>
                        </span>
                    `;
                }
            }).join('');
        }

        return `
            <div class="chat-project-card">
                <div class="chat-project-header">
                    <img src="${proj.img}" alt="${proj.name}" class="chat-project-img" onerror="this.src='https://via.placeholder.com/600x200/1e293b/38bdf8?text=${encodeURIComponent(proj.name)}'">
                    <span class="chat-project-tag">${proj.tag}</span>
                </div>
                <div class="chat-project-body">
                    <h3 class="chat-project-title">${proj.name}</h3>
                    <p class="chat-project-desc">${proj.summary}</p>
                    <div class="chat-tech-pills">
                        ${proj.tech.map(t => `<span class="chat-tech-pill">${t}</span>`).join('')}
                    </div>
                    <div class="chat-project-links">
                        ${linksHtml}
                    </div>
                </div>
            </div>
        `;
    }

    openProjectModal(projId) {
        const proj = KNOWLEDGE_BASE.projects.find(p => p.id === projId);
        if (!proj) return;

        const modal = document.getElementById('projectModal');
        const titleEl = document.getElementById('projectModalTitle');
        const tagEl = document.getElementById('projectModalTag');
        const bodyEl = document.getElementById('projectModalBody');
        const footerEl = document.getElementById('projectModalFooter');

        if (titleEl) titleEl.textContent = proj.name;
        if (tagEl) tagEl.textContent = proj.tag;

        let liveBtnHtml = '';
        const liveLink = proj.links.find(l => l.url);
        if (liveLink) {
            liveBtnHtml = `<a href="${liveLink.url}" target="_blank" rel="noopener" class="modal-btn primary"><span class="material-symbols-rounded">${liveLink.icon}</span> Visit Project</a>`;
        }

        if (bodyEl) {
            bodyEl.innerHTML = `
                <div style="margin-bottom: 1rem; border-radius: var(--radius-md); overflow: hidden; max-height: 240px; background: #000;">
                    <img src="${proj.img}" alt="${proj.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/600x240/1e293b/38bdf8?text=${encodeURIComponent(proj.name)}'">
                </div>
                <p style="font-size: 0.95rem; line-height: 1.55; margin-bottom: 1rem;">${proj.summary}</p>
                <h4 style="font-size: 0.85rem; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.5rem;">Key Engineering Features:</h4>
                <ul style="margin-left: 1.25rem; font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">
                    ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
                <h4 style="font-size: 0.85rem; color: var(--accent-blue); text-transform: uppercase; margin-bottom: 0.5rem;">Tech Stack:</h4>
                <div class="chat-tech-pills">
                    ${proj.tech.map(t => `<span class="chat-tech-pill" style="font-size: 0.78rem; padding: 0.3rem 0.6rem;">${t}</span>`).join('')}
                </div>
            `;
        }

        if (footerEl) {
            footerEl.innerHTML = `
                <button class="modal-btn secondary" id="projectModalCloseBtnInternal">Close</button>
                ${liveBtnHtml}
            `;
            document.getElementById('projectModalCloseBtnInternal')?.addEventListener('click', () => {
                modal?.classList.remove('active');
            });
        }

        modal?.classList.add('active');
    }
}

// Global initialization
window.EdwardChat = new EdwardAIChatEngine();
document.addEventListener('DOMContentLoaded', () => {
    window.EdwardChat.init();
});
