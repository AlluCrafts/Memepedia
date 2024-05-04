i18next.init({
    lng: 'en', // Default language (English)
    debug: true,
    resources: {
        en: {
            translation: {
                "pageTitle": "Memepedia",
                "searchPlaceholder": "Search memes..."
                // Add more translations as needed
            }
        },
        fi: {
            translation: {
                "pageTitle": "Mimipedia",
                "searchPlaceholder": "Hae meemejä..."
                // Add more translations as needed
            }
        },
        fr: {
            translation: {
                "pageTitle": "Mémoïpédie",
                "searchPlaceholder": "Rechercher des mèmes..."
                // Add more translations as needed
            }
        }
    }
}, function(err, t) {
    // Initialize translations
    updateContent();
});

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function(element) {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
    });
    // Update placeholder text of input fields
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(element) {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = i18next.t(key);
    });
}

function changeLanguage(lang) {
    i18next.changeLanguage(lang, function(err, t) {
        // Update content after changing language
        updateContent();
    });
}

// Your existing functions for search functionality and other features
