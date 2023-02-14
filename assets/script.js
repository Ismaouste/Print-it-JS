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

//on page load, insert first slide
window.onload = function() {
	document.querySelector('.banner-img').src = `assets/images/slideshow/${slides[0].image}`
	document.querySelector('#banner p').innerHTML = slides[0].tagLine
}


// insert dots at bottom of the banner section (as many as there are slides)
const dots = document.querySelector('.dots')
slides.forEach((slide, index) => {
	dots.insertAdjacentHTML('beforeend', `<span class="dot" data-slide="${index}"></span>`)
})

// when clicking a dot, replace image and tagline
dots.addEventListener('click', function(e) {
	if (e.target.classList.contains('dot')) {
		const slide = e.target.dataset.slide
		document.querySelector('.banner-img').src = `assets/images/slideshow/${slides[slide].image}`
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

	// get current slide
	const currentSlide = document.querySelector('.dot_selected').dataset.slide
	// remove active class from all dots
	dots.querySelectorAll('.dot').forEach(dot => dot.classList.remove('dot_selected'))
	// add active class to next dot
	if (currentSlide < slides.length - 1) {
		dots.querySelectorAll('.dot')[parseInt(currentSlide) + 1].classList.add('dot_selected')
		img.src = `assets/images/slideshow/${slides[parseInt(currentSlide) + 1].image}`
		tagline.innerHTML = slides[parseInt(currentSlide) + 1].tagLine
	} else {
		// if last slide, go back to first slide
		img.src = `assets/images/slideshow/${slides[0].image}`
		tagline.innerHTML = slides[0].tagLine
		dots.querySelector('.dot').classList.add('dot_selected')
}
}

function previousSlide() {
	const img = document.querySelector('.banner-img')
	const tagline = document.querySelector('#banner p')

	// get current slide
	const currentSlide = document.querySelector('.dot_selected').dataset.slide
	// remove active class from all dots
	dots.querySelectorAll('.dot').forEach(dot => dot.classList.remove('dot_selected'))
	// add active class to previous dot
	if (currentSlide > 0) {
		dots.querySelectorAll('.dot')[parseInt(currentSlide) - 1].classList.add('dot_selected')
		img.src = `assets/images/slideshow/${slides[parseInt(currentSlide) - 1].image}`
		tagline.innerHTML = slides[parseInt(currentSlide) - 1].tagLine
	} else {
		// if first slide, go back to last slide
		img.src = `assets/images/slideshow/${slides[slides.length - 1].image}`
		tagline.innerHTML = slides[slides.length - 1].tagLine
		dots.querySelectorAll('.dot')[slides.length - 1].classList.add('dot_selected')
	}
}


// give active class to first dot
dots.querySelector('.dot').classList.add('dot_selected')	

