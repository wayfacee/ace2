const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('.menu');
let lastOpen = null;

function toggleMenu(event) {
  event.stopPropagation();
  if (menu.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
}

function closeIfOpen(event) {
  if (lastOpen === 'menu' && menu.classList.contains('open')) {
    closeMenu();  // Закриваємо меню
  } else if (lastOpen === 'modal') {
    closeModals(); // Закриваємо модальні вікна
  }
  lastOpen = null; // Очищаємо після закриття
}

if (menuBtn && menu) {
  // Для комп'ютерів і мобільних пристроїв
  menuBtn.addEventListener('click', toggleMenu);
  // menuBtn.addEventListener('touchstart', toggleMenu);

  // Закриття меню при кліку поза його межами
  window.addEventListener('click', handleOutsideClick);
  // window.addEventListener('touchstart', handleOutsideClick);

  menu.addEventListener('click', (event) => event.stopPropagation());
  // menu.addEventListener('touchstart', (event) => event.stopPropagation());
}

function handleOutsideClick(event) {
  if (!menu.contains(event.target) && event.target !== menuBtn) {
    closeIfOpen(); // Викликаємо закриття, якщо потрібно
  }
}
window.addEventListener('click', handleOutsideClick);
window.addEventListener('touchstart', handleOutsideClick);

function openMenu() {
  menu.classList.add('open');
  lastOpen = 'menu'; 
  updateZIndexAndPosition('-1', '2px');
}

function closeMenu() {
  menu.classList.remove('open');
  updateZIndexAndPosition('', '1.7%');
}

function updateZIndexAndPosition(zIndexValue, controlBtnBottom) {
  const productGridItems = document.querySelectorAll('.product-grid__item');
  const product = document.querySelector(".product");
  const controlBtns = document.querySelector(".control-buttons");

  if (product) {
    product.style.zIndex = zIndexValue;
  }
  
  productGridItems.forEach(item => {
    item.style.zIndex = zIndexValue;
  });

  if (controlBtns) {
    controlBtns.style.bottom = controlBtnBottom;
  }
}

const colorSection = document.querySelector('.filter__color-section');
const sizeSection = document.querySelector('.filter__size-section');
const combinedContainer = document.querySelector('.filter__combined');
if(combinedContainer){
  if (window.innerWidth <= 768) {
    combinedContainer.appendChild(colorSection);
    combinedContainer.appendChild(sizeSection);
}
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


function toggleModal(linkText) {
  if (modals[linkText]) {
    modals[linkText].style.display = 'block';
    lastOpen = 'modal'; 
  }
}


function closeModals() {
  Object.keys(modals).forEach((key) => {
    modals[key].style.display = 'none';
  });
}

links.forEach((link) => {
  function handleClick(event) {
    const linkText = this.textContent.trim();
    
    if (this.classList.contains('modal-trigger')) {
      event.preventDefault();
      links.forEach((l) => l.classList.remove('menu__link__active'));
      this.classList.add('menu__link__active');
      closeModals();
      toggleModal(linkText);
    } else {
      links.forEach((l) => l.classList.remove('menu__link__active'));
      this.classList.add('menu__link__active');
    }
  }


  link.addEventListener('click', handleClick);
  link.addEventListener('touchstart', handleClick);
});

closeButtons.forEach((button) => {
  function closeModal() {
    const modalId = this.getAttribute('data-modal');
    links.forEach((l) => l.classList.remove('menu__link__active'));
    document.getElementById(modalId).style.display = 'none';
    lastOpen = 'menu'; 
  }

  button.addEventListener('click', closeModal);
  button.addEventListener('touchstart', closeModal);
});

window.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
    links.forEach((l) => l.classList.remove('menu__link__active'));
    lastOpen = "menu";
  }
});

window.addEventListener('touchstart', function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
    links.forEach((l) => l.classList.remove('menu__link__active'));
    lastOpen = "menu";
  }
});

const products = [
  {
    name: 'JACKET SHIELD 1.0',
    image: 'assets/img/product-2.png',
    type: 'outerwear',
    color: '#4d8986',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'man',
    price: 1200,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'man'
  },
  {
    name: 'DRESS GLAM 2.1',
    image: 'assets/img/product-2.png',
    type: 'dresses',
    color: '#9ac5a2',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'woman',
    price: 800,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'woman'
  },
  {
    name: 'SWEATER WARMTH 3.0',
    image: 'assets/img/product-2.png',
    type: 'sweater',
    color: '#1b1b1b',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'woman',
    price: 500,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'new arrivals'
  },
  {
    name: 'JEANS EDGE 4.0',
    image: 'assets/img/product-2.png',
    type: 'jeans',
    color: '#48575c',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M'],
    gender: 'man',
    price: 600,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'denim'
  },
  {
    name: 'T-SHIRT PEACE 0.2',
    image: 'assets/img/product-2.png',
    type: 't-shirts',
    color: '#ffffff',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L'],
    gender: 'man',
    price: 300,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'new arrivals'
  },
  {
    name: 'SKIRT GRACE 1.5',
    image: 'assets/img/product-2.png',
    type: 'skirts',
    color: '#e07a5f',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M'],
    gender: 'woman',
    price: 400,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'woman'
  },
  {
    name: 'BLAZER CLASSIC 5.1',
    image: 'assets/img/product-2.png',
    type: 'outerwear',
    color: '#2a9d8f',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'woman',
    price: 1000,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'woman'
  },
  {
    name: 'COAT ELEGANT 7.0',
    image: 'assets/img/product-2.png',
    type: 'outerwear',
    color: '#a1463f',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'woman',
    price: 1300,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'new arrivals'
  },
  {
    name: 'PANTS COMFORT 2.8',
    image: 'assets/img/product-2.png',
    type: 'pants',
    color: '#3c419f',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'L', 'XL'],
    gender: 'man',
    price: 700,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'man'
  },
  {
    name: 'JEANS SLIM FIT 4.5',
    image: 'assets/img/product-2.png',
    type: 'jeans',
    color: '#292727',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'XL'],
    gender: 'man',
    price: 650,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'denim'
  },
  {
    name: 'CARDIGAN SOFT 3.3',
    image: 'assets/img/product-2.png',
    type: 'sweater',
    color: '#d9b5af',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'woman',
    price: 550,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'woman'
  },
  {
    name: 'PARKA SHIELD 6.0',
    image: 'assets/img/product-2.png',
    type: 'outerwear',
    color: '#9d3c3a',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['XL'],
    gender: 'man',
    price: 1400,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'man'
  },
  {
    name: 'SUMMER DRESS 2.5',
    image: 'assets/img/product-2.png',
    type: 'dresses',
    color: '#e4c6e8',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M'],
    gender: 'woman',
    price: 850,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'woman'
  },
  {
    name: 'JACKET CASUAL 5.2',
    image: 'assets/img/product-2.png',
    type: 'outerwear',
    color: '#8a3b9b',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'man',
    price: 1150,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'man'
  },
  {
    name: 'CHINO PANTS 2.9',
    image: 'assets/img/product-2.png',
    type: 'pants',
    color: '#b5d2a3',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['XL'],
    gender: 'man',
    price: 750,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'man'
  },
  {
    name: 'PULLOVER COZY 3.7',
    image: 'assets/img/product-2.png',
    type: 'sweater',
    color: '#cc7070',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M'],
    gender: 'woman',
    price: 520,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'woman'
  },
  {
    name: 'JACKET LEATHER 7.5',
    image: 'assets/img/product-2.png',
    type: 'outerwear',
    color: '#1b1b1b',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'XL'],
    gender: 'man',
    price: 1350,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'new arrivals'
  },
  {
    name: 'MIDI DRESS 5.8',
    image: 'assets/img/product-2.png',
    type: 'dresses',
    color: '#d9b5af',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'XL'],
    gender: 'woman',
    price: 900,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'woman'
  },
  {
    name: 'HOODIE RELAX 3.9',
    image: 'assets/img/product-2.png',
    type: 'sweater',
    color: '#4d8986',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'XL'],
    gender: 'man',
    price: 650,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'man'
  },
  {
    name: 'PANTS CARGO 4.1',
    image: 'assets/img/product-2.png',
    type: 'pants',
    color: '#48575c',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'man',
    price: 780,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'man'
  },
  {
    name: 'JACKET DENIM 5.4',
    image: 'assets/img/product-2.png',
    type: 'outerwear',
    color: '#3c419f',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['S', 'M'],
    gender: 'woman',
    price: 1100,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'denim'
  },
  {
    name: 'FLORAL DRESS 2.7',
    image: 'assets/img/product-2.png',
    type: 'dresses',
    color: '#e4c6e8',
    colors: {
      black: 'assets/img/product-2.png',
      white: 'assets/img/product-2.png',
    },
    sizes: ['L', 'XL'],
    gender: 'woman',
    price: 880,
    images: ['assets/img/product-2.png', 'assets/img/product-2.png'],
    category: 'woman'
  },
];

const $filter = document.querySelector('.filter');

if ($filter) {
  document
    .getElementById('filter-button')
    .addEventListener('click', function () {
      $filter.classList.add('open');
      const productGridItems = document.querySelectorAll('.product-grid__item');
      if (productGridItems.length > 0) {
        productGridItems.forEach(item => {
          item.style.zIndex = '-1';
        });
      }
    });

  document
    .getElementById('filter-close')
    .addEventListener('click', function () {
      $filter.classList.remove('open');
      const productGridItems = document.querySelectorAll('.product-grid__item');
      if (productGridItems.length > 0) {
        productGridItems.forEach(item => {
          item.style.zIndex = '';
        });
      }
    });

    document.addEventListener('click', function (event) {
      // Check if the filter is open and if the clicked target is outside the filter and filter button
      if ($filter.classList.contains('open') && 
          !event.target.closest('.filter') && 
          !event.target.closest('#filter-button')) {
        
        const productGridItems = document.querySelectorAll('.product-grid__item');
    
        // If there are any product grid items, reset their zIndex and close the filter
        if (productGridItems.length > 0) {
          productGridItems.forEach(item => {
            item.style.zIndex = ''; // Reset zIndex
          });
        }
    
        $filter.classList.remove('open'); // Close the filter
      }
    });


    let selectedCategory = 'new arrivals';
    let selectedColors = [];
    let selectedSizes = [];
    let selectedGender = null;
    let selectedType = null;
    let searchQuery = ''; // Додамо змінну для пошукового запиту
  
    function renderProducts(productsToRender) {
      const productGrid = document.querySelector('.product-grid');
      productGrid.innerHTML = productsToRender
        .map(
          (product) => `
                    <div class="product-grid__item" data-name="${product.name}">
              <img src="${product.image}" alt="${product.name}">
              <img class="product-like-icon ${favoriteProducts.includes(product.name) ? 'selected' : ''}"
                   src="assets/img/header-like.svg" alt="Like">
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
  
  
    function applyFilters() {
      const filteredProducts = products.filter((product) => {
        const categoryMatch = selectedCategory === 'new arrivals' || product.category === selectedCategory;
        
        const typeMatch = !selectedType ||
          selectedType === 'all' || product.type === selectedType;
  
        const colorMatch = !selectedColors.length || selectedColors.includes(product.color);
  
        const sizeMatch = !selectedSizes.length || selectedSizes.some((size) => product.sizes.includes(size));
  
        const genderMatch = !selectedGender || product.gender === selectedGender;
  
        const searchMatch = !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase());
  
        return typeMatch && categoryMatch && colorMatch && sizeMatch && genderMatch && searchMatch;
      });
  
      let favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
  
      updateFavoriteCount();
  
      renderProducts(filteredProducts);
    }
  
    // Пошук продукту по назві
    document.getElementById('searchInput').addEventListener('input', function () {
      searchQuery = this.value; // Оновлюємо пошуковий запит
      applyFilters(); // Застосовуємо фільтри, включаючи пошук
    });
  
    // Інші фільтри
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

        selectedType = item.innerText.toLowerCase();
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
          menuItem.innerText.toLowerCase() === 'new arrivals'
            ? 'new arrivals'
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
      searchQuery = ''; // Очищуємо пошуковий запит
      document.getElementById('searchInput').value = ''; // Очищуємо поле пошуку
      renderProducts(products);
    }
  
    document
      .getElementById('filter-reset')
      .addEventListener('click', clearFilters);
  
    let favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
  
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
      // Clear the existing content
      savedProductGrid.innerHTML = '';
  
      if (favoriteProducts.length === 0) {
        // If no favorites, display the empty message
        savedProductGrid.innerHTML = `
          <div class="saved-items__items">
            <h2>Your list is empty</h2>
          </div>
          <div class="saved-items__message">
            <h2>Looking for your items?</h2>
            <p>Sign in to pick up to where you left off or to start building your wishlist.</p>
            <a class="secondary-btn" href="login.html">sign in</a>
          </div>
        `;
      } else {
        // Iterate through the favorite products and display them
        favoriteProducts.forEach((productName) => {
          const product = products.find(p => p.name === productName); // Assuming 'products' is your product list
          if (product) {
            savedProductGrid.innerHTML += `
              <div class="saved-product-item">
                <a href="product.html?name=${encodeURIComponent(product.name)}" class="saved-product-link">
                  <img src="${product.image}" alt="${product.name}">
                  <p>${product.name}</p>
                  <p class="product-price">${product.price} грн</p>
                </a>
                <button class="remove-favorite-btn" data-name="${product.name}">Remove</button>
              </div>
            `;
          }
        });
        document.querySelectorAll('.remove-favorite-btn').forEach((button) => {
          button.addEventListener('click', function () {
            const productName = button.getAttribute('data-name');
            removeFavoriteProduct(productName);
          });
        });
      }
    }
  }
  

function removeFavoriteProduct(productName) {
  let favoriteProducts =
    JSON.parse(localStorage.getItem('favoriteProducts')) || [];
  
  // Filter out the product to be removed
  favoriteProducts = favoriteProducts.filter(item => item !== productName);

  // Update localStorage
  localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
  
  // Update the UI
  updateFavoriteCount(); // Update count in header
  // Re-render the saved items
  if (window.location.pathname.includes('saved-items.html') || window.location.pathname.includes('personal-account.html')) {
    location.reload(); // Reload the page to reflect changes
  }
}

function toggleFavoriteProduct(icon) {
  const productItem = icon.closest('.product-grid__item');
  const productName = productItem.getAttribute('data-name');
  let favoriteProducts =
    JSON.parse(localStorage.getItem('favoriteProducts')) || [];

  // Check if the product is already in favorites
  const isFavorite = favoriteProducts.includes(productName);

  if (isFavorite) {
    // Remove the product from favorites
    favoriteProducts = favoriteProducts.filter((item) => item !== productName);
    icon.classList.remove('selected');
  } else {
    // Add the product to favorites
    favoriteProducts.push(productName);
    icon.classList.add('selected');
  }

  // Save the updated favorites list to localStorage
  localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
  updateFavoriteCount();
}

function updateFavoriteCount() {
  const favoriteBtn = document.querySelector('.favorite-btn');
  if (!favoriteBtn) return; // If the element is not found, stop execution

  let favoriteProducts =
      JSON.parse(localStorage.getItem('favoriteProducts')) || [];

  // Find or create the span element for the count
  let favoriteCountElement = favoriteBtn.querySelector('.favorite-count');
  if (!favoriteCountElement) {
      favoriteCountElement = document.createElement('span');
      favoriteCountElement.classList.add('favorite-count');
      favoriteBtn.appendChild(favoriteCountElement); // Add to favorite-btn
  }

  // Set the count text or clear it
  favoriteCountElement.innerText =
      favoriteProducts.length > 0 ? favoriteProducts.length : '';

  // If there are selected items, remove the "blured" class; otherwise, add it
  const likeIcon = favoriteBtn.querySelector('img');
  if (favoriteProducts.length > 0) {
      likeIcon.classList.remove('blured');
  } else {
      likeIcon.classList.add('blured');
  }
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

let $favoriteBtn = document.querySelector('.favorite-btn');
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
    // Product data
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name') || 'Jacket';
    let productColor = urlParams.get('color') || ''; // Встановлюємо порожнє значення на початку
    const productSize = urlParams.get('size') || '';

    function rearrangeElementsForMobile() {
        const mainContentContainer = document.querySelector('.product__main-content');
        const infoContainer = document.querySelector('.product__info');
        const recommendationsContainer = document.querySelector('.product__recommendations');

        if (window.innerWidth < 1080) {
            if (mainContentContainer && infoContainer) {
                if (infoContainer.parentNode !== mainContentContainer.parentNode ||
                    infoContainer.nextElementSibling !== mainContentContainer) {
                    mainContentContainer.parentNode.insertBefore(infoContainer, mainContentContainer.nextSibling);
                }
            }
        } else {
            if (infoContainer && recommendationsContainer) {
                if (infoContainer.parentNode !== recommendationsContainer ||
                    infoContainer.nextElementSibling !== recommendationsContainer.firstChild) {
                    recommendationsContainer.insertBefore(infoContainer, recommendationsContainer.firstChild);
                }
            }
        }
    }

    rearrangeElementsForMobile();

    const product = products.find((p) => p.name === productName);

    if (product) {
        const mainContentContainer = document.querySelector('.product__main-content');

        if (mainContentContainer) {
            mainContentContainer.innerHTML = ''; // Очищаємо контейнер перед додаванням нових елементів

            // Додаємо головне зображення продукту
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

        // Встановлюємо назву продукту разом із сердечком
        const productNameContainer = document.querySelector('.product__name');
        if (productNameContainer) {
            productNameContainer.innerHTML = `
                <span class="product__name-text">${product.name.toUpperCase()}</span>
                <img class="product-like-icon" src="assets/img/header-like.svg" alt="Like">
            `;
            productNameContainer.style.display = 'flex';
            productNameContainer.style.justifyContent = 'space-between';

            // Додаємо обробник подій для сердечка
            const likeIcon = productNameContainer.querySelector('.product-like-icon');
            likeIcon.addEventListener('click', function () {
                toggleFavoriteProduct(likeIcon);
            });

            // Перевіряємо, чи є продукт в обраних
            let favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
            const isFavorite = favoriteProducts.includes(product.name);
            if (isFavorite) {
                likeIcon.classList.add('selected');
            }
        }

        // Встановлюємо ціну продукту
        const priceContainer = document.querySelector('.product__price');
        if (priceContainer) {
            priceContainer.textContent = `${product.price} UAH`;
        } else {
            console.error('Price container not found');
        }

        // Виводимо доступні кольори
        const colorContainer = document.querySelector('.product__color-options');
        if (colorContainer) {
            colorContainer.innerHTML = '';
            let defaultColorSet = false; // Перевіряємо, чи встановлено початковий колір

            Object.keys(product.colors).forEach((color, index) => {
                const colorItem = document.createElement('div');
                colorItem.classList.add('product__color-item');
                colorItem.innerHTML = `
                    <img src="${product.colors[color]}" alt="${color}" class="product__color-image" />
                    <p class="product__color-name">${color}</p>
                `;
                colorItem.addEventListener('click', () => changeColor(color));

                if (!productColor && !defaultColorSet) {
                    // Встановлюємо перший колір як активний за замовчуванням
                    changeColor(color);
                    defaultColorSet = true;
                }

                if (color === productColor) {
                    colorItem.classList.add('blured'); // Додаємо клас розмиття для обраного кольору
                }

                colorContainer.appendChild(colorItem);
            });
        } else {
            console.error('Color container not found');
        }

        // Виводимо доступні розміри
        const sizeContainer = document.querySelector('.product__size-btns');
        if (sizeContainer) {
            sizeContainer.innerHTML = ''; // Очищаємо вміст перед додаванням кнопок
            product.sizes.forEach((size) => {
                const sizeButton = document.createElement('button');
                sizeButton.classList.add('product__size-btn');
                sizeButton.textContent = size;
                sizeButton.setAttribute('data-size', size); // Додаємо атрибут data-size
                sizeButton.addEventListener('click', function () {
                    selectSize(sizeButton);
                });

                if (size === productSize) {
                    sizeButton.classList.add('product__size-btn--selected');
                }

                sizeContainer.appendChild(sizeButton); // Додаємо кнопки в .product__size-btns
            });
        } else {
            console.error('Size container not found');
        }

        // Додаємо назву продукту та ціну в заголовок для мобільних користувачів
        const headerName = document.querySelector('.header__product-name');
        const headerPrice = document.querySelector('.header__product-price');

        if (window.innerWidth < 768) { // Перевіряємо, чи користувач на мобільному пристрої
            if (headerName) {
                headerName.textContent = product.name.toUpperCase();
            }
            if (headerPrice) {
                headerPrice.textContent = `${product.price} UAH`;
            }
        }

    } else {
        console.error('Product not found');
    }

    // Функція для зміни кольору і оновлення URL
    function changeColor(color) {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('color', color);
        window.location.search = urlParams.toString();

        // Оновлюємо клас для обраного кольору
        const colorItems = document.querySelectorAll('.product__color-item');
        colorItems.forEach((item) => {
            const colorName = item.querySelector('.product__color-name').textContent;
            if (colorName === color) {
                item.classList.add('blured'); // Додаємо розмиття обраному кольору
            } else {
                item.classList.remove('blured'); // Видаляємо розмиття для всіх інших кольорів
            }
        });
    }

    function selectSize(button) {
      const sizeButtons = document.querySelectorAll('.product__size-btn');
      sizeButtons.forEach((btn) =>
        btn.classList.remove('product__size-btn--selected')
      );
    
      button.classList.add('product__size-btn--selected');
    
      // Зберігаємо вибраний розмір в URL
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set('size', button.textContent);
      window.history.replaceState(null, '', '?' + urlParams.toString());
    
      const addToBagButton = document.querySelector('.product__button--add-to-bag');
      if (addToBagButton) {
        addToBagButton.disabled = false;
        addToBagButton.textContent = 'add to bag';
      }
    }
    
    // Отримуємо обраний розмір із URL
    function getSelectedSize() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('size') || 'undefined'; // Повертаємо 'undefined', якщо розмір не обраний
    }
    
    const addToCartButton = document.getElementById('add-to-cart');
    if (addToCartButton) {
      addToCartButton.addEventListener('click', function () {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const selectedSize = getSelectedSize(); // Отримуємо вибраний розмір
        const productColor = 'black'; // Приклад, замініть на динамічний колір, якщо потрібно
    
        const existingItem = cart.find(
          (item) => item.name === product.name && item.color === productColor && item.size === selectedSize
        );
    
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({ ...product, quantity: 1, color: productColor, size: selectedSize });
        }
    
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'cart.html';
      });
    } else {
      console.error('Add to cart button not found');
    }

    // Функція для роботи із обраним (сердечко)
    function toggleFavoriteProduct(icon) {
        const productName = document.querySelector('.product__name-text').textContent.toUpperCase();
        let favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];

        // Перевіряємо, чи вже товар в обраних
        const isFavorite = favoriteProducts.includes(productName);

        if (isFavorite) {
            // Видаляємо продукт з обраних
            favoriteProducts = favoriteProducts.filter((item) => item !== productName);
            icon.classList.remove('selected');
        } else {
            // Додаємо продукт в обрані
            favoriteProducts.push(productName);
            icon.classList.add('selected');
        }

        // Оновлюємо список в localStorage
        localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
        updateFavoriteCount();
    }

    // Оновлення кількості обраних елементів
    function updateFavoriteCount() {
      const favoriteBtn = document.querySelector('.favorite-btn');
      
      // Якщо елемент не знайдений, виходимо з функції
      if (!favoriteBtn) {
          console.error('Favorite button not found');
          return;
      }
  
      let favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
  
      // Якщо у кнопки немає span з класом favorite-count, створюємо його
      let favoriteCountElement = favoriteBtn.querySelector('.favorite-count');
      if (!favoriteCountElement) {
          favoriteCountElement = document.createElement('span');
          favoriteCountElement.classList.add('favorite-count');
          favoriteBtn.appendChild(favoriteCountElement); // Додаємо span в кнопку
      }
  
      // Оновлюємо текст лічильника
      favoriteCountElement.textContent = favoriteProducts.length > 0 ? favoriteProducts.length : '';
  }
    updateFavoriteCount();
}
if (isCartPage) {
  const cartContainer = document.getElementById('cart-container');
  const totalElement = document.getElementById('total-amount');
  const cartTotalContainer = document.querySelector('.cart-total');
  const checkoutButton = document.querySelector('.checkout-button');
  const noteContainer = document.querySelector('.note');

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let totalAmount = 0;

  function createElement(tag, className = '', textContent = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
  }

  function renderCart() {
    cartContainer.innerHTML = ''; 
    totalAmount = 0;

    if (cart.length === 0) {
        const cartHeader = document.querySelector(".cart-header");
        const emptyMessage = createElement('p', 'empty-cart-message', 'Your cart is currently empty.');
        cartContainer.appendChild(emptyMessage);

        const returnLink = createElement('a', 'return-to-shop', 'return to shop');
        returnLink.href = 'main.html'; 
        cartContainer.appendChild(returnLink);
        if (cartHeader) cartHeader.style.display = 'none';
        if (cartTotalContainer) cartTotalContainer.style.display = 'none';
        if (checkoutButton) checkoutButton.style.display = 'none';
        if (noteContainer) noteContainer.style.display = 'none';

        totalElement.textContent = ''; 
        return;
    }else{
      const cartHeader = document.querySelector(".cart-header");
      if (cartHeader) cartHeader.style.display = 'grid';
    }

    if (cartTotalContainer) cartTotalContainer.style.display = 'flex';
    if (checkoutButton) {
        checkoutButton.style.display = 'inline-flex';
        checkoutButton.textContent = 'check out'; 
    }
    if (noteContainer) noteContainer.style.display = 'block';

    cart.forEach((item, index) => {
        const itemContainer = createElement('div', 'cart-item');

        // Див для зображення
        const imageContainer = createElement('div', 'cart-item-image');
        const itemImage = createElement('img');
        itemImage.src = item.colors[item.color];
        itemImage.alt = item.name;

        // Додаємо обробник кліку на зображення для переходу на сторінку товару
        itemImage.addEventListener('click', function() {
            window.location.href = `product.html?name=${encodeURIComponent(item.name)}`;
        });

        imageContainer.appendChild(itemImage);

        // Див для інформації про товар
        const infoContainer = createElement('div', 'cart-item-info');

        const itemDetails = createElement('div', 'cart-item-details');
        const itemName = createElement('p', '', item.name);

        // Додаємо обробник кліку на назву товару для переходу на сторінку товару
        itemName.addEventListener('click', function() {
            window.location.href = `product.html?name=${encodeURIComponent(item.name)}`;
        });

        itemDetails.appendChild(itemName);

        // Відображення розміру та кольору
        const itemSize = createElement('p', '', `${item.size}`);
        itemDetails.appendChild(itemSize);

        infoContainer.appendChild(itemDetails);

        const itemPrice = createElement('div', 'cart-item-price', `${item.price} UAH.`);
        infoContainer.appendChild(itemPrice);

        const itemQuantity = createElement('div', 'cart-item-quantity');
        const decreaseButton = createElement('button', '', '-');
        const increaseButton = createElement('button', '', '+');
        const quantityDisplay = createElement('span', '', item.quantity);

        decreaseButton.addEventListener('click', function () {
            if (item.quantity > 1) {
                item.quantity--;
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart(); 
            }
        });

        increaseButton.addEventListener('click', function () {
            item.quantity++;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart(); 
        });

        itemQuantity.appendChild(decreaseButton);
        itemQuantity.appendChild(quantityDisplay);
        itemQuantity.appendChild(increaseButton);
        infoContainer.appendChild(itemQuantity);

        const itemTotal = createElement('div', 'cart-item-total', `${item.price * item.quantity} UAH.`);
        infoContainer.appendChild(itemTotal);

        const removeButton = createElement('div', 'remove-item', 'X');
        removeButton.addEventListener('click', function () {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart(); 
        });
        infoContainer.appendChild(removeButton);

        itemContainer.appendChild(imageContainer);
        itemContainer.appendChild(infoContainer);  

        cartContainer.appendChild(itemContainer);

        totalAmount += item.price * item.quantity;
    });

    totalElement.textContent = `${totalAmount} UAH.`;
}

  renderCart();
}
});

const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

if (searchBtn){
  searchBtn.addEventListener('click', function () {
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'block';
        searchInput.focus();
        const productGridItems = document.querySelectorAll('.product-grid__item');
        if (productGridItems.length > 0) {
          productGridItems.forEach(item => {
            item.style.zIndex = '-1';
          });
        }
    } else {
        searchInput.style.display = 'none';
        const productGridItems = document.querySelectorAll('.product-grid__item');
        if (productGridItems.length > 0) {
          productGridItems.forEach(item => {
            item.style.zIndex = '';
          });
        }
    }
  });

  document.addEventListener('click', function (event) {
    if (event.target !== searchInput && event.target !== searchBtn) {
        searchInput.style.display = 'none';
        const productGridItems = document.querySelectorAll('.product-grid__item');
        if (productGridItems.length > 0) {
          productGridItems.forEach(item => {
            item.style.zIndex = '';
          });
        }
    }
});

// Запобігаємо закриттю інпуту при кліку всередині нього
searchInput.addEventListener('click', function (event) {
    event.stopPropagation();
});
}

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
  { code: '+599', name: 'Netherlands Antilles' },
  { code: '+687', name: 'New Caledonia' },
  { code: '+64', name: 'New Zealand' },
  { code: '+505', name: 'Nicaragua' },
  { code: '+227', name: 'Niger' },
  { code: '+234', name: 'Nigeria' },
  { code: '+683', name: 'Niue' },
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
  { code: '+1787', name: 'Puerto Rico' },
  { code: '+974', name: 'Qatar' },
  { code: '+242', name: 'Republic of the Congo' },
  { code: '+40', name: 'Romania' },
  { code: '+250', name: 'Rwanda' },
  { code: '+590', name: 'Saint Barthelemy' },
  { code: '+290', name: 'Saint Helena' },
  { code: '+1869', name: 'Saint Kitts and Nevis' },
  { code: '+1758', name: 'Saint Lucia' },
  { code: '+590', name: 'Saint Martin' },
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
  { code: '+58', name: 'Venezuela' },
  { code: '+84', name: 'Vietnam' },
  { code: '+681', name: 'Wallis and Futuna' },
  { code: '+967', name: 'Yemen' },
  { code: '+260', name: 'Zambia' },
  { code: '+263', name: 'Zimbabwe' }
];

window.onload = function() {
  const selectElement = document.getElementById('phonePrefix');
  if (selectElement) {
    countries.forEach((country) => {
      const option = document.createElement('option');
      option.value = country.code;
      option.text = `${country.code}`;
      selectElement.appendChild(option);
    });
  }
};

// document.addEventListener('DOMContentLoaded', function () {

//   const scrollContainer = document.querySelector('.product__main-content');
//   if(scrollContainer){
//     scrollContainer.scrollTo({
//       left: (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2,
//       behavior: 'smooth'
//   });
//   }


//   updateFavoriteCount();
// });
