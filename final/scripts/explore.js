import { showLoader, hideLoader } from './loader.js';
import { shopProducts } from '../data/shopData.mjs';
import { setupModal } from './modal.js';
import { updateFooter } from './footerUtils.js';
import './nav.js';

showLoader();

const container = document.getElementById('explore-container');
const modalContent = document.getElementById('modal-content');
const categoryFilter = document.getElementById('category-filter');

const { openModal, closeModal } = setupModal({
  overlayId: 'modal-overlay',
  modalId: 'modal',
  closeBtnId: 'closeModal'
});


function renderProducts(products) {
  try {
    container.innerHTML = '';

    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <p><strong>Type:</strong> ${product.type}</p>
        ${product.engine ? `<p><strong>Engine:</strong> ${product.engine}</p>` : ''}
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Category:</strong> ${product.category}</p>
      `;

      card.addEventListener('click', () => {
        modalContent.innerHTML = `
          <h2>${product.name}</h2>
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <p>${product.description}</p>
          ${product.engine ? `<p><strong>Engine:</strong> ${product.engine}</p>` : ''}
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Category:</strong> ${product.category}</p>
        `;
        openModal();
      });

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error rendering products:', error);
    container.innerHTML = `<p class="error">Sorry, we couldn’t load the products. Please try again later.</p>`;
  }
}

// Filtering logic
categoryFilter.addEventListener('change', () => {
  const value = categoryFilter.value;
  const filtered = value === 'all'
    ? shopProducts
    : shopProducts.filter(p => p.type === value);

  renderProducts(filtered);
});

// const brokenProducts = undefined;
// renderProducts(brokenProducts);

renderProducts(shopProducts);

hideLoader();
updateFooter();
