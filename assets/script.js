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

// when clicking a dot, replace image and tagline
dots.addEventListener('click', function(e) {
	if (e.target.classList.contains('dot')) {
		const slide = e.target.dataset.slide
		document.querySelector('.banner-img').style.backgroundImage = `url(assets/images/${slides[slide].image})`
		document.querySelector('#banner p').innerHTML = slides[slide].tagLine
		// remove active class from all dots
		dots.querySelectorAll('.dot').forEach(dot => dot.classList.remove('dot_selected'))
		// add active class to clicked dot
		e.target.classList.add('dot_selected')
	}
})
function nextSlide() {
	const img = document.querySelector('.banner-img')
	const tagline = document.querySelector('#banner p')
// change image and tagline
	img.style.backgroundImage = `url(assets/images/${slides[slide].image})`
	tagline.innerHTML = slides[slide].tagLine

}


// give active class to first dot
dots.querySelector('.dot').classList.add('dot_selected')	
// insert slides

