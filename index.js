let carts = document.querySelectorAll('.add-cart');
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

let removeCartItemButtons = document.getElementsByClassName('fa-trash-can')
for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
    })
}

