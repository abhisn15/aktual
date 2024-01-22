import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const data = [
	{
		id: "1",
		name: "Anwar Usman",
		category: "Trending",
		title:
			"Reaksi Ayah Mirna Salihin Dipolisikan Eks Pegawai: Mereka Mau Minta Pesangon Lagi",
		desc: "Menurut Edi, para karyawan yang melaporkannya ke polisi karena tak puas dengan uang pesangon. yang bisa...",
	},
];

const Copyright = document.getElementById("copyright");
const nextSlide = document.getElementById("nextSlide");
const btnPrev = document.querySelector(".prevButton");
const hamburgerBar = document.querySelector(".hamburgerBar");
const closeBar = document.querySelector(".closeBar");
const sideBar = document.querySelector(".sideBar");

hamburgerBar.addEventListener("click", () => {
	sideBar.classList.toggle("hidden");
});

closeBar.addEventListener("click", () => {
	sideBar.classList.add("hidden");
});

Copyright.innerHTML =
	"Copyright  &copy " + new Date().getFullYear() + " Aktual.com";

const swiper = new Swiper(".mySwiper", {
	direction: "vertical",
	centeredSlides: true,
	slidesPerView: "auto",
	initialSlide: 0,
	navigation: {
		nextEl: ".nextButton",
		prevEl: ".prevButton",
	},
});

if (swiper.activeIndex === 0) {
	btnPrev.classList.add("bg-white/25");
}

swiper.on("slideChange", () => {
	if (swiper.activeIndex === 0) {
		btnPrev.classList.add("bg-white/25");
	} else {
		btnPrev.classList.remove("bg-white/25");
	}

	const currentSlideNumber = swiper.activeIndex + 1;
	const totalSlides = swiper.slides.length;
	nextSlide.innerHTML = `${currentSlideNumber}/${totalSlides}`;
});

// Inisialisasi informasi slide pada awal
const initialSlideNumber = swiper.activeIndex + 1;
const totalSlides = swiper.slides.length;
nextSlide.innerHTML = `${initialSlideNumber}/${totalSlides}`;


// function renderDummyData() {
// 	const container = document.getElementById("main");

// 	// Map over the dummy data and create HTML elements
// 	const htmlElements = data.map((item) => {
//     return `
//     <div key="${item.id}" class="item">
//     ${item.id}${item.name}
//     </div>
//     `;
// 	});

// 	// Set the innerHTML of the container with the generated HTML
// 	container.innerHTML = htmlElements.join("");
// }

// // Call the function to render dummy data when the page loads
// window.onload = renderDummyData;
