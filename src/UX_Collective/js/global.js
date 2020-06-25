function show() {
	var x = document.getElementById("menu");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
		document.getElementById("icon").src = "img/times.svg";
		} else {
    x.style.display = "none";
		document.getElementById("icon").src = "img/bars.svg";
	}
}