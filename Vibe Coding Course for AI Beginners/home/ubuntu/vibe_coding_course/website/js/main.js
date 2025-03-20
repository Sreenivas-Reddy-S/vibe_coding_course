// Main JavaScript file for the Vibe Coding Course website

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    setupMobileMenu();
    
    // Quiz functionality
    setupQuiz();
    
    // Code playground
    setupCodePlayground();
    
    // Add syntax highlighting to code blocks
    highlightCodeBlocks();
    
    // Add smooth scrolling to anchor links
    setupSmoothScrolling();
});

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Quiz functionality
function setupQuiz() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    const checkAnswersButton = document.getElementById('check-answers');
    const quizResult = document.getElementById('quiz-result');
    
    if (quizOptions.length > 0 && checkAnswersButton && quizResult) {
        // Add click event to quiz options
        quizOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Deselect other options in the same question
                const questionDiv = option.parentElement;
                questionDiv.querySelectorAll('.quiz-option').forEach(opt => {
                    opt.classList.remove('selected', 'bg-gray-600');
                });
                
                // Select this option
                option.classList.add('selected', 'bg-gray-600');
            });
        });
        
        // Check answers button
        checkAnswersButton.addEventListener('click', () => {
            let correctAnswers = 0;
            
            quizOptions.forEach(option => {
                option.classList.remove('quiz-option-correct', 'quiz-option-incorrect');
                
                if (option.dataset.correct === 'true' && option.classList.contains('selected')) {
                    correctAnswers++;
                    option.classList.add('quiz-option-correct');
                } else if (option.dataset.correct === 'false' && option.classList.contains('selected')) {
                    option.classList.add('quiz-option-incorrect');
                } else if (option.dataset.correct === 'true') {
                    option.classList.add('quiz-option-correct');
                }
            });
            
            quizResult.classList.remove('hidden', 'bg-green-800', 'bg-yellow-800', 'bg-red-800');
            
            const totalQuestions = document.querySelectorAll('.quiz-question').length;
            
            if (correctAnswers === totalQuestions) {
                quizResult.classList.add('bg-green-800');
                quizResult.textContent = `Perfect! You got all ${totalQuestions} questions correct.`;
            } else if (correctAnswers >= 1) {
                quizResult.classList.add('bg-yellow-800');
                quizResult.textContent = `You got ${correctAnswers} out of ${totalQuestions} questions correct.`;
            } else {
                quizResult.classList.add('bg-red-800');
                quizResult.textContent = `You got 0 out of ${totalQuestions} questions correct. Try again!`;
            }
        });
    }
}

// Code playground functionality
function setupCodePlayground() {
    const runCodeButton = document.getElementById('run-code');
    const codeEditor = document.getElementById('code-editor');
    const codeResult = document.getElementById('code-result');
    
    if (runCodeButton && codeEditor && codeResult) {
        runCodeButton.addEventListener('click', () => {
            // Simulate running the code by showing a mock Streamlit app
            codeResult.innerHTML = `
                <div class="bg-gray-700 p-4 rounded-lg">
                    <h1 class="text-xl font-bold mb-2">Hello, Vibe Coding!</h1>
                    <p class="mb-4">This is a simple Streamlit app created with AI.</p>
                    
                    <div class="mb-4">
                        <label class="block mb-2">What's your name?</label>
                        <input type="text" id="name-input" class="bg-gray-800 border border-gray-600 rounded px-3 py-2 w-full">
                    </div>
                    
                    <div id="greeting" class="mb-4 hidden">
                        <p>Hello, <span id="name-output"></span>! Welcome to vibe coding.</p>
                    </div>
                    
                    <div class="mb-2">
                        <label class="block mb-2">Rate your excitement</label>
                        <input type="range" min="0" max="10" value="5" class="w-full" id="excitement-slider">
                    </div>
                    <div class="text-right">
                        <span id="excitement-value">5</span>/10
                    </div>
                </div>
            `;
            
            // Add interactivity to the simulated app
            const nameInput = document.getElementById('name-input');
            const greeting = document.getElementById('greeting');
            const nameOutput = document.getElementById('name-output');
            const excitementSlider = document.getElementById('excitement-slider');
            const excitementValue = document.getElementById('excitement-value');
            
            if (nameInput && greeting && nameOutput) {
                nameInput.addEventListener('input', () => {
                    if (nameInput.value.trim() !== '') {
                        greeting.classList.remove('hidden');
                        nameOutput.textContent = nameInput.value;
                    } else {
                        greeting.classList.add('hidden');
                    }
                });
            }
            
            if (excitementSlider && excitementValue) {
                excitementSlider.addEventListener('input', () => {
                    excitementValue.textContent = excitementSlider.value;
                });
            }
        });
    }
}

// Add syntax highlighting to code blocks
function highlightCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre code, .code-block');
    
    if (codeBlocks.length > 0) {
        codeBlocks.forEach(block => {
            // Simple syntax highlighting for Python
            if (block.classList.contains('language-python') || block.parentElement.classList.contains('language-python')) {
                const code = block.textContent;
                
                // Replace Python keywords, strings, etc. with spans
                const highlighted = code
                    .replace(/\b(import|from|def|class|if|else|elif|for|while|return|True|False|None|and|or|not|in|is|as|try|except|finally|with|lambda|async|await)\b/g, '<span class="token keyword">$1</span>')
                    .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="token string">$&</span>')
                    .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="token number">$1</span>')
                    .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '<span class="token function">$1</span>(')
                    .replace(/(#.*)$/gm, '<span class="token comment">$1</span>');
                
                block.innerHTML = highlighted;
            }
        });
    }
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Create placeholder images
function createPlaceholderImages() {
    document.querySelectorAll('.placeholder-image').forEach(placeholder => {
        const width = placeholder.dataset.width || '100%';
        const height = placeholder.dataset.height || '200px';
        const text = placeholder.dataset.text || 'Image Placeholder';
        
        placeholder.style.width = width;
        placeholder.style.height = height;
        placeholder.textContent = text;
    });
}

// Add dark/light mode toggle functionality
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    if (themeToggle) {
        // Check for saved theme preference or use default dark mode
        const savedTheme = localStorage.getItem('theme') || 'dark';
        htmlElement.classList.add(savedTheme);
        
        themeToggle.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                htmlElement.classList.add('light');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.classList.remove('light');
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
}

// Add accessibility features
function enhanceAccessibility() {
    // Add aria-labels to buttons without text
    document.querySelectorAll('button:not([aria-label])').forEach(button => {
        if (!button.textContent.trim()) {
            const icon = button.querySelector('i');
            if (icon && icon.className) {
                const iconClass = icon.className;
                if (iconClass.includes('fa-bars')) {
                    button.setAttribute('aria-label', 'Toggle menu');
                } else if (iconClass.includes('fa-search')) {
                    button.setAttribute('aria-label', 'Search');
                }
            }
        }
    });
    
    // Make sure all interactive elements are keyboard accessible
    document.querySelectorAll('a, button, input, select, textarea, [tabindex]').forEach(element => {
        if (!element.hasAttribute('tabindex') && !element.disabled) {
            element.setAttribute('tabindex', '0');
        }
    });
}
