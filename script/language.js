const translations = {
  en: {
      welcome: 'Welcome',
      searchPlaceholder: 'Search...',
      subscribe: 'Subscribe',
  },
  ua: {
      welcome: 'Ласкаво просимо',
      searchPlaceholder: 'Пошук...',
      subscribe: 'Підписатися',
  }
};

let currentLanguage = 'ua'; 

function changeLanguage(language) {
    currentLanguage = language;
    document.querySelector('#welcome').textContent = translations[language].welcome;
    document.querySelector('#searchInput').placeholder = translations[language].searchPlaceholder;
    document.querySelector('#subscribeBtn').textContent = translations[language].subscribe;
    // обновите остальные элементы...
}

// Пример: функция для переключения языка
document.querySelectorAll('.language-selector').forEach(button => {
    button.addEventListener('click', function() {
        const selectedLang = this.getAttribute('data-lang');
        changeLanguage(selectedLang);
    });
});
