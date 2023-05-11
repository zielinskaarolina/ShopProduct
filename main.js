const glassesImage = document.querySelector('.img img');
const productColors = document.querySelectorAll('.productColors div');
const allProductCard = document.querySelectorAll('.cardProduct')

document.addEventListener('DOMContentLoaded', () => {
	

	const changeImage = (name,color,img) => {
		console.log('klik')
		img.setAttribute('src',`${name}_${color}.jpg`)
		localStorage.setItem(`${name}`, `${color}`);
	}
	
	allProductCard.forEach((card) => {
		//nazwa produktu
		let productName = card.getAttribute('data-name');
	
		//kolory produktu
		let productColors = card.querySelectorAll('.productColors div')
		
		//zdjecie produktu
		let productImage = card.querySelector('img')
		
		
		productColors.forEach((color) =>{
			color.addEventListener("click", (e) => {
				//wybrany kolor
				chooseColor = e.target.getAttribute('class');
				changeImage(productName,chooseColor,productImage)
			})
		})
	})
})

