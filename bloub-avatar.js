/**
 * BLOUB AVATAR - LIVING SVG MORPHING CLOUD AI MASCOT
 * Perfectly inline, symmetrical eyes across all 16 expressions.
 * Dynamically reacts to conversation context and user interactions.
 */

class BloubAvatar {
    constructor(containerId, options = {}) {
        this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
        this.size = options.size || 240; // px
        this.isMini = options.isMini || false;
        this.interactive = options.interactive !== false;
        this.expression = 'neutral';
        this.state = 'idle';
        this.eyeX = 0;
        this.eyeY = 0;
        this.blinkInterval = null;
        this.currentPathIndex = 0;
        
        // Puffy 5-Lobe Cloud SVG Paths
        this.cloudPaths = [
            "M 30,76 C 14,76 4,64 5,49 C 6,34 18,22 32,23 C 36,9 50,2 65,7 C 78,11 86,22 88,34 C 98,37 104,48 102,60 C 100,72 89,78 77,78 C 67,86 52,87 40,82 C 34,84 31,80 30,76 Z",
            "M 29,78 C 13,78 3,65 4,50 C 5,35 17,21 31,23 C 35,8 52,1 67,6 C 80,11 88,21 90,33 C 100,36 106,47 104,59 C 102,71 90,78 78,79 C 68,87 53,88 41,83 C 35,85 31,81 29,78 Z",
            "M 31,75 C 15,75 5,63 6,48 C 7,33 19,23 33,24 C 37,10 49,3 64,8 C 77,12 85,23 87,35 C 97,38 103,49 101,61 C 99,73 88,77 76,77 C 66,85 51,86 39,81 C 34,83 31,79 31,75 Z",
            "M 30,77 C 14,77 4,64 5,49 C 6,34 18,22 32,24 C 36,9 51,2 66,7 C 79,12 87,22 89,34 C 99,37 105,48 103,60 C 101,72 89,78 77,78 C 67,86 52,87 40,82 C 34,84 30,80 30,77 Z"
        ];

        // Symmetrical Eye Horizontal Baselines
        this.baseLX = 41;
        this.baseRX = 67;
        this.baseY = 48; // Exactly inline horizontally

        if (this.container) {
            this.init();
        }
    }

    init() {
        this.renderSvg();
        this.bindEvents();
        this.startBlinking();
        this.startMorphCycle();
    }

    renderSvg() {
        const id = 'bloub-cloud-' + Math.random().toString(36).substr(2, 9);
        this.svgId = id;

        this.container.innerHTML = `
            <div class="bloub-wrapper bloub-cloud-wrapper ${this.isMini ? 'bloub-mini' : 'bloub-hero-size'} expr-neutral" id="${id}-wrapper" style="width: ${this.size}px; height: ${this.size * 0.78}px;">
                <svg viewBox="0 0 110 90" class="bloub-svg bloub-cloud-svg" id="${id}-svg">
                    <defs>
                        <!-- Dark Obsidian Cloud Shading -->
                        <radialGradient id="${id}-cloud-grad" cx="45%" cy="30%" r="70%">
                            <stop offset="0%" stop-color="#1f293d" />
                            <stop offset="60%" stop-color="#0b0f19" />
                            <stop offset="100%" stop-color="#05070c" />
                        </radialGradient>
                        
                        <!-- Luminous Ambient Rim -->
                        <linearGradient id="${id}-cloud-rim" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.85" />
                            <stop offset="50%" stop-color="#6366f1" stop-opacity="0.6" />
                            <stop offset="100%" stop-color="#a855f7" stop-opacity="0.85" />
                        </linearGradient>

                        <!-- Soft Mist Glow Filter -->
                        <filter id="${id}-cloud-blur" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>
                    
                    <!-- Ambient Cloud Mist Aura -->
                    <ellipse cx="55" cy="48" rx="46" ry="32" fill="url(#${id}-cloud-rim)" class="bloub-ambient-glow" id="${id}-aura" />

                    <!-- Main Puffy Cloud Body -->
                    <path class="bloub-body bloub-cloud-body" id="${id}-body" d="${this.cloudPaths[0]}" fill="url(#${id}-cloud-grad)" stroke="url(#${id}-cloud-rim)" stroke-width="1.2" filter="url(#${id}-cloud-blur)" />

                    <!-- Expression Extras (Blush, Sweatdrop, Zzz, Question mark) -->
                    <g class="bloub-extras" id="${id}-extras">
                        <!-- Symmetrical Shy Rosy Cheeks -->
                        <ellipse class="bloub-blush blush-l" cx="28" cy="58" rx="6.5" ry="4" fill="#f43f5e" opacity="0" />
                        <ellipse class="bloub-blush blush-r" cx="80" cy="58" rx="6.5" ry="4" fill="#f43f5e" opacity="0" />
                        <!-- Sweatdrop for Scared -->
                        <path class="bloub-sweatdrop" d="M 85 24 C 85 20 89 14 89 14 C 89 14 93 20 93 24 C 93 26 91 28 89 28 C 87 28 85 26 85 24 Z" fill="#38bdf8" opacity="0" />
                        <!-- Question Mark for Confused -->
                        <text class="bloub-question" x="84" y="24" fill="#38bdf8" font-size="14" font-weight="bold" opacity="0" font-family="sans-serif">?</text>
                        <!-- Sleepy Zzz -->
                        <text class="bloub-zzz zzz-1" x="84" y="24" fill="#93c5fd" font-size="11" font-weight="bold" opacity="0" font-family="sans-serif">Z</text>
                        <text class="bloub-zzz zzz-2" x="92" y="16" fill="#60a5fa" font-size="8" font-weight="bold" opacity="0" font-family="sans-serif">z</text>
                    </g>

                    <!-- Facial Expression Group (Symmetrical & Inline on Y=48) -->
                    <g class="bloub-face" id="${id}-face" transform="translate(0, 0)">
                        <!-- Left Eye Mount (X=41, Y=48) -->
                        <g class="bloub-eye left-eye" id="${id}-eye-l" transform="translate(${this.baseLX}, ${this.baseY})">
                            <g class="eye-content" id="${id}-eye-content-l">
                                <rect class="bloub-capsule-eye" x="-5.5" y="-13" width="11" height="26" rx="5.5" fill="#ffffff" transform="rotate(25)" />
                            </g>
                        </g>

                        <!-- Right Eye Mount (X=67, Y=48) -->
                        <g class="bloub-eye right-eye" id="${id}-eye-r" transform="translate(${this.baseRX}, ${this.baseY})">
                            <g class="eye-content" id="${id}-eye-content-r">
                                <rect class="bloub-capsule-eye" x="-5.5" y="-13" width="11" height="26" rx="5.5" fill="#ffffff" transform="rotate(25)" />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        `;

        this.bodyEl = document.getElementById(`${id}-body`);
        this.faceEl = document.getElementById(`${id}-face`);
        this.eyeLEl = document.getElementById(`${id}-eye-l`);
        this.eyeREl = document.getElementById(`${id}-eye-r`);
        this.eyeContentLEl = document.getElementById(`${id}-eye-content-l`);
        this.eyeContentREl = document.getElementById(`${id}-eye-content-r`);
        this.extrasEl = document.getElementById(`${id}-extras`);
        this.auraEl = document.getElementById(`${id}-aura`);
        this.wrapperEl = document.getElementById(`${id}-wrapper`);
    }

    bindEvents() {
        if (!this.interactive) return;

        // Mouse Tracker: Symmetrical inline eye tracking
        const handleMouseMove = (e) => {
            if (!this.container || this.expression === 'sleepy') return;
            const rect = this.container.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 450;

            const clampDist = Math.min(distance, maxDistance) / maxDistance;
            const angle = Math.atan2(dy, dx);

            // Symmetrical eye parallax offsets
            const eyeMax = this.expression === 'attentive' ? 5 : 4;
            this.eyeX = Math.cos(angle) * clampDist * eyeMax;
            this.eyeY = Math.sin(angle) * clampDist * (eyeMax * 0.7);

            if (this.eyeLEl && this.eyeREl) {
                this.eyeLEl.setAttribute('transform', `translate(${this.baseLX + this.eyeX}, ${this.baseY + this.eyeY})`);
                this.eyeREl.setAttribute('transform', `translate(${this.baseRX + this.eyeX}, ${this.baseY + this.eyeY})`);
            }

            // Subtle face parallax tilt
            if (this.faceEl) {
                const faceX = Math.cos(angle) * clampDist * 3;
                const faceY = Math.sin(angle) * clampDist * 2;
                this.faceEl.setAttribute('transform', `translate(${faceX.toFixed(2)}, ${faceY.toFixed(2)})`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        // Click / Touch Reaction
        this.container.addEventListener('click', () => {
            const playfulExprs = ['excited', 'happy', 'laughing', 'surprised', 'proud'];
            const randomExpr = playfulExprs[Math.floor(Math.random() * playfulExprs.length)];
            this.setExpression(randomExpr);
            this.jiggle();
            setTimeout(() => {
                this.setExpression('neutral');
            }, 1800);
        });
    }

    startBlinking() {
        const scheduleNextBlink = () => {
            const delay = 2500 + Math.random() * 3200;
            this.blinkInterval = setTimeout(() => {
                this.blink();
                scheduleNextBlink();
            }, delay);
        };
        scheduleNextBlink();
    }

    blink() {
        if (!this.container || ['sleepy', 'laughing', 'happy', 'proud'].includes(this.expression)) return;
        const eyes = this.container.querySelectorAll('.bloub-eye');
        eyes.forEach(eye => eye.classList.add('blinking'));
        setTimeout(() => {
            eyes.forEach(eye => eye.classList.remove('blinking'));
        }, 180);
    }

    startMorphCycle() {
        let lastTime = 0;
        const morphStep = (time) => {
            if (!lastTime) lastTime = time;
            const interval = this.expression === 'excited' ? 300 : (this.expression === 'angry' ? 350 : 2200);

            if (time - lastTime > interval) {
                this.currentPathIndex = (this.currentPathIndex + 1) % this.cloudPaths.length;
                if (this.bodyEl) {
                    this.bodyEl.setAttribute('d', this.cloudPaths[this.currentPathIndex]);
                }
                lastTime = time;
            }
            requestAnimationFrame(morphStep);
        };
        requestAnimationFrame(morphStep);
    }

    /**
     * Sets expression with 100% horizontal alignment and symmetrical geometries
     */
    setExpression(expr) {
        if (!this.eyeContentLEl || !this.eyeContentREl) return;
        this.expression = expr;

        if (this.wrapperEl) {
            this.wrapperEl.className = `bloub-wrapper bloub-cloud-wrapper ${this.isMini ? 'bloub-mini' : 'bloub-hero-size'} expr-${expr}`;
        }

        // Reset positions to exact inline horizontal baseline
        if (this.eyeLEl && this.eyeREl) {
            this.eyeLEl.setAttribute('transform', `translate(${this.baseLX + this.eyeX}, ${this.baseY + this.eyeY})`);
            this.eyeREl.setAttribute('transform', `translate(${this.baseRX + this.eyeX}, ${this.baseY + this.eyeY})`);
        }

        // Hide all extra overlays initially
        if (this.extrasEl) {
            this.extrasEl.querySelectorAll('.bloub-blush, .bloub-sweatdrop, .bloub-question, .bloub-zzz').forEach(el => {
                el.style.opacity = '0';
            });
        }

        switch (expr) {
            case 'attentive':
                // Inline, upright capsule eyes focused straight ahead
                this.eyeContentLEl.innerHTML = `<rect class="bloub-capsule-eye" x="-5.5" y="-14" width="11" height="28" rx="5.5" fill="#ffffff" transform="rotate(10)" />`;
                this.eyeContentREl.innerHTML = `<rect class="bloub-capsule-eye" x="-5.5" y="-14" width="11" height="28" rx="5.5" fill="#ffffff" transform="rotate(10)" />`;
                break;

            case 'surprised':
                // Symmetrical wide circular eyes
                this.eyeContentLEl.innerHTML = `<circle class="bloub-white-eye" cx="0" cy="0" r="11" fill="#ffffff" />`;
                this.eyeContentREl.innerHTML = `<circle class="bloub-white-eye" cx="0" cy="0" r="11" fill="#ffffff" />`;
                break;

            case 'excited':
                // Symmetrical dynamic sparkle capsule eyes
                this.eyeContentLEl.innerHTML = `<rect class="bloub-capsule-eye" x="-5.5" y="-15" width="11" height="30" rx="5.5" fill="#ffffff" transform="rotate(30)" />`;
                this.eyeContentREl.innerHTML = `<rect class="bloub-capsule-eye" x="-5.5" y="-15" width="11" height="30" rx="5.5" fill="#ffffff" transform="rotate(30)" />`;
                break;

            case 'happy':
                // Joyful symmetrical upward arcs ^ ^
                this.eyeContentLEl.innerHTML = `<path d="M -9 3 Q 0 -10 9 3" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" fill="none" />`;
                this.eyeContentREl.innerHTML = `<path d="M -9 3 Q 0 -10 9 3" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" fill="none" />`;
                break;

            case 'laughing':
                // Symmetrical laughing chevrons > <
                this.eyeContentLEl.innerHTML = `<path d="M 8 -9 L -6 0 L 8 9" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
                this.eyeContentREl.innerHTML = `<path d="M -8 -9 L 6 0 L -8 9" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />`;
                break;

            case 'angry':
                // Symmetrical inward slants \ /
                this.eyeContentLEl.innerHTML = `<rect class="bloub-capsule-eye" x="-5.5" y="-13" width="11" height="26" rx="5.5" fill="#ffffff" transform="rotate(-30)" />`;
                this.eyeContentREl.innerHTML = `<rect class="bloub-capsule-eye" x="-5.5" y="-13" width="11" height="26" rx="5.5" fill="#ffffff" transform="rotate(30)" />`;
                break;

            case 'sad':
                // Symmetrical downward slants / \
                this.eyeContentLEl.innerHTML = `<rect class="bloub-capsule-eye" x="-5" y="-12" width="10" height="24" rx="5" fill="#ffffff" transform="rotate(30)" />`;
                this.eyeContentREl.innerHTML = `<rect class="bloub-capsule-eye" x="-5" y="-12" width="10" height="24" rx="5" fill="#ffffff" transform="rotate(-30)" />`;
                break;

            case 'scared':
                // Symmetrical small jittery circular eyes with sweatdrop
                this.eyeContentLEl.innerHTML = `<circle class="bloub-white-eye" cx="0" cy="0" r="7" fill="#ffffff" />`;
                this.eyeContentREl.innerHTML = `<circle class="bloub-white-eye" cx="0" cy="0" r="7" fill="#ffffff" />`;
                const sweat = this.extrasEl?.querySelector('.bloub-sweatdrop');
                if (sweat) sweat.style.opacity = '0.9';
                break;

            case 'suspicious':
                // Side-eye squint (- O)
                this.eyeContentLEl.innerHTML = `<rect x="-7" y="-3" width="14" height="6" rx="3" fill="#ffffff" transform="rotate(10)" />`;
                this.eyeContentREl.innerHTML = `<rect class="bloub-capsule-eye" x="-5.5" y="-13" width="11" height="26" rx="5.5" fill="#ffffff" transform="rotate(20)" />`;
                break;

            case 'confused':
                // One tilted capsule, one circle, with question mark
                this.eyeContentLEl.innerHTML = `<rect class="bloub-capsule-eye" x="-5" y="-11" width="10" height="22" rx="5" fill="#ffffff" transform="rotate(10)" />`;
                this.eyeContentREl.innerHTML = `<circle class="bloub-white-eye" cx="0" cy="0" r="9" fill="#ffffff" />`;
                const qmark = this.extrasEl?.querySelector('.bloub-question');
                if (qmark) qmark.style.opacity = '1';
                break;

            case 'curious':
                // Symmetrical inquisitive tilt
                this.eyeContentLEl.innerHTML = `<rect class="bloub-capsule-eye" x="-5.5" y="-14" width="11" height="28" rx="5.5" fill="#ffffff" transform="rotate(15)" />`;
                this.eyeContentREl.innerHTML = `<rect class="bloub-capsule-eye" x="-5.5" y="-14" width="11" height="28" rx="5.5" fill="#ffffff" transform="rotate(15)" />`;
                break;

            case 'proud':
                // Symmetrical contented arcs ^ ^
                this.eyeContentLEl.innerHTML = `<path d="M -8 2 Q 0 -9 8 2" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none" />`;
                this.eyeContentREl.innerHTML = `<path d="M -8 2 Q 0 -9 8 2" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none" />`;
                break;

            case 'shy':
                // Symmetrical soft glance + rosy blush cheeks
                this.eyeContentLEl.innerHTML = `<rect class="bloub-capsule-eye" x="-4.5" y="-10" width="9" height="20" rx="4.5" fill="#ffffff" transform="rotate(25)" />`;
                this.eyeContentREl.innerHTML = `<rect class="bloub-capsule-eye" x="-4.5" y="-10" width="9" height="20" rx="4.5" fill="#ffffff" transform="rotate(25)" />`;
                const blushes = this.extrasEl?.querySelectorAll('.bloub-blush');
                blushes?.forEach(b => b.style.opacity = '0.65');
                break;

            case 'unimpressed':
                // Symmetrical flat horizontal bars - -
                this.eyeContentLEl.innerHTML = `<rect x="-8" y="-3" width="16" height="6" rx="3" fill="#ffffff" />`;
                this.eyeContentREl.innerHTML = `<rect x="-8" y="-3" width="16" height="6" rx="3" fill="#ffffff" />`;
                break;

            case 'sleepy':
                // Symmetrical drowsy curved lines ~ ~ + floating Zzz
                this.eyeContentLEl.innerHTML = `<path d="M -7 -1 Q -1 3 5 -1" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none" />`;
                this.eyeContentREl.innerHTML = `<path d="M -7 -1 Q -1 3 5 -1" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none" />`;
                const zzzs = this.extrasEl?.querySelectorAll('.bloub-zzz');
                zzzs?.forEach(z => z.style.opacity = '1');
                break;

            case 'neutral':
            default:
                // Symmetrical inline slanted capsule eyes
                this.eyeContentLEl.innerHTML = `<rect class="bloub-capsule-eye" x="-5.5" y="-13" width="11" height="26" rx="5.5" fill="#ffffff" transform="rotate(25)" />`;
                this.eyeContentREl.innerHTML = `<rect class="bloub-capsule-eye" x="-5.5" y="-13" width="11" height="26" rx="5.5" fill="#ffffff" transform="rotate(25)" />`;
                break;
        }

        // Update active chip in expression bar if present
        const activeChip = document.querySelector(`.expr-chip[data-expr="${expr}"]`);
        if (activeChip) {
            document.querySelectorAll('.expr-chip').forEach(c => c.classList.remove('active'));
            activeChip.classList.add('active');
        }
    }

    setState(newState) {
        if (newState === 'thinking') {
            this.setExpression('curious');
        } else if (newState === 'speaking') {
            this.setExpression('excited');
        } else if (newState === 'happy') {
            this.setExpression('happy');
        } else if (newState === 'idle') {
            this.setExpression('neutral');
        }
    }

    jiggle() {
        if (this.wrapperEl) {
            this.wrapperEl.classList.add('jiggle-anim');
            setTimeout(() => {
                this.wrapperEl.classList.remove('jiggle-anim');
            }, 600);
        }
    }

    /**
     * Generates a self-contained inline Cloud SVG string for mini avatars (chat messages, badges)
     */
    static getMiniSvgHtml(size = 38, animated = true) {
        const id = 'bloub-cloud-mini-' + Math.random().toString(36).substr(2, 7);
        return `
            <div class="bloub-wrapper bloub-mini bloub-cloud-mini ${animated ? 'bloub-mini-animated' : ''}" style="width: ${size}px; height: ${size * 0.78}px;">
                <svg viewBox="0 0 110 90" class="bloub-svg">
                    <defs>
                        <radialGradient id="${id}-grad" cx="45%" cy="30%" r="70%">
                            <stop offset="0%" stop-color="#1f293d" />
                            <stop offset="60%" stop-color="#0b0f19" />
                            <stop offset="100%" stop-color="#05070c" />
                        </radialGradient>
                        <linearGradient id="${id}-rim" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#38bdf8" />
                            <stop offset="100%" stop-color="#a855f7" />
                        </linearGradient>
                    </defs>
                    <path class="bloub-body" d="M 30,76 C 14,76 4,64 5,49 C 6,34 18,22 32,23 C 36,9 50,2 65,7 C 78,11 86,22 88,34 C 98,37 104,48 102,60 C 100,72 89,78 77,78 C 67,86 52,87 40,82 C 34,84 31,80 30,76 Z" fill="url(#${id}-grad)" stroke="url(#${id}-rim)" stroke-width="1.5" />
                    <g class="bloub-face">
                        <g class="bloub-eye" transform="translate(41, 48)">
                            <rect class="bloub-capsule-eye" x="-5.5" y="-13" width="11" height="26" rx="5.5" fill="#ffffff" transform="rotate(25)" />
                        </g>
                        <g class="bloub-eye" transform="translate(67, 48)">
                            <rect class="bloub-capsule-eye" x="-5.5" y="-13" width="11" height="26" rx="5.5" fill="#ffffff" transform="rotate(25)" />
                        </g>
                    </g>
                </svg>
            </div>
        `;
    }
}

// Attach helper to window
window.BloubAvatar = BloubAvatar;
