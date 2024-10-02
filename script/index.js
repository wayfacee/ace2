// Header
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', () => {
  openMenu();
});

const $menu = document.querySelector('.menu');

function openMenu() {
  $menu.classList.add('open');
}
function closeMenu() {
  $menu.classList.remove('open');
}
// back btn
function goBack() {
  window.history.back();
}

function openBag() {
  window.location.href = 'cart.html';
}

const $subscribeBtn = document.querySelector('.menu__subscribe-button');
const $emailInput = document.querySelector('#email-input');
const $form = document.querySelector('#subscribe-form');

function subscribe() {
  $subscribeBtn.textContent = 'thank you <3';
  $emailInput.value = '';
  setTimeout(() => {
    $subscribeBtn.textContent = 'subscribe';
    $emailInput.placeholder = 'e-mail adress';
  }, 3000);
}

$form.addEventListener('submit', (e) => {
  e.preventDefault();

  if ($emailInput.checkValidity()) {
    subscribe();
  } else {
    $emailInput.reportValidity();
  }
});

$emailInput.addEventListener('focus', function () {
  if ($emailInput.value === '') {
    $emailInput.placeholder = '';
  }
});

$emailInput.addEventListener('blur', function () {
  if ($emailInput.value === '') {
    $emailInput.placeholder = 'e-mail adress';
  }
});

const links = document.querySelectorAll('.menu__link');
const modals = {
  Career: document.getElementById('modal-career'),
  Contacts: document.getElementById('modal-contacts'),
};
const closeButtons = document.querySelectorAll('.modal__close');

links.forEach((link) => {
  link.addEventListener('click', function (event) {
    const linkText = this.textContent.trim();

    if (this.classList.contains('modal-trigger')) {
      event.preventDefault();

      links.forEach((l) => l.classList.remove('menu__link__active'));

      this.classList.add('menu__link__active');

      if (modals[linkText]) {
        modals[linkText].style.display = 'block';
      }
    } else {
      links.forEach((l) => l.classList.remove('menu__link__active'));
      this.classList.add('menu__link__active');
    }
  });
});

closeButtons.forEach((button) => {
  button.onclick = function () {
    const modalId = this.getAttribute('data-modal');
    links.forEach((l) => l.classList.remove('menu__link__active'));
    document.getElementById(modalId).style.display = 'none';
  };
});

window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
};
const products = [
  {
    name: 'JACKET SHIELD 1.0',
    image: 'assets/img/product-2.png',
    category: 'outerwear',
    color: '#4d8986',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'man',
    price: 1200,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'DRESS GLAM 2.1',
    image: 'assets/img/product-2.png',
    category: 'dresses',
    color: '#9ac5a2',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'woman',
    price: 800,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'SWEATER WARMTH 3.0',
    image: 'assets/img/product-2.png',
    category: 'sweater',
    color: '#1b1b1b',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'woman',
    price: 500,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'JEANS EDGE 4.0',
    image: 'assets/img/product-2.png',
    category: 'jeans',
    color: '#48575c',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M'],
    gender: 'man',
    price: 600,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'T-SHIRT PEACE 0.2',
    image: 'assets/img/product-2.png',
    category: 't-shirts',
    color: '#ffffff',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L'],
    gender: 'man',
    price: 300,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'SKIRT GRACE 1.5',
    image: 'assets/img/product-2.png',
    category: 'skirts',
    color: '#e07a5f',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M'],
    gender: 'woman',
    price: 400,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'BLAZER CLASSIC 5.1',
    image: 'assets/img/product-2.png',
    category: 'outerwear',
    color: '#2a9d8f',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'woman',
    price: 1000,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'COAT ELEGANT 7.0',
    image: 'assets/img/product-2.png',
    category: 'outerwear',
    color: '#a1463f',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'woman',
    price: 1300,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'PANTS COMFORT 2.8',
    image: 'assets/img/product-2.png',
    category: 'pants',
    color: '#3c419f',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'L', 'XL'],
    gender: 'man',
    price: 700,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'JEANS SLIM FIT 4.5',
    image: 'assets/img/product-2.png',
    category: 'jeans',
    color: '#292727',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'XL'],
    gender: 'man',
    price: 650,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'CARDIGAN SOFT 3.3',
    image: 'assets/img/product-2.png',
    category: 'sweater',
    color: '#d9b5af',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'woman',
    price: 550,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'PARKA SHIELD 6.0',
    image: 'assets/img/product-2.png',
    category: 'outerwear',
    color: '#9d3c3a',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['XL'],
    gender: 'man',
    price: 1400,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'SUMMER DRESS 2.5',
    image: 'assets/img/product-2.png',
    category: 'dresses',
    color: '#e4c6e8',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M'],
    gender: 'woman',
    price: 850,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'JACKET CASUAL 5.2',
    image: 'assets/img/product-2.png',
    category: 'outerwear',
    color: '#8a3b9b',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'man',
    price: 1150,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'CHINO PANTS 2.9',
    image: 'assets/img/product-2.png',
    category: 'pants',
    color: '#b5d2a3',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['XL'],
    gender: 'man',
    price: 750,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'PULLOVER COZY 3.7',
    image: 'assets/img/product-2.png',
    category: 'sweater',
    color: '#cc7070',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M'],
    gender: 'woman',
    price: 520,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'JACKET LEATHER 7.5',
    image: 'assets/img/product-2.png',
    category: 'outerwear',
    color: '#1b1b1b',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'XL'],
    gender: 'man',
    price: 1350,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'MIDI DRESS 5.8',
    image: 'assets/img/product-2.png',
    category: 'dresses',
    color: '#d9b5af',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'XL'],
    gender: 'woman',
    price: 900,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'HOODIE RELAX 3.9',
    image: 'assets/img/product-2.png',
    category: 'sweater',
    color: '#4d8986',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'XL'],
    gender: 'man',
    price: 650,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'PANTS CARGO 4.1',
    image: 'assets/img/product-2.png',
    category: 'pants',
    color: '#48575c',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'man',
    price: 780,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'JACKET DENIM 5.4',
    image: 'assets/img/product-2.png',
    category: 'outerwear',
    color: '#3c419f',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['S', 'M'],
    gender: 'man',
    price: 1100,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
  {
    name: 'FLORAL DRESS 2.7',
    image: 'assets/img/product-2.png',
    category: 'dresses',
    color: '#e4c6e8',
    colors: {
      black: '/assets/img/product-2.png',
      white: '/assets/img/product-2.png',
    },
    sizes: ['L', 'XL'],
    gender: 'woman',
    price: 880,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
  },
];

const $filter = document.querySelector('.filter');

if ($filter) {
  document
    .getElementById('filter-button')
    .addEventListener('click', function () {
      $filter.classList.add('open');
    });

  document
    .getElementById('filter-close')
    .addEventListener('click', function () {
      $filter.classList.remove('open');
    });

  let selectedColors = [];
  let selectedSizes = [];
  let selectedGender = null;
  let selectedCategory = null;
  function renderProducts(productsToRender) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = productsToRender
      .map(
        (product) => `
                  <div class="product-grid__item" data-name="${product.name}">
            <img src="${product.image}" alt="${product.name}">
            <img class="product-like-icon ${
              favoriteProducts.includes(product.name) ? 'selected' : ''
            }" src="assets/img/header-like.svg" alt="Like">
            <p>${product.name}</p>
            <p class="product-price">${product.price}грн</p> 
          </div>
        `
      )
      .join('');

    // Додаємо обробник кліку на кожну картку

    document.querySelectorAll('.product-grid__item').forEach((item) => {
      item.addEventListener('click', function () {
        const productName = item.getAttribute('data-name');
        window.location.href = `product.html?name=${encodeURIComponent(
          productName
        )}`;
      });
    });

    // Додаємо обробник кліку на іконку серця
    document.querySelectorAll('.product-like-icon').forEach((icon) => {
      icon.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleFavoriteProduct(icon);
      });
    });
  }

  function rgbToHex(rgb) {
    const rgbValues = rgb.match(/\d+/g).map(Number);
    return `#${rgbValues
      .map((val) => val.toString(16).padStart(2, '0'))
      .join('')}`;
  }

  function applyFilters() {
    const filteredProducts = products.filter((product) => {
      const categoryMatch =
        !selectedCategory ||
        selectedCategory === 'all' ||
        product.category === selectedCategory;

      const colorMatch =
        !selectedColors.length || selectedColors.includes(product.color);

      const sizeMatch =
        !selectedSizes.length ||
        selectedSizes.some((size) => product.sizes.includes(size));

      const genderMatch = !selectedGender || product.gender === selectedGender;

      return categoryMatch && colorMatch && sizeMatch && genderMatch;
    });
    let favoriteProducts =
      JSON.parse(localStorage.getItem('favoriteProducts')) || [];

    updateFavoriteCount();

    renderProducts(filteredProducts);
  }
  function toggleSelection(array, value) {
    const index = array.indexOf(value);
    if (index === -1) {
      array.push(value);
    } else {
      array.splice(index, 1);
    }
  }
  function toggleFavoriteProduct(icon) {
    const productItem = icon.closest('.product-grid__item');
    const productName = productItem.getAttribute('data-name');

    // Перевіряємо, чи вже товар у списку обраних
    const isFavorite = favoriteProducts.includes(productName);

    if (isFavorite) {
      favoriteProducts = favoriteProducts.filter(
        (item) => item !== productName
      );
      icon.classList.remove('selected');
    } else {
      favoriteProducts.push(productName);
      icon.classList.add('selected');
    }

    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));

    updateFavoriteCount();
  }

  document.querySelectorAll('.filter__gender-button').forEach((button) => {
    button.addEventListener('click', function () {
      document
        .querySelectorAll('.filter__gender-button')
        .forEach((el) => el.classList.remove('selected'));
      button.classList.add('selected');
      selectedGender = button.innerText.toLowerCase();
      applyFilters();
    });
  });

  document.querySelectorAll('.filter__color-button').forEach((button) => {
    button.addEventListener('click', function () {
      const color = rgbToHex(button.style.backgroundColor);
      toggleSelection(selectedColors, color);
      button.classList.toggle('selected');
      applyFilters();
    });
  });

  document.querySelectorAll('.filter__size-button').forEach((button) => {
    button.addEventListener('click', function () {
      const size = button.innerText;
      toggleSelection(selectedSizes, size);
      button.classList.toggle('selected');
      applyFilters();
    });
  });

  document.querySelectorAll('.filter__categories li').forEach((item) => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      document
        .querySelectorAll('.filter__categories li')
        .forEach((el) => el.classList.remove('selected'));
      item.classList.add('selected');
      selectedCategory = item.innerText.toLowerCase();
      applyFilters();
    });
  });

  document.querySelectorAll('.menu__item').forEach((menuItem) => {
    menuItem.addEventListener('click', function (event) {
      event.preventDefault();
      document
        .querySelectorAll('.menu__item')
        .forEach((el) => el.classList.remove('menu__link__active'));
      menuItem.classList.add('menu__link__active');
      selectedCategory =
        menuItem.innerText.toLowerCase() === 'all'
          ? null
          : menuItem.innerText.toLowerCase();
      applyFilters();
    });
  });

  function clearFilters() {
    document
      .querySelectorAll(
        '.filter__categories li, .filter__color-button, .filter__size-button, .filter__gender-button'
      )
      .forEach((item) => {
        item.classList.remove('selected');
      });
    document
      .querySelector('.filter__categories ul li:first-of-type')
      .classList.add('selected');
    selectedColors = [];
    selectedSizes = [];
    selectedGender = null;
    selectedCategory = null;
    renderProducts(products);
  }

  document
    .getElementById('filter-reset')
    .addEventListener('click', clearFilters);

  let favoriteProducts =
    JSON.parse(localStorage.getItem('favoriteProducts')) || [];

  updateFavoriteCount();

  renderProducts(products);
}

if (
  window.location.pathname.includes('saved-items.html') ||
  window.location.pathname.includes('personal-account.html')
) {
  const favoriteProducts =
    JSON.parse(localStorage.getItem('favoriteProducts')) || [];

  const savedProductGrid = document.querySelector('.saved-items__container');
  if (savedProductGrid) {
    savedProductGrid.innerHTML = favoriteProducts
      .map(
        (name) => `
          <div class="saved-product-item">
            <p>${name}</p>
          </div>
        `
      )
      .join('');
  }
}

function toggleFavoriteProduct(icon) {
  const productItem = icon.closest('.product-grid__item');
  const productName = productItem.getAttribute('data-name');
  const favoriteProducts =
    JSON.parse(localStorage.getItem('favoriteProducts')) || [];

  // Перевіряємо, чи вже товар у списку обраних
  const isFavorite = favoriteProducts.includes(productName);

  if (isFavorite) {
    // Видаляємо товар зі списку обраних
    favoriteProducts = favoriteProducts.filter((item) => item !== productName);
    icon.classList.remove('selected');
  } else {
    // Додаємо товар до списку обраних
    favoriteProducts.push(productName);
    icon.classList.add('selected');
  }

  // Зберігаємо оновлений список обраних у localStorage
  localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));

  // Оновлюємо відображення кількості обраних товарів
  updateFavoriteCount();
}

const favoriteBtn = document.querySelector('.favorite-btn');
if (favoriteBtn) {
  updateFavoriteCount();
}

function updateFavoriteCount() {
  const favoriteBtn = document.querySelector('.favorite-btn');
  if (!favoriteBtn) return; // Якщо елемент не знайдено, припиняємо виконання

  let favoriteProducts =
    JSON.parse(localStorage.getItem('favoriteProducts')) || [];

  // Перевіряємо, чи елемент span з кількістю вже існує
  let favoriteCountElement = favoriteBtn.querySelector('.favorite-count');
  if (!favoriteCountElement) {
    // Якщо span елемент ще не створений, створюємо його
    favoriteCountElement = document.createElement('span');
    favoriteCountElement.classList.add('favorite-count');
    favoriteBtn.appendChild(favoriteCountElement); // Додаємо до favorite-btn
  }

  // Встановлюємо значення кількості обраних товарів або очищуємо текст
  favoriteCountElement.innerText =
    favoriteProducts.length > 0 ? favoriteProducts.length : '';

  // Якщо є обрані товари, прибираємо клас "blured", якщо немає — додаємо.
  const likeIcon = favoriteBtn.querySelector('img');
  if (favoriteProducts.length > 0) {
    likeIcon.classList.remove('blured');
  } else {
    likeIcon.classList.add('blured');
  }
}

// Перевіряємо, чи існує кнопка пошуку
const searchButton = document.querySelector('.control-buttons__search');

if (searchButton) {
  // Показуємо або ховаємо поле пошуку при натисканні на іконку пошуку
  searchButton.addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput');
    if (searchInput.style.display === 'none') {
      searchInput.style.display = 'block'; // Показуємо поле пошуку
      searchInput.focus(); // Автоматично фокусуємо на поле пошуку
    } else {
      searchInput.style.display = 'none'; // Ховаємо поле пошуку
    }
  });

  // Додаємо обробник натискання Enter для поля пошуку
  document
    .getElementById('searchInput')
    .addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        const searchTerm = event.target.value.toLowerCase(); // Отримуємо значення з поля вводу
        filterProducts(searchTerm); // Викликаємо функцію пошуку
      }
    });
}

function filterProducts(searchTerm) {
  // Фільтруємо продукти за назвою
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  // Викликаємо рендер функцію з відфільтрованими продуктами
  renderProducts(filteredProducts);
}

document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      document.getElementById('civility').value = storedUserData.civility || '';
      document.getElementById('firstName').value =
        storedUserData.firstName || '';
      document.getElementById('lastName').value = storedUserData.lastName || '';
      document.getElementById('birthday').value = storedUserData.birthday || '';
      document.getElementById('email').value = storedUserData.email || '';
      document.getElementById('phoneNumber').value =
        storedUserData.phone.replace(/^\+380/, '');
      document.getElementById('termsCheckbox').checked =
        storedUserData.termsAccepted || false;
    }

    registerForm.addEventListener('submit', function (event) {
      event.preventDefault();

      let isValid = true;

      const civility = document.getElementById('civility');
      const firstName = document.getElementById('firstName');
      const lastName = document.getElementById('lastName');
      const birthday = document.getElementById('birthday');
      const email = document.getElementById('email');
      const phonePrefix = document.getElementById('phonePrefix');
      const phoneNumber = document.getElementById('phoneNumber');
      const password = document.getElementById('password');
      const confirmPassword = document.getElementById('confirmPassword');
      const termsCheckbox = document.getElementById('termsCheckbox');

      // Очищаємо попередні помилки
      document.getElementById('civilityError').style.display = 'none';
      document.getElementById('firstNameError').style.display = 'none';
      document.getElementById('lastNameError').style.display = 'none';
      document.getElementById('birthdayError').style.display = 'none';
      document.getElementById('emailError').style.display = 'none';
      document.getElementById('phoneError').style.display = 'none';
      document.getElementById('passwordError').style.display = 'none';
      document.getElementById('confirmPasswordError').style.display = 'none';
      document.getElementById('termsError').style.display = 'none';

      if (civility.value.trim() === '') {
        document.getElementById('civilityError').textContent =
          'Please enter your civility.';
        document.getElementById('civilityError').style.display = 'block';
        isValid = false;
      }

      if (firstName.value.trim() === '') {
        document.getElementById('firstNameError').textContent =
          'Please enter your first name.';
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
      }

      if (lastName.value.trim() === '') {
        document.getElementById('lastNameError').textContent =
          'Please enter your last name.';
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
      }

      if (birthday.value.trim() === '') {
        document.getElementById('birthdayError').textContent =
          'Please enter your birthday.';
        document.getElementById('birthdayError').style.display = 'block';
        isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        document.getElementById('emailError').textContent =
          'Please enter a valid email address.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
      }

      const phonePattern = /^[0-9]{9}$/;
      if (!phonePattern.test(phoneNumber.value.trim())) {
        document.getElementById('phoneError').textContent =
          'Please enter a valid 9-digit mobile phone number.';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
      }

      if (password.value.length < 8) {
        document.getElementById('passwordError').textContent =
          'Password must be at least 8 characters long.';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
      }

      if (password.value !== confirmPassword.value) {
        document.getElementById('confirmPasswordError').textContent =
          'Passwords do not match.';
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
      }

      if (!termsCheckbox.checked) {
        document.getElementById('termsError').textContent =
          'You must agree to the terms of use.';
        document.getElementById('termsError').style.display = 'block';
        isValid = false;
      }

      if (isValid) {
        const user = {
          civility: civility.value.trim(),
          firstName: firstName.value.trim(),
          lastName: lastName.value.trim(),
          birthday: birthday.value.trim(),
          email: email.value.trim(),
          phone: `${phonePrefix.value}${phoneNumber.value.trim()}`,
          password: password.value.trim(),
          termsAccepted: termsCheckbox.checked,
        };
        localStorage.setItem('userData', JSON.stringify(user));
        localStorage.setItem('isLogin', true);

        console.log('User data saved:', user); // Можна замінити на AJAX-запит для відправки даних
        window.location.href = 'personal-account.html';
      }
    });
  }
});

function logOut() {
  localStorage.setItem('isLogin', 'false');
  window.location.href = 'login.html';
}

function login() {
  const email = document.getElementById('login-email-input').value.trim();
  const password = document.getElementById('password-input').value.trim();

  const storedUserData = JSON.parse(localStorage.getItem('userData'));

  if (!storedUserData) {
    document.getElementById('error-message').innerText =
      'Invalid email or password';
    return;
  }

  if (
    storedUserData.email === email &&
    storedUserData.password.toString() === password
  ) {
    localStorage.setItem('isLogin', 'true');
    window.location.href = 'personal-account.html';
  } else {
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Stored User Data:', storedUserData);

    document.getElementById('error-message').innerText =
      'Invalid email or password';
  }
}

const isPersonalAccountPage = window.location.pathname.includes(
  'personal-account.html'
);

if (isPersonalAccountPage) {
  // Кнопка редагування профілю
  document
    .getElementById('edit-profile')
    .addEventListener('click', function () {
      document.getElementById('profileInfo').style.display = 'none';
      document.getElementById('editProfileForm').style.display = 'flex';
    });

  // Кнопка скасування редагування
  document
    .getElementById('cancel-profile')
    .addEventListener('click', function () {
      document.getElementById('editProfileForm').style.display = 'none';
      document.getElementById('profileInfo').style.display = 'block';
    });

  // Кнопка зміни пароля
  document
    .getElementById('change-password')
    .addEventListener('click', function () {
      document.getElementById('passwordSection').style.display = 'none';
      document.getElementById('changePasswordForm').style.display = 'block';
    });

  // Кнопка скасування зміни пароля
  document
    .getElementById('cancel-password')
    .addEventListener('click', function () {
      document.getElementById('changePasswordForm').style.display = 'none';
      document.getElementById('passwordSection').style.display = 'block';
    });

  // Кнопка управління адресами
  document
    .getElementById('manage-address')
    .addEventListener('click', function () {
      document.getElementById('addressBook').style.display = 'none';
      document.getElementById('addressForm').style.display = 'block';
    });

  // Кнопка скасування управління адресами
  document
    .getElementById('cancel-address')
    .addEventListener('click', function () {
      document.getElementById('addressForm').style.display = 'none';
      document.getElementById('addressBook').style.display = 'block';
    });
  document
    .getElementById('edit-profile')
    .addEventListener('click', function () {
      // Показуємо форму для редагування
      const userData = JSON.parse(localStorage.getItem('userData'));
      document.getElementById('edit-first-name').value = userData.firstName;
      document.getElementById('edit-last-name').value = userData.lastName;
      document.getElementById('edit-email').value = userData.email;
      document.getElementById('editProfileForm').style.display = 'flex';
    });

  document
    .getElementById('save-profile')
    .addEventListener('click', function () {
      // Збереження нових даних користувача
      const updatedUser = {
        ...JSON.parse(localStorage.getItem('userData')),
        firstName: document.getElementById('edit-first-name').value.trim(),
        lastName: document.getElementById('edit-last-name').value.trim(),
        email: document.getElementById('edit-email').value.trim(),
      };

      localStorage.setItem('userData', JSON.stringify(updatedUser));
      location.reload(); // Оновлюємо сторінку
    });

  document
    .getElementById('cancel-profile')
    .addEventListener('click', function () {
      document.getElementById('editProfileForm').style.display = 'none'; // Ховаємо форму
    });

  document
    .getElementById('change-password')
    .addEventListener('click', function () {
      document.getElementById('changePasswordForm').style.display = 'flex';
    });

  document
    .getElementById('save-password')
    .addEventListener('click', function () {
      const newPassword = document.getElementById('new-password').value.trim();
      const confirmPassword = document
        .getElementById('confirm-new-password')
        .value.trim();

      if (newPassword === confirmPassword && newPassword.length >= 8) {
        const updatedUser = {
          ...JSON.parse(localStorage.getItem('userData')),
          password: newPassword,
        };

        localStorage.setItem('userData', JSON.stringify(updatedUser));
        alert('Password changed successfully');
        document.getElementById('changePasswordForm').style.display = 'none';
      } else {
        alert('Passwords do not match or password is too short');
      }
    });

  document
    .getElementById('cancel-password')
    .addEventListener('click', function () {
      document.getElementById('changePasswordForm').style.display = 'none';
    });
  document
    .getElementById('manage-address')
    .addEventListener('click', function () {
      const userData = JSON.parse(localStorage.getItem('userData'));
      document.getElementById('address').value = userData.address || '';
      document.getElementById('addressForm').style.display = 'flex';
    });

  document
    .getElementById('save-address')
    .addEventListener('click', function () {
      const updatedUser = {
        ...JSON.parse(localStorage.getItem('userData')),
        address: document.getElementById('address').value.trim(),
      };

      localStorage.setItem('userData', JSON.stringify(updatedUser));
      alert('Address saved successfully');
      document.getElementById('addressForm').style.display = 'none';
    });

  document
    .getElementById('cancel-address')
    .addEventListener('click', function () {
      document.getElementById('addressForm').style.display = 'none';
    });

  function hideAllSections() {
    document.getElementById('profileInfo').style.display = 'none';
    document.getElementById('passwordSection').style.display = 'none';
    document.getElementById('addressBook').style.display = 'none';
    document.getElementById('editProfileForm').style.display = 'none';
    document.getElementById('changePasswordForm').style.display = 'none';
    document.getElementById('addressForm').style.display = 'none';
  }
}

function loginWithGoogle() {
  alert('Google login functionality to be implemented');
}
console.log(localStorage.getItem('userData'));

const $greetingName = document.querySelector('#greeting');
const $firstName = document.querySelector('#first-name');
const $lastName = document.querySelector('#last-name');
const $email = document.querySelector('#email');

const userData = localStorage.getItem('userData');

if ($greetingName && userData) {
  const parsedUserData = JSON.parse(userData);

  if ($greetingName) $greetingName.textContent = parsedUserData.firstName;
  if ($firstName) $firstName.textContent = parsedUserData.firstName;
  if ($lastName) $lastName.textContent = parsedUserData.lastName;
  if ($email) $email.textContent = parsedUserData.email;
}
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

if (tabLinks) {
  function showTab(tabId) {
    tabContents.forEach((content) => {
      content.classList.remove('active');
      if (content.id === tabId) {
        content.classList.add('active');
      }
    });

    tabLinks.forEach((link) => {
      link.classList.remove('tab-link__active');
      if (link.getAttribute('data-tab') === tabId) {
        link.classList.add('tab-link__active');
      }
    });
  }

  tabLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const tabId = this.getAttribute('data-tab');
      showTab(tabId);
    });
  });

  showTab('orders');
}

$toTopBtn = document.querySelector('.control-buttons__top');
if ($toTopBtn) {
  $toTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

$favoriteBtn = document.querySelector('.favorite-btn');
$favoriteBtn.addEventListener('click', () => {
  const isLogin = localStorage.getItem('isLogin') === 'true';
  if (isLogin) {
    window.location.href = 'personal-account.html';
    showTab('saved-items');
  } else {
    window.location.href = 'saved-items.html';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const isCartPage = window.location.pathname.includes('cart.html');

  const isProductPage = window.location.pathname.includes('product.html');

  if (isProductPage) {
    // Дані про товари
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name') || 'Jacket';
    const productColor = urlParams.get('color') || 'black';
    const productSize = urlParams.get('size') || '';

    // Знаходимо товар за ім'ям
    const product = products.find((p) => p.name === productName);

    if (product) {
      const mainContentContainer = document.querySelector(
        '.product__main-content'
      );

      if (mainContentContainer) {
        mainContentContainer.innerHTML = ''; // Очищуємо контейнер перед додаванням нових елементів

        // Додаємо головне зображення товару
        const mainImageElement = document.createElement('img');
        mainImageElement.src = product.colors[productColor] || product.image;
        mainImageElement.alt = `${product.name} - ${productColor}`;
        mainImageElement.classList.add('product__main-image');
        mainContentContainer.appendChild(mainImageElement);

        // Додаємо додаткові зображення з масиву "images"
        product.images.forEach((imageSrc) => {
          const additionalImageElement = document.createElement('img');
          additionalImageElement.src = imageSrc;
          additionalImageElement.alt = `${product.name} - additional image`;
          additionalImageElement.classList.add('product__additional-image');
          mainContentContainer.appendChild(additionalImageElement);
        });
      } else {
        console.error('Main content container not found');
      }

      // Встановлюємо назву продукту
      document.querySelector('.product__name').textContent =
        product.name.toUpperCase();

      // Встановлюємо ціну товару
      const priceContainer = document.querySelector('.product__price');
      if (priceContainer) {
        priceContainer.textContent = `${product.price} UAH`;
      } else {
        console.error('Price container not found');
      }

      // Відображаємо доступні кольори
      const colorContainer = document.querySelector('.product__color-options');
      if (colorContainer) {
        colorContainer.innerHTML = '';
        Object.keys(product.colors).forEach((color) => {
          const colorItem = document.createElement('div');
          colorItem.classList.add('product__color-item');
          colorItem.innerHTML = `
            <img src="${product.colors[color]}" alt="${color}" class="product__color-image" />
            <p class="product__color-name">${color}</p>
          `;
          colorItem.addEventListener('click', () => changeColor(color));
          colorContainer.appendChild(colorItem);
        });
      } else {
        console.error('Color container not found');
      }

      // Відображаємо доступні розміри
      const sizeContainer = document.querySelector('.product__size-selection');
      if (sizeContainer) {
        sizeContainer.innerHTML = '<p class="product__label">sizes</p>';
        product.sizes.forEach((size) => {
          const sizeButton = document.createElement('button');
          sizeButton.classList.add('product__size-btn');
          sizeButton.textContent = size;
          sizeButton.addEventListener('click', function () {
            selectSize(sizeButton);
          });

          if (size === productSize) {
            sizeButton.classList.add('product__size-btn--selected');
          }

          sizeContainer.appendChild(sizeButton);
        });
      } else {
        console.error('Size container not found');
      }
    } else {
      console.error('Product not found');
    }

    // Функція для вибору кольору і зміни URL
    function changeColor(color) {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set('color', color);
      window.location.search = urlParams.toString();
    }

    // Функція для вибору розміру
    function selectSize(button) {
      const sizeButtons = document.querySelectorAll('.product__size-btn');
      sizeButtons.forEach((btn) =>
        btn.classList.remove('product__size-btn--selected')
      );

      button.classList.add('product__size-btn--selected');

      // Додаємо вибраний розмір до URL
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set('size', button.textContent);
      window.history.replaceState(null, '', '?' + urlParams.toString());

      // Активуємо кнопку "додати до кошика"
      const addToBagButton = document.querySelector(
        '.product__button--add-to-bag'
      );
      if (addToBagButton) {
        addToBagButton.disabled = false;
        addToBagButton.textContent = 'Add to Bag';
      }
    }

    // Додаємо товар у корзину (локальне зберігання)
    const addToCartButton = document.getElementById('add-to-cart');
    if (addToCartButton) {
      addToCartButton.addEventListener('click', function () {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(
          (item) => item.name === product.name && item.color === productColor
        );

        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({ ...product, quantity: 1, color: productColor });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'cart.html';
      });
    } else {
      console.error('Add to cart button not found');
    }
  }
  if (isCartPage) {
    const cartContainer = document.getElementById('cart-container');
    const totalElement = document.getElementById('total-amount');
    const cartTotalContainer = document.querySelector('.cart-total'); // Контейнер з загальною сумою
    const checkoutButton = document.querySelector('.checkout-button'); // Кнопка "Check Out"
    const noteContainer = document.querySelector('.note'); // Повідомлення про податки

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalAmount = 0;

    // Функція створення елемента
    function createElement(tag, className = '', textContent = '') {
      const element = document.createElement(tag);
      if (className) element.className = className;
      if (textContent) element.textContent = textContent;
      return element;
    }

    // Функція для створення елементів кошика
    function renderCart() {
      cartContainer.innerHTML = ''; // Очищення контейнера
      totalAmount = 0;

      // Перевірка наявності товарів у кошику
      if (cart.length === 0) {
        // Створення повідомлення про порожній кошик
        const emptyMessage = createElement(
          'p',
          'empty-cart-message',
          'Your cart is currently empty.'
        );
        cartContainer.appendChild(emptyMessage);

        // Створення посилання на магазин
        const returnLink = createElement(
          'a',
          'return-to-shop',
          'return to shop'
        );
        returnLink.href = 'main.html'; // Посилання на сторінку магазину
        cartContainer.appendChild(returnLink);

        // Приховування контейнерів з загальною сумою та кнопкою "Check Out"
        if (cartTotalContainer) cartTotalContainer.style.display = 'none';
        if (checkoutButton) checkoutButton.style.display = 'none';
        if (noteContainer) noteContainer.style.display = 'none';

        totalElement.textContent = ''; // Очищення тексту загальної суми
        return;
      }

      // Показати контейнери з загальною сумою та кнопкою, якщо є товари
      if (cartTotalContainer) cartTotalContainer.style.display = 'flex';
      if (checkoutButton) checkoutButton.style.display = 'inline-flex';
      if (noteContainer) noteContainer.style.display = 'block';

      // Створення карточки для кожного товару
      cart.forEach((item, index) => {
        const itemContainer = createElement('div', 'cart-item');

        // Зображення товару
        const itemImage = createElement('img');
        itemImage.src = item.colors[item.color];
        itemImage.alt = item.name;
        itemContainer.appendChild(itemImage);

        // Деталі товару
        const itemDetails = createElement('div', 'cart-item-details');
        const itemName = createElement('p', '', item.name);
        itemDetails.appendChild(itemName);
        itemContainer.appendChild(itemDetails);

        // Ціна товару
        const itemPrice = createElement(
          'div',
          'cart-item-price',
          `${item.price} UAH.`
        );
        itemContainer.appendChild(itemPrice);

        // Кількість товару
        const itemQuantity = createElement('div', 'cart-item-quantity');
        const decreaseButton = createElement('button', '', '-');
        const increaseButton = createElement('button', '', '+');
        const quantityDisplay = createElement('span', '', item.quantity);

        // Додавання функціоналу кнопок зміни кількості
        decreaseButton.addEventListener('click', function () {
          if (item.quantity > 1) {
            item.quantity--;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart(); // Оновити відображення
          }
        });

        increaseButton.addEventListener('click', function () {
          item.quantity++;
          localStorage.setItem('cart', JSON.stringify(cart));
          renderCart(); // Оновити відображення
        });

        itemQuantity.appendChild(decreaseButton);
        itemQuantity.appendChild(quantityDisplay);
        itemQuantity.appendChild(increaseButton);
        itemContainer.appendChild(itemQuantity);

        // Загальна вартість для даного товару
        const itemTotal = createElement(
          'div',
          'cart-item-total',
          `${item.price * item.quantity} UAH.`
        );
        itemContainer.appendChild(itemTotal);

        // Кнопка видалення товару
        const removeButton = createElement('div', 'remove-item', 'X');
        removeButton.addEventListener('click', function () {
          cart.splice(index, 1); // Видалити елемент з масиву
          localStorage.setItem('cart', JSON.stringify(cart));
          renderCart(); // Оновити відображення після видалення
        });
        itemContainer.appendChild(removeButton);

        // Додавання карточки товару до контейнера
        cartContainer.appendChild(itemContainer);

        // Оновлення загальної суми
        totalAmount += item.price * item.quantity;
      });

      // Оновлення відображення загальної суми
      totalElement.textContent = `${totalAmount} UAH.`;
    }

    // Виклик функції для початкового відображення кошика
    renderCart();
  }
});

const countries = [
  { code: '+1', name: 'United States' },
  { code: '+93', name: 'Afghanistan' },
  { code: '+355', name: 'Albania' },
  { code: '+213', name: 'Algeria' },
  { code: '+1684', name: 'American Samoa' },
  { code: '+376', name: 'Andorra' },
  { code: '+244', name: 'Angola' },
  { code: '+1264', name: 'Anguilla' },
  { code: '+672', name: 'Antarctica' },
  { code: '+1268', name: 'Antigua and Barbuda' },
  { code: '+54', name: 'Argentina' },
  { code: '+374', name: 'Armenia' },
  { code: '+297', name: 'Aruba' },
  { code: '+61', name: 'Australia' },
  { code: '+43', name: 'Austria' },
  { code: '+994', name: 'Azerbaijan' },
  { code: '+1242', name: 'Bahamas' },
  { code: '+973', name: 'Bahrain' },
  { code: '+880', name: 'Bangladesh' },
  { code: '+1246', name: 'Barbados' },
  { code: '+32', name: 'Belgium' },
  { code: '+501', name: 'Belize' },
  { code: '+229', name: 'Benin' },
  { code: '+1441', name: 'Bermuda' },
  { code: '+975', name: 'Bhutan' },
  { code: '+591', name: 'Bolivia' },
  { code: '+387', name: 'Bosnia and Herzegovina' },
  { code: '+267', name: 'Botswana' },
  { code: '+55', name: 'Brazil' },
  { code: '+246', name: 'British Indian Ocean Territory' },
  { code: '+1284', name: 'British Virgin Islands' },
  { code: '+673', name: 'Brunei' },
  { code: '+359', name: 'Bulgaria' },
  { code: '+226', name: 'Burkina Faso' },
  { code: '+257', name: 'Burundi' },
  { code: '+855', name: 'Cambodia' },
  { code: '+237', name: 'Cameroon' },
  { code: '+1', name: 'Canada' },
  { code: '+238', name: 'Cape Verde' },
  { code: '+1345', name: 'Cayman Islands' },
  { code: '+236', name: 'Central African Republic' },
  { code: '+235', name: 'Chad' },
  { code: '+56', name: 'Chile' },
  { code: '+86', name: 'China' },
  { code: '+61', name: 'Christmas Island' },
  { code: '+61', name: 'Cocos Islands' },
  { code: '+57', name: 'Colombia' },
  { code: '+269', name: 'Comoros' },
  { code: '+682', name: 'Cook Islands' },
  { code: '+506', name: 'Costa Rica' },
  { code: '+385', name: 'Croatia' },
  { code: '+53', name: 'Cuba' },
  { code: '+357', name: 'Cyprus' },
  { code: '+420', name: 'Czech Republic' },
  { code: '+243', name: 'Democratic Republic of the Congo' },
  { code: '+45', name: 'Denmark' },
  { code: '+253', name: 'Djibouti' },
  { code: '+1767', name: 'Dominica' },
  { code: '+1809', name: 'Dominican Republic' },
  { code: '+670', name: 'East Timor' },
  { code: '+593', name: 'Ecuador' },
  { code: '+20', name: 'Egypt' },
  { code: '+503', name: 'El Salvador' },
  { code: '+240', name: 'Equatorial Guinea' },
  { code: '+291', name: 'Eritrea' },
  { code: '+372', name: 'Estonia' },
  { code: '+251', name: 'Ethiopia' },
  { code: '+500', name: 'Falkland Islands' },
  { code: '+298', name: 'Faroe Islands' },
  { code: '+679', name: 'Fiji' },
  { code: '+358', name: 'Finland' },
  { code: '+33', name: 'France' },
  { code: '+689', name: 'French Polynesia' },
  { code: '+241', name: 'Gabon' },
  { code: '+220', name: 'Gambia' },
  { code: '+995', name: 'Georgia' },
  { code: '+49', name: 'Germany' },
  { code: '+233', name: 'Ghana' },
  { code: '+350', name: 'Gibraltar' },
  { code: '+30', name: 'Greece' },
  { code: '+299', name: 'Greenland' },
  { code: '+1473', name: 'Grenada' },
  { code: '+1671', name: 'Guam' },
  { code: '+502', name: 'Guatemala' },
  { code: '+224', name: 'Guinea' },
  { code: '+245', name: 'Guinea-Bissau' },
  { code: '+592', name: 'Guyana' },
  { code: '+509', name: 'Haiti' },
  { code: '+504', name: 'Honduras' },
  { code: '+852', name: 'Hong Kong' },
  { code: '+36', name: 'Hungary' },
  { code: '+354', name: 'Iceland' },
  { code: '+91', name: 'India' },
  { code: '+62', name: 'Indonesia' },
  { code: '+98', name: 'Iran' },
  { code: '+964', name: 'Iraq' },
  { code: '+353', name: 'Ireland' },
  { code: '+972', name: 'Israel' },
  { code: '+39', name: 'Italy' },
  { code: '+225', name: 'Ivory Coast' },
  { code: '+1876', name: 'Jamaica' },
  { code: '+81', name: 'Japan' },
  { code: '+962', name: 'Jordan' },
  { code: '+254', name: 'Kenya' },
  { code: '+686', name: 'Kiribati' },
  { code: '+965', name: 'Kuwait' },
  { code: '+996', name: 'Kyrgyzstan' },
  { code: '+856', name: 'Laos' },
  { code: '+371', name: 'Latvia' },
  { code: '+961', name: 'Lebanon' },
  { code: '+266', name: 'Lesotho' },
  { code: '+231', name: 'Liberia' },
  { code: '+218', name: 'Libya' },
  { code: '+423', name: 'Liechtenstein' },
  { code: '+370', name: 'Lithuania' },
  { code: '+352', name: 'Luxembourg' },
  { code: '+853', name: 'Macau' },
  { code: '+389', name: 'Macedonia' },
  { code: '+261', name: 'Madagascar' },
  { code: '+265', name: 'Malawi' },
  { code: '+60', name: 'Malaysia' },
  { code: '+960', name: 'Maldives' },
  { code: '+223', name: 'Mali' },
  { code: '+356', name: 'Malta' },
  { code: '+692', name: 'Marshall Islands' },
  { code: '+222', name: 'Mauritania' },
  { code: '+230', name: 'Mauritius' },
  { code: '+262', name: 'Mayotte' },
  { code: '+52', name: 'Mexico' },
  { code: '+691', name: 'Micronesia' },
  { code: '+373', name: 'Moldova' },
  { code: '+377', name: 'Monaco' },
  { code: '+976', name: 'Mongolia' },
  { code: '+382', name: 'Montenegro' },
  { code: '+1664', name: 'Montserrat' },
  { code: '+212', name: 'Morocco' },
  { code: '+258', name: 'Mozambique' },
  { code: '+95', name: 'Myanmar' },
  { code: '+264', name: 'Namibia' },
  { code: '+674', name: 'Nauru' },
  { code: '+977', name: 'Nepal' },
  { code: '+31', name: 'Netherlands' },
  { code: '+687', name: 'New Caledonia' },
  { code: '+64', name: 'New Zealand' },
  { code: '+505', name: 'Nicaragua' },
  { code: '+227', name: 'Niger' },
  { code: '+234', name: 'Nigeria' },
  { code: '+683', name: 'Niue' },
  { code: '+672', name: 'Norfolk Island' },
  { code: '+850', name: 'North Korea' },
  { code: '+1670', name: 'Northern Mariana Islands' },
  { code: '+47', name: 'Norway' },
  { code: '+968', name: 'Oman' },
  { code: '+92', name: 'Pakistan' },
  { code: '+680', name: 'Palau' },
  { code: '+970', name: 'Palestine' },
  { code: '+507', name: 'Panama' },
  { code: '+675', name: 'Papua New Guinea' },
  { code: '+595', name: 'Paraguay' },
  { code: '+51', name: 'Peru' },
  { code: '+63', name: 'Philippines' },
  { code: '+64', name: 'Pitcairn' },
  { code: '+48', name: 'Poland' },
  { code: '+351', name: 'Portugal' },
  { code: '+1', name: 'Puerto Rico' },
  { code: '+974', name: 'Qatar' },
  { code: '+40', name: 'Romania' },
  { code: '+250', name: 'Rwanda' },
  { code: '+290', name: 'Saint Helena' },
  { code: '+1869', name: 'Saint Kitts and Nevis' },
  { code: '+1758', name: 'Saint Lucia' },
  { code: '+508', name: 'Saint Pierre and Miquelon' },
  { code: '+1784', name: 'Saint Vincent and the Grenadines' },
  { code: '+685', name: 'Samoa' },
  { code: '+378', name: 'San Marino' },
  { code: '+239', name: 'Sao Tome and Principe' },
  { code: '+966', name: 'Saudi Arabia' },
  { code: '+221', name: 'Senegal' },
  { code: '+381', name: 'Serbia' },
  { code: '+248', name: 'Seychelles' },
  { code: '+232', name: 'Sierra Leone' },
  { code: '+65', name: 'Singapore' },
  { code: '+421', name: 'Slovakia' },
  { code: '+386', name: 'Slovenia' },
  { code: '+677', name: 'Solomon Islands' },
  { code: '+252', name: 'Somalia' },
  { code: '+27', name: 'South Africa' },
  { code: '+82', name: 'South Korea' },
  { code: '+211', name: 'South Sudan' },
  { code: '+34', name: 'Spain' },
  { code: '+94', name: 'Sri Lanka' },
  { code: '+249', name: 'Sudan' },
  { code: '+597', name: 'Suriname' },
  { code: '+268', name: 'Swaziland' },
  { code: '+46', name: 'Sweden' },
  { code: '+41', name: 'Switzerland' },
  { code: '+963', name: 'Syria' },
  { code: '+886', name: 'Taiwan' },
  { code: '+992', name: 'Tajikistan' },
  { code: '+255', name: 'Tanzania' },
  { code: '+66', name: 'Thailand' },
  { code: '+228', name: 'Togo' },
  { code: '+690', name: 'Tokelau' },
  { code: '+676', name: 'Tonga' },
  { code: '+1868', name: 'Trinidad and Tobago' },
  { code: '+216', name: 'Tunisia' },
  { code: '+90', name: 'Turkey' },
  { code: '+993', name: 'Turkmenistan' },
  { code: '+1649', name: 'Turks and Caicos Islands' },
  { code: '+688', name: 'Tuvalu' },
  { code: '+256', name: 'Uganda' },
  { code: '+380', name: 'Ukraine' },
  { code: '+971', name: 'United Arab Emirates' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+598', name: 'Uruguay' },
  { code: '+998', name: 'Uzbekistan' },
  { code: '+678', name: 'Vanuatu' },
  { code: '+379', name: 'Vatican' },
  { code: '+58', name: 'Venezuela' },
  { code: '+84', name: 'Vietnam' },
  { code: '+681', name: 'Wallis and Futuna' },
  { code: '+967', name: 'Yemen' },
  { code: '+260', name: 'Zambia' },
  { code: '+263', name: 'Zimbabwe' },
];

const selectElement = document.getElementById('phonePrefix');
if (selectElement) {
  countries.forEach((country) => {
    const option = document.createElement('option');
    option.value = country.code;
    option.text = `${country.code}`;
    selectElement.appendChild(option);
  });
}
