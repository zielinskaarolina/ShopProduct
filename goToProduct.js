document.addEventListener('DOMContentLoaded', () => {
    let productName = document.querySelector('.cardProduct').getAttribute('data-name');
    console.log(productName)
    let color = localStorage.getItem(productName)
    console.log(color)
    let productImage = document.querySelector('img')
    productImage.setAttribute('src', `${productName}_${color}.jpg`)
})