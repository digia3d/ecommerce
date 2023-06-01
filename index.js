/* eslint-disable no-plusplus */

import products from './products.js';

function onLoadCartNumbers() {
  const productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(quantity, products) {
  console.log('Quantity:', quantity);
  console.log('Product:', products);
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers, 10);

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + quantity);
    document.querySelector('.cart span').textContent = productNumbers + quantity;
  } else {
    localStorage.setItem('cartNumbers', quantity);
    document.querySelector('.cart span').textContent = quantity;
  }
  localStorage.setItem(products.tag, JSON.stringify(products));
}

const carts = document.querySelectorAll('.add-cart');
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', (event) => {
    const button = event.target;
    const productId = button.dataset.productId;
    const product = products.find((p) => p.tag === productId);
    const quantityInput = document.getElementById('quantityInput');
    const quantity = parseInt(quantityInput.value, 10);
    cartNumbers(quantity, product);
  });
}


onLoadCartNumbers();

const removeCartItemButtons = document.getElementsByClassName('fa-trash-can');
for (let i = 0; i < removeCartItemButtons.length; i++) {
  const button = removeCartItemButtons[i];
  button.addEventListener('click', (event) => {
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('previous-link').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Get the active page
    const activePage = document.querySelector('.page-item.active');

    // Handle going to the previous page
    const previousPage = activePage.previousElementSibling;
    if (previousPage && !previousPage.classList.contains('disabled')) {
      // Remove the active class from the current page
      activePage.classList.remove('active');

      // Add the active class to the previous page
      previousPage.classList.add('active');
    }
  });

  document.getElementById('next-link').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Get the active page
    const activePage = document.querySelector('.page-item.active');

    // Handle going to the next page
    const nextPage = activePage.nextElementSibling;
    if (nextPage && !nextPage.classList.contains('disabled')) {
      // Remove the active class from the current page
      activePage.classList.remove('active');

      // Add the active class to the next page
      nextPage.classList.add('active');
    }
  });
});
