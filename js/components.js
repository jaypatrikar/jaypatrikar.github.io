// Component loader for reusable HTML components
(function() {
    const BASE_URL = 'https://jaypatrikar.github.io';
    
    // Page-specific metadata
    const pageData = {
        'index.html': {
            title: 'Jay Patrikar | About Me',
            description: 'Jay Patrikar - Research Scientist at FieldAI. PhD in Robotics from Carnegie Mellon University (May 2025). Research focused on safe and reliable real-world autonomy, combining data-driven approaches with provably safe methods.',
            ogDescription: 'Research Scientist at FieldAI. PhD in Robotics from Carnegie Mellon University (May 2025). Research focused on safe and reliable real-world autonomy.',
            url: BASE_URL + '/'
        },
        'publications.html': {
            title: 'Jay Patrikar | Publications',
            description: 'Publications by Jay Patrikar - Research papers on robotics, autonomous systems, UAVs, and safe AI deployment. Research Scientist at FieldAI. PhD in Robotics from Carnegie Mellon University (May 2025).',
            ogDescription: 'Publications by Jay Patrikar - Research papers on robotics, autonomous systems, UAVs, and safe AI deployment.',
            url: BASE_URL + '/publications.html'
        },
        'education.html': {
            title: 'Jay Patrikar | Resume',
            description: 'Resume and CV of Jay Patrikar - Research Scientist at FieldAI. PhD in Robotics from Carnegie Mellon University (May 2025). Education, experience, and licenses.',
            ogDescription: 'Resume and CV of Jay Patrikar - Research Scientist at FieldAI. PhD in Robotics from Carnegie Mellon University (May 2025).',
            url: BASE_URL + '/education.html'
        }
    };
    
    function getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        return filename;
    }
    
    function loadComponent(containerId, componentPath) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('Container not found:', containerId);
            return;
        }
        
        fetch(componentPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                if (!html || html.trim() === '') {
                    throw new Error('Empty response from component');
                }
                container.innerHTML = html;
                // Re-initialize toggle menu after components load
                if (typeof $ !== 'undefined') {
                    $(".toggle-menu").off('click').on('click', function(e) {
                        e.preventDefault();
                        $(".responsive-menu").stop(true, true).slideToggle();
                        return false;
                    });
                }
                // Re-initialize any scripts that depend on the loaded content
                if (typeof initializeComponents === 'function') {
                    initializeComponents();
                }
            })
            .catch(error => {
                console.error('Error loading component:', componentPath, error);
                // Fallback: show error message in container
                container.innerHTML = '<!-- Error loading component: ' + componentPath + ' -->';
            });
    }
    
    function injectHeadContent() {
        const page = getCurrentPage();
        const data = pageData[page];
        if (!data) return;
        
        // Set title
        document.title = data.title;
        
        // Set meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = data.description;
        
        // Set Open Graph tags
        setMetaProperty('og:type', 'website');
        setMetaProperty('og:url', data.url);
        setMetaProperty('og:title', data.title);
        setMetaProperty('og:description', data.ogDescription);
        setMetaProperty('og:image', BASE_URL + '/img/profile.jpg');
        
        // Set Twitter Card tags
        setMetaProperty('twitter:card', 'summary_large_image');
        setMetaProperty('twitter:url', data.url);
        setMetaProperty('twitter:title', data.title);
        setMetaProperty('twitter:description', data.ogDescription);
        setMetaProperty('twitter:image', BASE_URL + '/img/profile.jpg');
    }
    
    function setMetaProperty(property, content) {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('property', property);
            document.head.appendChild(meta);
        }
        meta.content = content;
    }
    
    function decodeEmail() {
        // Decode email addresses to protect from scrapers
        // Uses base64 encoding to hide email from HTML source
        const emailLinks = document.querySelectorAll('[data-encoded]');
        emailLinks.forEach(function(link) {
            try {
                const encoded = link.getAttribute('data-encoded');
                const email = atob(encoded); // Decode from base64
                link.href = 'mailto:' + email;
                // Display email with [at] instead of @ to protect from scrapers
                link.textContent = email.replace('@', '[at]');
            } catch (e) {
                console.error('Error decoding email:', e);
            }
        });
    }
    
    function initialize() {
        // Decode email addresses that are already in the DOM
        decodeEmail();
        
        // Wait a bit to ensure DOM is fully ready
        setTimeout(function() {
            // Load body components only (head content is in HTML for performance)
            loadComponent('header-container', 'components/header.html');
            loadComponent('sidebar-container', 'components/sidebar.html');
            // Decode email addresses again after components are loaded
            setTimeout(decodeEmail, 100);
        }, 0);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        // DOM already loaded, initialize immediately
        initialize();
    }
})();
