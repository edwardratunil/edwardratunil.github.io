/**
 * EDWARD RATUNIL PORTFOLIO - CORE APPLICATION CONTROLLER
 * Manages UI interactions, sidebar state, theme switching, modals,
 * persona switching, and resume export.
 */

document.addEventListener('DOMContentLoaded', () => {
    initSidebarControls();
    initThemeManager();
    initPersonaSwitcher();
    initModals();
    initPromptChipsDragger();
    initResumeExporter();
});

/* --------------------------------------------------------------------------
   SIDEBAR & DRAWER CONTROLS
   -------------------------------------------------------------------------- */
function initSidebarControls() {
    const sidebar = document.getElementById('chatSidebar');
    const toggleBtn = document.getElementById('sidebarToggleBtn');
    const backdrop = document.getElementById('sidebarBackdrop');

    if (!sidebar || !toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('active');
            backdrop?.classList.toggle('active');
        } else {
            sidebar.classList.toggle('collapsed');
        }
    });

    backdrop?.addEventListener('click', () => {
        sidebar.classList.remove('active');
        backdrop.classList.remove('active');
    });

    // Close mobile drawer when clicking topic buttons on small screens
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                backdrop?.classList.remove('active');
            }
        });
    });
}

/* --------------------------------------------------------------------------
   THEME MANAGER (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initThemeManager() {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (!themeBtn) return;

    const savedTheme = localStorage.getItem('edward_ai_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('edward_ai_theme', nextTheme);
        updateThemeIcon(nextTheme);
    });
}

function updateThemeIcon(theme) {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (!themeBtn) return;
    if (theme === 'light') {
        themeBtn.innerHTML = '<span class="material-symbols-rounded">dark_mode</span>';
        themeBtn.setAttribute('title', 'Switch to Dark Mode');
    } else {
        themeBtn.innerHTML = '<span class="material-symbols-rounded">light_mode</span>';
        themeBtn.setAttribute('title', 'Switch to Light Mode');
    }
}

/* --------------------------------------------------------------------------
   PERSONA / PERSPECTIVE SWITCHER
   -------------------------------------------------------------------------- */
function initPersonaSwitcher() {
    const tabs = document.querySelectorAll('.perspective-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const mode = tab.getAttribute('data-perspective');
            if (window.EdwardChat) {
                window.EdwardChat.perspective = mode;

                if (mode === 'dev') {
                    window.EdwardChat.sendUserPrompt("Focus on Edward's Full Stack Web Development and IoT Engineering background.");
                } else if (mode === 'it') {
                    window.EdwardChat.sendUserPrompt("Focus on Edward's IT Support, FTTH Fiber Optic Splicing, and Network Infrastructure experience.");
                } else {
                    window.EdwardChat.sendUserPrompt("Give me a comprehensive overview of all of Edward's capabilities across software, IoT, and IT support.");
                }
            }

            if (window.innerWidth <= 768) {
                document.getElementById('chatSidebar')?.classList.remove('active');
                document.getElementById('sidebarBackdrop')?.classList.remove('active');
            }
        });
    });
}

/* --------------------------------------------------------------------------
   MODALS (Contact & Project Details)
   -------------------------------------------------------------------------- */
function initModals() {
    // Contact Modal
    const contactModal = document.getElementById('contactModal');
    const openContactBtns = document.querySelectorAll('.js-open-contact, #quickContactBtn');
    const closeContactBtns = document.querySelectorAll('#contactModalClose, #contactModalCloseBtn');

    openContactBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal?.classList.add('active');
        });
    });

    closeContactBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            contactModal?.classList.remove('active');
        });
    });

    contactModal?.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.classList.remove('active');
        }
    });

    // Project Details Modal
    const projectModal = document.getElementById('projectModal');
    const closeProjBtns = document.querySelectorAll('#projectModalClose, #projectModalCloseBtn');

    closeProjBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            projectModal?.classList.remove('active');
        });
    });

    projectModal?.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
        }
    });

    // Escape Key Listener to dismiss modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            contactModal?.classList.remove('active');
            projectModal?.classList.remove('active');
        }
    });
}

/* --------------------------------------------------------------------------
   PROMPT CHIPS HORIZONTAL DRAGGER
   -------------------------------------------------------------------------- */
function initPromptChipsDragger() {
    const slider = document.getElementById('promptChipsScroll');
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;
    let hasMoved = false;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        hasMoved = false;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.6;
        if (Math.abs(walk) > 4) {
            hasMoved = true;
        }
        slider.scrollLeft = scrollLeft - walk;
    });

    // Prevent trigger if dragged
    slider.addEventListener('click', (e) => {
        if (hasMoved) {
            e.stopImmediatePropagation();
            e.preventDefault();
        }
    }, true);
}

/* --------------------------------------------------------------------------
   RESUME EXPORTER & PRINT VIEW GENERATOR
   -------------------------------------------------------------------------- */
function initResumeExporter() {
    const resumeBtns = document.querySelectorAll('.js-open-resume');
    resumeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            generatePrintableResume();
        });
    });
}

function generatePrintableResume() {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        alert('Please allow popups to view and print Edward Ratunil\'s Resume.');
        return;
    }

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Edward S. Ratunil - Curriculum Vitae</title>
        <style>
            @page { margin: 12mm; size: A4 portrait; }
            body {
                font-family: 'Segoe UI', Arial, sans-serif;
                color: #1e293b;
                line-height: 1.45;
                font-size: 10pt;
                margin: 0;
                padding: 16px;
            }
            .header {
                border-bottom: 2px solid #2563eb;
                padding-bottom: 10px;
                margin-bottom: 12px;
            }
            h1 { margin: 0; font-size: 18pt; color: #0f172a; letter-spacing: -0.01em; }
            .subtitle { font-size: 10.5pt; color: #2563eb; font-weight: bold; margin-top: 3px; }
            .contacts { font-size: 9pt; color: #475569; margin-top: 5px; }
            .section { margin-bottom: 12px; }
            .section-title {
                font-size: 11pt;
                font-weight: bold;
                text-transform: uppercase;
                color: #0f172a;
                border-bottom: 1px solid #cbd5e1;
                padding-bottom: 2px;
                margin-bottom: 6px;
            }
            .item-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; }
            .item-sub { color: #475569; font-style: italic; font-size: 9pt; margin-bottom: 3px; }
            ul { margin: 3px 0 6px 16px; padding: 0; }
            li { margin-bottom: 2.5px; font-size: 9.5pt; }
            .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 9pt; }
            .certs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 9pt; }
            .print-btn {
                position: fixed;
                top: 15px;
                right: 15px;
                background: #2563eb;
                color: #fff;
                border: none;
                padding: 8px 16px;
                border-radius: 6px;
                cursor: pointer;
                font-weight: bold;
                box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
            }
            @media print {
                .print-btn { display: none; }
                body { padding: 0; }
            }
        </style>
    </head>
    <body>
        <button class="print-btn" onclick="window.print()">🖨️ Print / Save PDF</button>

        <div class="header">
            <h1>EDWARD S. RATUNIL</h1>
            <div class="subtitle">IT Support Specialist • Network Technician • Full Stack & IoT Developer</div>
            <div class="contacts">
                📍 Iligan City, Lanao del Norte, Philippines | 📞 09976112845 | ✉️ ratunil.edward@gmail.com | 🌐 github.com/edwardratunil | 🚀 pinggamer.com
            </div>
        </div>

        <div class="section">
            <div class="section-title">Professional Summary</div>
            <p>Information Technology graduate with hands-on experience in IT support, computer hardware and software troubleshooting, network infrastructure, server administration, and systems development. Experienced in configuring and troubleshooting routers, network equipment, Linux servers, and FTTH fiber installations. Also experienced in developing and deploying web-based and IoT applications using PHP, Laravel, JavaScript, Vue.js, React.js, MySQL, and REST APIs. Holds Computer Hardware Servicing NC II, Cisco Networking Academy certifications, and a Diploma in Electronics Technology.</p>
        </div>

        <div class="section">
            <div class="section-title">Professional Experience</div>
            <div class="item-header">
                <span>Network Technician / IT Support</span>
                <span>2020 – 2022</span>
            </div>
            <div class="item-sub">Self-Employed – Local Internet Service Provider (ISP)</div>
            <ul>
                <li>Installed and maintained Fiber-to-the-Home (FTTH) internet connections for residential and business clients.</li>
                <li>Performed fiber-optic fusion splicing, cabling, network troubleshooting, and connectivity diagnostics.</li>
                <li>Configured and maintained routers, fiber network equipment, internet distribution boxes, and Linux-based servers.</li>
                <li>Troubleshot customer connectivity, LAN/WAN issues, and provided dedicated technical support.</li>
                <li>Managed network installations, service deployments, and technical field maintenance.</li>
            </ul>

            <div class="item-header" style="margin-top: 6px;">
                <span>IT Support Assistant – Government Internship Program (GIP)</span>
                <span>2013 (6 Months)</span>
            </div>
            <div class="item-sub">Municipality of Lugait</div>
            <ul>
                <li>Encoded and managed financial records and administrative documentation using Microsoft Excel.</li>
                <li>Processed documents, coordinated signing workflows, and supported inter-departmental distribution.</li>
                <li>Provided workstation maintenance, OS setup, printer networking, and peripheral troubleshooting.</li>
            </ul>
        </div>

        <div class="section">
            <div class="section-title">Featured Projects</div>
            <div class="item-header">
                <span>PingGamer – Gaming Network Optimization Platform (pinggamer.com)</span>
                <span>Jan 2026 – Present</span>
            </div>
            <ul>
                <li>Developed full-stack web and desktop platform using Vue.js, Electron, WireGuard VPN, PHP, and MySQL.</li>
                <li>Configured and managed Linux-based VPS servers for low-latency network routing and automated tunneling.</li>
            </ul>

            <div class="item-header" style="margin-top: 4px;">
                <span>CORNMIST – IoT-Based Misting & Pesticide Application System (Capstone)</span>
                <span>Aug – Dec 2025</span>
            </div>
            <ul>
                <li>Engineered IoT automation system using ESP32 microcontrollers, REST API over Wi-Fi, and MAC address security.</li>
                <li>Constructed real-time web monitoring and mobile application interfaces for field operations.</li>
            </ul>

            <div class="item-header" style="margin-top: 4px;">
                <span>Government Inventory Management System (COPAD) (copad-production.up.railway.app)</span>
                <span>Jan 2026 – Present</span>
            </div>
            <ul>
                <li>Web-based inventory and record management system built with PHP, MySQL, and full-stack CRUD deployed on Railway.</li>
            </ul>
        </div>

        <div class="section">
            <div class="section-title">Education</div>
            <div class="item-header">
                <span>BS in Information Technology (Major in Internet of Things)</span>
                <span>2022 – 2026</span>
            </div>
            <div class="item-sub">University of Science and Technology of Southern Philippines (USTP - Cagayan de Oro)</div>

            <div class="item-header" style="margin-top: 4px;">
                <span>Diploma in Electronics Technology (Major in Computer Technology)</span>
                <span>2015 – 2017</span>
            </div>
            <div class="item-sub">Mindanao State University – Naawan (Naawan, Misamis Oriental)</div>

            <div class="item-header" style="margin-top: 4px;">
                <span>Computer Hardware Servicing NC II</span>
                <span>2012 – 2013</span>
            </div>
            <div class="item-sub">Technical Education and Skills Development Authority (TESDA)</div>
        </div>

        <div class="section">
            <div class="section-title">Certifications & IT Training (Cisco Networking Academy • Credly Verified)</div>
            <div class="certs-grid">
                <div>• CyberOps Associate (Credly)</div>
                <div>• Ethical Hacker (Credly)</div>
                <div>• Introduction to Cybersecurity (Credly)</div>
                <div>• Introduction to IoT (Credly)</div>
                <div>• Python Essentials 1 (Credly)</div>
                <div>• JavaScript Essentials 1 (Credly)</div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Technical Skills</div>
            <div class="skills-grid">
                <div><strong>IT Support:</strong> PC Hardware Troubleshooting, Hardware/Software Installation, Diagnostics, User Support</div>
                <div><strong>Networking:</strong> LAN/WAN, TCP/IP, FTTH Deployment, Fiber Splicing, Router Setup, VPN/WireGuard</div>
                <div><strong>Development:</strong> PHP, Laravel, JavaScript, HTML/CSS, Vue.js, React.js, Node.js, REST APIs</div>
                <div><strong>Systems & Tools:</strong> Windows, Linux, Ubuntu Server, VPS, Git, GitHub, VS Code, Electron, Railway</div>
            </div>
        </div>
    </body>
    </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
}
