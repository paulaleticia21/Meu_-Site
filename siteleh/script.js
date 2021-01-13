function perguntar() {

	alert("Enviado com Sucesso");
}
function navbarUpdate() {
	const navbar = $("#navbar");
	const scrollPos = $(document).scrollTop();

	const scrollDynamic = $(".scroll-dynamic");
	scrollDynamic.toggleClass("scrolled", scrollPos > navbar.height());
}

$(window).on("load", function () {
	// console.log("window loaded");
	$("#load-screen").fadeOut(500);
	$("#typewriter").addClass("typewriter-anim");
});
