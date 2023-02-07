const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// insert dots at bottom of the banner section (as many as there are slides)
const dots = document.querySelector('.dots')
slides.forEach((slide, index) => {
	dots.insertAdjacentHTML('beforeend', `<span class="dot" data-slide="${index}"></span>`)
})
// give active class to first dot
dots.querySelector('.dot').classList.add('dot_selected')	
// insert slides

