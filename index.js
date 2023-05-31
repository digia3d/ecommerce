/* eslint-disable no-plusplus */

function onLoadCartNumbers() {
  const productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers, 10);

  if (productNumbers) {
    localStorage.setItem('cartNumbers', (productNumbers += 1));
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
}

const carts = document.querySelectorAll('.add-cart');
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers();
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

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content loaded");

  document.getElementById("previous-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the active page
    let activePage = document.querySelector(".page-item.active");

    // Handle going to the previous page
    let previousPage = activePage.previousElementSibling;
    if (previousPage && !previousPage.classList.contains("disabled")) {
      // Remove the active class from the current page
      activePage.classList.remove("active");

      // Add the active class to the previous page
      previousPage.classList.add("active");
    }
  });

  document.getElementById("next-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the active page
    let activePage = document.querySelector(".page-item.active");

    // Handle going to the next page
    let nextPage = activePage.nextElementSibling;
    if (nextPage && !nextPage.classList.contains("disabled")) {
      // Remove the active class from the current page
      activePage.classList.remove("active");

      // Add the active class to the next page
      nextPage.classList.add("active");
    }
  });
});



