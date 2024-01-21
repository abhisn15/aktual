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

Copyright.innerHTML =
	"Copyright  &copy " + new Date().getFullYear() + " Aktual.com";

var swiper = new Swiper(".mySwiper", {
	direction: "vertical",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

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
